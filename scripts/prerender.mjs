import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const ROUTES = ["/", "/imprint", "/privacy", "/interim-cfo"];

// Simple static file server for dist/
function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);
      if (!existsSync(filePath)) filePath = join(DIST, "index.html"); // SPA fallback
      try {
        const ext = filePath.split(".").pop();
        const types = { html: "text/html", js: "application/javascript", css: "text/css", png: "image/png", ico: "image/x-icon", svg: "image/svg+xml", jpg: "image/jpeg" };
        res.setHeader("Content-Type", types[ext] || "application/octet-stream");
        res.end(readFileSync(filePath));
      } catch {
        res.statusCode = 404;
        res.end();
      }
    });
    server.listen(0, () => {
      const port = server.address().port;
      console.log(`  Static server on port ${port}`);
      resolve({ server, port });
    });
  });
}

async function prerender() {
  console.log("Pre-rendering routes:", ROUTES.join(", "));

  const { server, port } = await startServer();
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${port}${route}`;
    console.log(`  Rendering ${route}...`);

    await page.goto(url, { waitUntil: "networkidle0", timeout: 15000 });
    // Wait a bit for React to settle + Helmet to inject meta tags
    await page.waitForSelector("h1", { timeout: 5000 }).catch(() => {});

    const html = await page.content();

    // Write to dist/route/index.html
    const outDir = route === "/" ? DIST : join(DIST, route);
    if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
    const outFile = join(outDir, "index.html");
    writeFileSync(outFile, html);
    console.log(`  Wrote ${outFile} (${(html.length / 1024).toFixed(1)}KB)`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log("Pre-rendering complete.");
}

prerender().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});
