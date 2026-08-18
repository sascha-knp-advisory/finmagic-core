import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SolutionFinder.css";

const SolutionFinder = () => {
  useEffect(() => {
    const SERVICES: Record<
      string,
      {
        type: string;
        nameHtml: string;
        desc: string;
        meta: { label: string; val: string }[];
      }
    > = {
      // Texts kept in sync with the "What we do" tiles (Services.tsx) — that is the source of truth.
      cashflow: {
        type: "Individual Solution",
        nameHtml: "Cash Flow <em>Forecasting</em>",
        desc: "Regain clarity about your current and future cash position and optimize your working capital. A short- and long-term forecast you can actually trust. Includes scenario modelling, runway clarity and stakeholder-ready outputs — built to outlive the engagement.",
        meta: [{ label: "Setup", val: "3-10 days" }],
      },
      budgeting: {
        type: "Individual Solution",
        nameHtml: "<em>Budgeting</em>",
        desc: "Annual budget & rolling forecast process designed for your organization and business model. From marketing & sales budget to P&L and cash, with built-in scenarios. Budgets your teams own and use. Best booked July – September to prepare your annual budget for board approval.",
        meta: [{ label: "Setup period", val: "2-4 weeks" }],
      },
      fcfo: {
        type: "Fractional Role",
        nameHtml: "Fractional <em>CFO</em>",
        desc: "An operational, hands-on CFO backed by the newest tools and workflows. We build or rebuild your reporting, financial planning, cash forecasting and budgeting — and represent the finance function in board and investor meetings. We establish the operating cadence, coordinate your team, and own the timely close.",
        meta: [{ label: "Engagement", val: "2–4 days / month" }],
      },
      ffpa: {
        type: "Fractional Role",
        nameHtml: "Fractional <em>FP&A</em>",
        desc: "Planning, budgeting and forecasting as an embedded function. Build the operating model that ties your strategy to the cash you actually have. Scenario thinking built into every artefact — best engaged July – September ahead of the annual planning cycle (also see our Budgeting solution).",
        meta: [
          { label: "Setup", val: "1-5 days" },
          { label: "Ongoing", val: "0.5–2 days / month" },
        ],
      },
      controller: {
        type: "Fractional Role",
        nameHtml: "Fractional <em>Controlling</em>",
        desc: "Monthly close in 5 days, investor-ready numbers, reliable reporting cadence. We own the reporting layer. You focus on running the business.",
        meta: [
          { label: "Setup", val: "1-5 days" },
          { label: "Ongoing", val: "0.5–2 days / month" },
        ],
      },
      audit: {
        type: "Individual Solution",
        nameHtml: "Finance Process <em>Audit & Automation</em>",
        desc: "Identify where processes stall with our signature <em>Finance Process Audit</em> of your finance function. A prioritised, scoped roadmap with quick wins and structural fixes provides clarity and clear next steps. The lowest-friction way to identify exactly where to start — and the natural predecessor to deeper automation work.",
        meta: [{ label: "Engagement", val: "2–5 days" }],
      },
      reporting: {
        type: "Individual Solution",
        nameHtml: "Investor Reporting <em>as a Service</em>",
        desc: "Monthly and quarterly reporting as a service or one-time setup. Based on your accounting data — automated structure, board-ready outputs, no more Excel gymnastics. The most direct path to accurate numbers and full visibility into your financial health.",
        meta: [{ label: "Setup", val: "1-5 days" }],
      },
      bookkeeping: {
        type: "Individual Solution",
        nameHtml: "Bookkeeping <em>as a Service</em>",
        desc: "A modern bookkeeping function with automation where it matters: Clean books, automated approval and payment workflows — no more chasing your tax advisor mid-month. We run the day-to-day or do a one-time setup so your numbers are always ready for the close.",
        meta: [
          { label: "Setup", val: "1-5 days" },
          { label: "Subscription", val: "from €749 / month" },
        ],
      },
      kpis: {
        type: "Individual Solution",
        nameHtml: "Performance Management <em>& KPIs</em>",
        desc: "North-star metrics, operating cadence and board packs. We map your business so the numbers that matter become visible. Decisions based on your actual drivers, not wishlist KPIs.",
        meta: [{ label: "Setup period", val: "3-6 weeks" }],
      },
    };

    const STEP_META: Record<
      string,
      { depth: number; max: number; service?: string }
    > = {
      start: { depth: 0, max: 3 },
      q1: { depth: 1, max: 3 },
      q2a_area: { depth: 2, max: 3 },
      q2b: { depth: 2, max: 2 },
      q3a_numbers: { depth: 3, max: 3 },
      q3a_planning: { depth: 3, max: 3 },
      q3a_ops: { depth: 3, max: 3 },
      r_cashflow: { depth: 3, max: 3, service: "cashflow" },
      r_budgeting: { depth: 3, max: 3, service: "budgeting" },
      r_fcfo: { depth: 3, max: 3, service: "fcfo" },
      r_ffpa: { depth: 2, max: 2, service: "ffpa" },
      r_controller: { depth: 2, max: 2, service: "controller" },
      r_audit: { depth: 3, max: 3, service: "audit" },
      r_reporting: { depth: 3, max: 3, service: "reporting" },
      r_bookkeeping: { depth: 3, max: 3, service: "bookkeeping" },
      r_kpis: { depth: 3, max: 3, service: "kpis" },
    };

    const root = document.getElementById("knp-sf-root");
    if (!root) return;

    const $ = (id: string) => document.getElementById(id);
    // scope-local query helpers
    const qaScreens = () =>
      Array.from(root.querySelectorAll<HTMLElement>(".screen"));
    const qaOpts = () => Array.from(root.querySelectorAll<HTMLElement>(".opt"));

    let history: string[] = [];

    function go(stepId: string) {
      history.push(stepId);
      render(stepId);
    }

    function sel(el: HTMLElement, stepId: string) {
      const optsWrap = el.closest(".opts");
      if (optsWrap) {
        optsWrap.querySelectorAll<HTMLElement>(".opt").forEach((o) =>
          o.classList.add(o === el ? "selected" : "faded")
        );
      }
      window.setTimeout(() => go(stepId), 460);
    }

    function goBack() {
      if (history.length <= 1) return;
      history.pop();
      render(history[history.length - 1]);
    }

    function render(stepId: string) {
      qaScreens().forEach((s) => s.classList.remove("active"));
      qaOpts().forEach((o) => o.classList.remove("selected", "faded"));

      const meta = STEP_META[stepId] || ({} as { depth?: number; max?: number; service?: string });

      if (meta.service) {
        renderResult(meta.service);
        $("s-result")?.classList.add("active");
      } else {
        const el = $("s-" + stepId);
        if (el) el.classList.add("active");
      }

      // Progress dots
      const prog = $("progress");
      if (prog) {
        prog.innerHTML = "";
        if (stepId !== "start") {
          for (let i = 1; i <= (meta.max || 3); i++) {
            const d = document.createElement("div");
            d.className =
              "prog-dot" +
              (i < (meta.depth || 0)
                ? " done"
                : i === meta.depth
                ? " active"
                : "");
            prog.appendChild(d);
          }
        }
      }

      const backBtn = $("backBtn");
      if (backBtn)
        backBtn.style.visibility = history.length <= 1 ? "hidden" : "visible";
      window.scrollTo(0, 0);
    }

    function renderResult(key: string) {
      const s = SERVICES[key];
      const isFractional = s.type === "Fractional Role";
      const btnLabel = isFractional ? "Request Pricing" : "Book a scoping call";
      const btnAttrs = isFractional
        ? `href="#" data-rp-open="1"`
        : `href="https://calendar.app.google/JxhvCPSHq32uFtEKA" target="_blank" rel="noopener noreferrer"`;
      const metaCells = s.meta
        .map(
          (m) =>
            `<div class="meta-cell"><div class="meta-label">${m.label}</div><div class="meta-val">${m.val}</div></div>`
        )
        .join("");

      const resultEl = $("s-result");
      if (!resultEl) return;
      resultEl.innerHTML = `
        <div class="result-badge">${s.type}</div>
        <div class="result-pre">Your best match</div>
        <h2 class="result-name">${s.nameHtml}</h2>
        <p class="result-desc">${s.desc}</p>
        ${s.meta.length ? `<div class="result-meta">${metaCells}</div>` : ""}
        <div class="result-actions">
          <a class="btn btn-primary" ${btnAttrs}>${btnLabel}</a>
        </div>
        <div class="result-divider"></div>
        <button class="restart-btn" data-restart="1">↺ Start over</button>
      `;
    }

    function restart() {
      history = [];
      render("start");
    }

    // ── REQUEST PRICING MODAL ──
    // TODO: Set RP_ENDPOINT to your handler (Formspree, n8n webhook, etc.)
    // const RP_ENDPOINT = 'https://formspree.io/f/YOUR_ID';

    function openRpModal() {
      $("rpOverlay")?.classList.add("open");
      document.body.style.overflow = "hidden";
      window.setTimeout(
        () => ($("rpName") as HTMLInputElement | null)?.focus(),
        50
      );
    }

    function closeRpModal() {
      $("rpOverlay")?.classList.remove("open");
      document.body.style.overflow = "";
      window.setTimeout(() => {
        const form = $("rpForm") as HTMLFormElement | null;
        if (form) {
          form.style.display = "";
          form.reset();
        }
        $("rpSuccess")?.classList.remove("show");
      }, 260);
    }

    function rpOutsideClick(e: MouseEvent) {
      if (e.target === $("rpOverlay")) closeRpModal();
    }

    async function rpSubmit(e: Event) {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const btn = form.querySelector<HTMLButtonElement>(".rp-submit");
      if (!btn) return;
      btn.textContent = "Sending…";
      btn.disabled = true;

      // payload retained for when the endpoint is wired up
      void {
        name: ($("rpName") as HTMLInputElement | null)?.value,
        company: ($("rpCompany") as HTMLInputElement | null)?.value,
        email: ($("rpEmail") as HTMLInputElement | null)?.value,
      };

      try {
        // Uncomment when endpoint is ready:
        // await fetch(RP_ENDPOINT, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        //   body: JSON.stringify(payload)
        // });
        await new Promise((r) => window.setTimeout(r, 700));
        const formEl = $("rpForm") as HTMLFormElement | null;
        if (formEl) formEl.style.display = "none";
        $("rpSuccess")?.classList.add("show");
      } catch {
        btn.textContent = "Request Pricing →";
        btn.disabled = false;
      }
    }

    // ── Event wiring (replaces inline onclick attributes) ──
    const getStarted = root.querySelector<HTMLElement>("[data-go='q1']");
    const onGetStarted = () => go("q1");
    getStarted?.addEventListener("click", onGetStarted);

    const backBtnEl = $("backBtn");
    const onBack = () => goBack();
    backBtnEl?.addEventListener("click", onBack);

    // Static option buttons: wired via data-sel attribute
    const staticOpts = Array.from(
      root.querySelectorAll<HTMLElement>(".opt[data-sel]")
    );
    const optHandlers: Array<[HTMLElement, (e: Event) => void]> = [];
    staticOpts.forEach((optEl) => {
      const target = optEl.getAttribute("data-sel") || "";
      const handler = () => sel(optEl, target);
      optEl.addEventListener("click", handler);
      optHandlers.push([optEl, handler]);
    });

    // Delegated clicks for dynamically rendered result content + modal triggers
    const onRootClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const rpOpen = t.closest("[data-rp-open]");
      if (rpOpen) {
        e.preventDefault();
        openRpModal();
        return;
      }
      if (t.closest("[data-restart]")) {
        restart();
        return;
      }
      if (t.closest("[data-rp-close]")) {
        closeRpModal();
        return;
      }
    };
    root.addEventListener("click", onRootClick);

    const overlayEl = $("rpOverlay");
    const onOverlayClick = (e: MouseEvent) => rpOutsideClick(e);
    overlayEl?.addEventListener("click", onOverlayClick);

    const formEl = $("rpForm") as HTMLFormElement | null;
    const onFormSubmit = (e: Event) => rpSubmit(e);
    formEl?.addEventListener("submit", onFormSubmit);

    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeRpModal();
    };
    document.addEventListener("keydown", onKeydown);

    // Initial render
    render("start");

    // ── Cleanup ──
    return () => {
      getStarted?.removeEventListener("click", onGetStarted);
      backBtnEl?.removeEventListener("click", onBack);
      optHandlers.forEach(([el, h]) => el.removeEventListener("click", h));
      root.removeEventListener("click", onRootClick);
      overlayEl?.removeEventListener("click", onOverlayClick);
      formEl?.removeEventListener("submit", onFormSubmit);
      document.removeEventListener("keydown", onKeydown);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="knp-sf" id="knp-sf-root">
      <header className="nav">
        <Link to="/" className="nav-logo">
          KNP Advisory<span className="dot">.</span>
        </Link>
        <div className="progress" id="progress"></div>
        <div className="nav-right">
          <button className="back-btn" id="backBtn" style={{ visibility: "hidden" }}>
            ← Back
          </button>
          <Link to="/" className="sf-close" aria-label="Exit Solution Finder">
            ✕
          </Link>
        </div>
      </header>

      <main>
        {/* START */}
        <div className="screen active" id="s-start">
          <div className="eyebrow">Solution Finder</div>
          <h1 className="start-title">
            Find the right <em>service</em>
            <br />
            in three questions.
          </h1>
          <p className="start-desc">
            Tell us where the pain is. We'll match you to the service or role
            that fits — no sales call required to get started.
          </p>
          <button className="btn btn-primary" data-go="q1">
            Get started →
          </button>
          <p className="start-hint">Takes less than a minute</p>
        </div>

        {/* Q1 */}
        <div className="screen" id="s-q1">
          <div className="q-step">Question 1</div>
          <h2 className="q-title">
            What best describes where you are right now?
          </h2>
          <div className="opts">
            <div className="opt" data-sel="q2a_area">
              <div className="opt-text">
                "We need help improving or fixing our existing finance
                processes."
              </div>
            </div>
            <div className="opt" data-sel="q2b">
              <div className="opt-text">
                "We're looking for ongoing financial leadership and embedded
                support."
              </div>
            </div>
          </div>
        </div>

        {/* Q2A AREA */}
        <div className="screen" id="s-q2a_area">
          <div className="q-step">Question 2</div>
          <h2 className="q-title">Where is the friction mainly felt?</h2>
          <div className="opts">
            <div className="opt" data-sel="q3a_numbers">
              <div className="opt-text">
                "In our numbers — reporting, visibility, understanding
                performance."
              </div>
            </div>
            <div className="opt" data-sel="q3a_planning">
              <div className="opt-text">
                "In our planning — cash flow, budgeting, forecasting."
              </div>
            </div>
            <div className="opt" data-sel="q3a_ops">
              <div className="opt-text">
                "In our operations — processes, tools, or team structure."
              </div>
            </div>
          </div>
        </div>

        {/* Q2B FRACTIONAL */}
        <div className="screen" id="s-q2b">
          <div className="q-step">Question 2</div>
          <h2 className="q-title">
            What kind of financial leadership are you looking for?
          </h2>
          <div className="opts">
            <div className="opt" data-sel="r_fcfo">
              <div className="opt-text">
                "Someone who owns the finance function and represents it to
                investors and the board."
              </div>
            </div>
            <div className="opt" data-sel="r_ffpa">
              <div className="opt-text">
                "Structured financial planning, budgeting and scenario
                modelling."
              </div>
            </div>
            <div className="opt" data-sel="r_controller">
              <div className="opt-text">
                "A reliable monthly close and investor-ready reporting cadence."
              </div>
            </div>
            <div className="opt" data-sel="r_kpis">
              <div className="opt-text">
                "A clear picture of the metrics and drivers that actually run
                our business."
              </div>
            </div>
            <div className="opt" data-sel="r_bookkeeping">
              <div className="opt-text">
                "Professionalizing our bookkeeping and reducing friction with
                our tax advisor."
              </div>
            </div>
          </div>
        </div>

        {/* Q3A NUMBERS */}
        <div className="screen" id="s-q3a_numbers">
          <div className="q-step">Question 3</div>
          <h2 className="q-title">What's the reporting challenge?</h2>
          <div className="opts">
            <div className="opt" data-sel="r_reporting">
              <div className="opt-text">
                "We need reliable reporting for our investors and the board."
              </div>
            </div>
            <div className="opt" data-sel="r_kpis">
              <div className="opt-text">
                "We have lots of figures but can't see what actually drives
                performance."
              </div>
            </div>
            <div className="opt" data-sel="r_kpis">
              <div className="opt-text">
                "We need to understand how our products and campaigns perform."
              </div>
            </div>
          </div>
        </div>

        {/* Q3A PLANNING */}
        <div className="screen" id="s-q3a_planning">
          <div className="q-step">Question 3</div>
          <h2 className="q-title">What's the planning challenge?</h2>
          <div className="opts">
            <div className="opt" data-sel="r_cashflow">
              <div className="opt-text">
                "Cash flow is unpredictable — liquidity is a constant pressure
                point."
              </div>
            </div>
            <div className="opt" data-sel="r_budgeting">
              <div className="opt-text">
                "Reality often diverts from our budget and forecasts."
              </div>
            </div>
          </div>
        </div>

        {/* Q3A OPS */}
        <div className="screen" id="s-q3a_ops">
          <div className="q-step">Question 3</div>
          <h2 className="q-title">What's the operational challenge?</h2>
          <div className="opts">
            <div className="opt" data-sel="r_fcfo">
              <div className="opt-text">
                "We have no — or are unhappy with — our strategic financial
                leadership."
              </div>
            </div>
            <div className="opt" data-sel="r_audit">
              <div className="opt-text">
                "Processes take too long, or our tools don't fit our business
                model."
              </div>
            </div>
            <div className="opt" data-sel="r_bookkeeping">
              <div className="opt-text">
                "Working with our tax advisor is time-consuming and leads to
                misunderstandings."
              </div>
            </div>
          </div>
        </div>

        {/* RESULT (dynamic) */}
        <div className="screen" id="s-result"></div>
      </main>

      {/* REQUEST PRICING MODAL */}
      <div className="rp-overlay" id="rpOverlay">
        <div className="rp-card">
          <button className="rp-close" data-rp-close="1" aria-label="Close">
            ✕
          </button>
          <div className="rp-eyebrow">Request Pricing</div>
          <h3 className="rp-title">Tell us about your company.</h3>
          <p className="rp-sub">We'll get back to you within one business day.</p>
          <form id="rpForm">
            <div className="rp-field">
              <label htmlFor="rpName">Name</label>
              <input
                type="text"
                id="rpName"
                name="name"
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </div>
            <div className="rp-field">
              <label htmlFor="rpCompany">Company</label>
              <input
                type="text"
                id="rpCompany"
                name="company"
                placeholder="Your company"
                required
              />
            </div>
            <div className="rp-field">
              <label htmlFor="rpEmail">Email</label>
              <input
                type="email"
                id="rpEmail"
                name="email"
                placeholder="your@email.com"
                required
                autoComplete="email"
              />
            </div>
            <button type="submit" className="btn btn-primary rp-submit">
              Request Pricing →
            </button>
          </form>
          <div className="rp-success" id="rpSuccess">
            <div className="rp-check">✓</div>
            <h3>Request sent.</h3>
            <p>We'll be in touch within one business day.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionFinder;
