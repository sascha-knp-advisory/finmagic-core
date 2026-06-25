import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

/* ─────────────  SERVICE DATA  ─────────────
   Ported 1:1 from the standalone prototype, with Markus' wording /
   ordering changes applied. `key` is used for accordion state. */

type MetaItem = { label: string; value: string };
type SubItem = { name: string; desc: string; body: ReactNode };
type Service = {
  key: string;
  name: string;
  desc: ReactNode;
  meta?: MetaItem[];
  subs?: SubItem[];
};

const fractionalRoles: Service[] = [
  {
    key: "cfo",
    name: "Fractional CFO",
    desc:
      "An operational, hands-on CFO backed by the newest tools and workflows. We build or rebuild your reporting, financial planning, cash forecasting and budgeting — and represent the finance function in board and investor meetings. We establish the operating cadence, coordinate your team, and own the timely close.",
    meta: [{ label: "Engagement", value: "2–4 days / month" }],
  },
  {
    key: "controlling",
    name: "Fractional Controlling",
    desc:
      "Monthly close in 5 days, investor-ready numbers, reliable reporting cadence. We own the reporting layer. You focus on running the business.",
    meta: [
      { label: "Setup", value: "1-5 days" },
      { label: "Ongoing", value: "0.5–2 days / month" },
    ],
  },
  {
    key: "fpa",
    name: "Fractional FP&A",
    desc:
      "Planning, budgeting and forecasting as an embedded function. Build the operating model that ties your strategy to the cash you actually have. Scenario thinking built into every artefact — best engaged July – September ahead of the annual planning cycle (also see our Budgeting solution).",
    meta: [
      { label: "Setup", value: "1-5 days" },
      { label: "Ongoing", value: "0.5–2 days / month" },
    ],
  },
];

const individualSolutions: Service[] = [
  {
    key: "bookkeeping",
    name: "Bookkeeping as a Service",
    desc:
      "A modern bookkeeping function with automation where it matters: Clean books, automated approval and payment workflows — no more chasing your tax advisor mid-month. We run the day-to-day or do a one-time setup so your numbers are always ready for the close.",
    meta: [
      { label: "Setup", value: "1-5 days" },
      { label: "Subscription", value: "€750-2,500 / month" },
    ],
  },
  {
    key: "investor-reporting",
    name: "Investor Reporting as a Service",
    desc:
      "Monthly and quarterly reporting as a service or one-time setup. Based on your accounting data — automated structure, board-ready outputs, no more Excel gymnastics. The most direct path to accurate numbers and full visibility into your financial health.",
    meta: [{ label: "Setup", value: "1-5 days" }],
  },
  {
    key: "budgeting",
    name: "Budgeting",
    desc:
      "Annual budget & rolling forecast process designed for your organization and business model. From marketing & sales budget to P&L and cash, with built-in scenarios. Budgets your teams own and use. Best booked July – September to prepare your annual budget for board approval.",
    meta: [{ label: "Setup period", value: "2-4 weeks" }],
  },
  {
    key: "performance",
    name: "Performance Management & KPIs",
    desc:
      "North-star metrics, operating cadence and board packs. We map your business so the numbers that matter become visible. Decisions based on your actual drivers, not wishlist KPIs.",
    meta: [{ label: "Setup period", value: "3-6 weeks" }],
    subs: [
      {
        name: "Driver Tree Dashboard",
        desc: "Metrics map · root cause-ready",
        body: "Map every metric to its business driver so the one lever that moves your numbers becomes visible. A single visual that shows cause and effect across your P&L — so you always know which lever to pull.",
      },
      {
        name: "Real-time Dashboard",
        desc: "Live KPIs · daily ops",
        body: "A live operations view of the numbers that run your day. Built on your existing data sources — no manual updates, no lag.",
      },
      {
        name: "Growth Analytics",
        desc: "Channel / cohort / campaign",
        body: "Acquisition, retention and cohort analysis — on a granular level so you know where growth actually comes from. Built to answer the question your investors always ask first.",
      },
    ],
  },
  {
    key: "cashflow",
    name: "Cash Flow Forecasting",
    desc:
      "Regain clarity about your current and future cash position and optimize your working capital. A short- and long-term forecast you can actually trust. Includes scenario modelling, runway clarity and stakeholder-ready outputs — built to outlive the engagement.",
    meta: [{ label: "Setup", value: "3-10 days" }],
  },
  {
    key: "audit",
    name: "Finance Process Audit & Automation",
    desc: (
      <>
        Identify where processes stall with our signature{" "}
        <em>Finance Process Audit</em> of your finance function. A prioritised,
        scoped roadmap with quick wins and structural fixes provides clarity and
        clear next steps. The lowest-friction way to identify exactly where to
        start — and the natural predecessor to deeper automation work.
      </>
    ),
    meta: [{ label: "Engagement", value: "2–5 days" }],
  },
  {
    key: "transactions",
    name: "Transactions & Investor Readiness",
    desc:
      "Get your numbers and narrative ready for fundraising or exit. We prepare the financial story, data room and quality of earnings documentation that investors and acquirers need — so you move faster and negotiate from a position of strength.",
    meta: [{ label: "Engagement period", value: "4-8 weeks + optional process support" }],
  },
  {
    key: "interim",
    name: "Interim CFO & Finance Ops Leadership",
    desc:
      "We go all-in — to stabilize, scale, or reset your finance engine. Full-time embedded leadership for companies navigating a transition: a departing CFO, a funding round, or rapid operational scaling that the existing team can't absorb.",
    meta: [{ label: "Engagement period", value: "3-18 months" }],
  },
];

/* ─────────────  SERVICE ITEM  ───────────── */

