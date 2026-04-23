import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Scroll to hash anchor after React hydration (fixes #contact links from external sites)
requestAnimationFrame(() => {
  const hash = window.location.hash;
  if (hash) {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
});