const ServiceItem = ({
  service,
  isOpen,
  onToggle,
}: {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const [openSub, setOpenSub] = useState<number | null>(null);

  return (
    <div className={`svc${isOpen ? " open" : ""}`} onClick={onToggle}>
      <div className="svc-row">
        <span className="svc-name">{service.name}</span>
      </div>
      <div className="svc-detail">
        <div className="svc-detail-inner">
          <p className="svc-desc">{service.desc}</p>
          {service.meta && (
            <div className="svc-meta">
              {service.meta.map((m) => (
                <div className="item" key={m.label}>
                  <span>{m.label}</span>
                  <strong>{m.value}</strong>
                </div>
              ))}
            </div>
          )}
          {service.subs && (
            <div className="subs">
              <div className="subs-label">Sub-services</div>
              <div className="sub-list">
                {service.subs.map((sub, i) => (
                  <div
                    className={`sub${openSub === i ? " open" : ""}`}
                    key={sub.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenSub(openSub === i ? null : i);
                    }}
                  >
                    <div className="sub-row">
                      <span className="name">{sub.name}</span>
                      <span className="desc">{sub.desc}</span>
                    </div>
                    <div className="sub-detail">
                      <div className="sub-detail-inner">
                        <p className="svc-desc">{sub.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─────────────  REQUEST PRICING MODAL  ───────────── */

const RequestPricingModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    try {
      // Endpoint not yet wired — mirrors the prototype's placeholder behaviour.
      await new Promise((r) => setTimeout(r, 700));
      setSuccess(true);
    } catch {
      setSending(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset after the close transition, like the prototype.
    setTimeout(() => {
      setSending(false);
      setSuccess(false);
    }, 260);
  };

  return (
    <div
      className={`rp-overlay${open ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="rp-card">
        <button className="rp-close" onClick={handleClose} aria-label="Close">
          ✕
        </button>
        <div className="rp-eyebrow">Request Pricing</div>
        <h3 className="rp-title">Tell us about your company.</h3>
        <p className="rp-sub">We'll get back to you within one business day.</p>
        <form
          id="rpForm"
          onSubmit={handleSubmit}
          style={{ display: success ? "none" : undefined }}
        >
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
            <label htmlFor="rpStage">Stage</label>
            <select id="rpStage" name="stage" defaultValue="">
              <option value="" disabled>
                Select your stage
              </option>
              <option value="Pre-seed">Pre-seed</option>
              <option value="Seed">Seed</option>
              <option value="Series A">Series A</option>
              <option value="Series B+">Series B+</option>
              <option value="Small & Medium Business">
                Small &amp; Medium Business
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="rp-field">
            <label htmlFor="rpMessage">Message</label>
            <textarea
              id="rpMessage"
              name="message"
              placeholder="Anything you'd like us to know before we reach out?"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary rp-submit"
            disabled={sending}
          >
            {sending ? "Sending…" : "Request Pricing →"}
          </button>
        </form>
        <div className={`rp-success${success ? " show" : ""}`}>
          <div className="rp-check">✓</div>
          <h3>Request sent.</h3>
          <p>We'll be in touch within one business day.</p>
        </div>
      </div>
    </div>
  );
};

/* ─────────────  SERVICES SECTION  ───────────── */

const Services = () => {
  // One open service per column. Track by key so columns are independent.
  const [openLeft, setOpenLeft] = useState<string | null>(null);
  const [openRight, setOpenRight] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="knp-services section" id="services">
      <h2>
        Services<span className="coral-dot">.</span>
      </h2>
      <h3 className="section-subhead">Tailored to your needs</h3>
      <p className="lead">
        {" "}
        We meet you where the pain is: Hire our experts on a fractional basis, or
        pick just the service you need.
      </p>

      <div className="paths">
        {/* LEFT: Fractional Roles */}
        <div className="path-col">
          <div className="path-head">
            <h3 className="path-title">
              Fractional <em>Roles</em>
            </h3>
            <p className="path-sub">
              A complete finance function on demand. Senior expertise without the
              full-time price tag — embedded in your team, accountable for
              outcomes.
            </p>
          </div>
          <div className="path-divider" />
          <div className="path-cta">
            <button
              className="btn btn-primary"
              onClick={() => setModalOpen(true)}
            >
              Request Pricing
            </button>
          </div>

          <div className="svc-list">
            {fractionalRoles.map((s) => (
              <ServiceItem
                key={s.key}
                service={s}
                isOpen={openLeft === s.key}
                onToggle={() =>
                  setOpenLeft(openLeft === s.key ? null : s.key)
                }
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Individual Solutions */}
        <div className="path-col">
          <div className="path-head">
            <h3 className="path-title">
              Individual <em>Solutions</em>
            </h3>
            <p className="path-sub">
              A single, sharply-scoped deliverable. We provide just what you need
              — one clear outcome, on a fixed timeline.
            </p>
          </div>
          <div className="path-divider" />
          <div className="path-cta">
            <a
              href="https://calendar.app.google/ucm1X1bTqKcT3j3i6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book a scoping session
            </a>
          </div>

          <div className="svc-list">
            {individualSolutions.map((s) => (
              <ServiceItem
                key={s.key}
                service={s}
                isOpen={openRight === s.key}
                onToggle={() =>
                  setOpenRight(openRight === s.key ? null : s.key)
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* BRIDGE: Solution Finder */}
      <div className="bridge">
        <div className="bridge-text">
          <div className="small">Not sure where to start?</div>
          <div className="big">
            Let our <em>Solution Finder</em> match you in three questions.
          </div>
        </div>
        <Link to="/solution-finder" className="btn btn-primary">
          Solution Finder →
        </Link>
      </div>

      <RequestPricingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Services;
