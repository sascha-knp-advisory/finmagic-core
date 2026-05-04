import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle, Clock, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    industry: "B2B Procurement SaaS",
    size: "€12M revenue, 70 employees",
    role: "Interim CFO & Head of Accounting",
    challenge:
      "Fast-growing platform needed to professionalize finance and raise Series A. Month-end close took over 20 working days, half of accounting was outsourced at unsustainable cost, and the year-end backlog created contingencies in the share purchase agreement.",
    actions: [
      "Built an in-house finance & BI team (6 FTE)",
      "Internalized accounting and controlling including investor reporting",
      "Implemented monthly board reporting and cash-bridge analysis",
      "Led convertible fundraising with a strategic investor",
    ],
    results: [
      "80% time saved on procure-to-pay process",
      "95% automation of order-to-cash process",
      "Monthly close on day 5 instead of day 20+",
      "Successful funding round closed",
    ],
  },
  {
    industry: "D2C Fashion / E-commerce",
    size: "€30M revenue, 50 employees",
    role: "Interim CFO",
    challenge:
      "Rapid post-COVID growth required higher forecast reliability and liquidity management amid market volatility. Finance processes and team setup needed a complete overhaul.",
    actions: [
      "Rebuilt finance and accounting processes and team",
      "Implemented an ERP system",
      "Redesigned budgeting and cash-planning routines",
      "Led three financing rounds (~$10M total including convertible, equity, and venture debt)",
    ],
    results: [
      "+52% year-over-year revenue growth in FY2021",
      "Stabilized financial operations across all entities",
      "Multi-round funding secured",
    ],
  },
  {
    industry: "B2B SaaS",
    size: "€9M ARR, 75 employees",
    role: "Interim CFO",
    challenge:
      "Preparing for a PE-backed sale process required clean reporting and investor-grade materials that did not yet exist.",
    actions: [
      "Led transaction readiness — information pack, data room, management presentations",
      "Coordinated finance workstreams and due diligence support",
    ],
    results: [
      "Significantly improved transaction readiness",
      "Two competitive PE bids received",
    ],
  },
];

const faqs = [
  {
    q: "What does an Interim CFO do?",
    a: "An Interim CFO takes over financial leadership on a temporary basis — typically for 3 to 12 months. This includes owning the monthly close, managing cash flow, building or restructuring the finance team, preparing investor reporting, and supporting fundraising or M&A processes. Unlike a consultant, an Interim CFO operates as part of your leadership team with hands-on execution responsibility.",
  },
  {
    q: "When does a startup need an Interim CFO?",
    a: "Typically when preparing for a fundraise (Series A and beyond), during rapid growth phases where finance processes break down, after a CFO departure that needs immediate coverage, or before a sale or acquisition where financial due diligence is required. The common thread: your finance function needs senior leadership now, not in three months.",
  },
  {
    q: "How much does an Interim CFO cost?",
    a: "In the German market, Interim CFO rates range from €1,200 to €2,000 per day depending on seniority and scope. Most engagements start with 1-2 days per week, making it significantly more cost-effective than a full-time CFO hire (€150k-€250k+ annual salary plus equity). At KNP Advisory, we offer flexible retainer models starting at one day per week.",
  },
  {
    q: "What is the difference between a Fractional CFO and an Interim CFO?",
    a: "An Interim CFO typically fills a temporary gap — covering a departure or bridging until a permanent hire. A Fractional CFO is a long-term part-time arrangement, often 1-2 days per week on an ongoing basis. In practice, many engagements start as interim and evolve into fractional. KNP Advisory offers both models.",
  },
  {
    q: "How long does a typical Interim CFO engagement last?",
    a: "Most engagements follow a three-phase approach: Diagnose & Design (1-2 weeks), Build & Automate (4-8 weeks), and Stabilize & Transition (ongoing). The initial transformation typically takes 2-3 months. Many clients then transition to a fractional model for ongoing support.",
  },
];

const InterimCFO = () => (
  <>
    <Helmet>
      <title>Interim CFO for Startups & SMEs | KNP Advisory Berlin</title>
      <meta
        name="description"
        content="Experienced Interim CFO for startups and SMEs in Berlin. Monthly close in 5 days, investor reporting, cashflow planning, fundraising support. 30+ years combined finance leadership."
      />
      <link rel="canonical" href="https://knp-advisory.com/interim-cfo" />
    </Helmet>

    <Navbar />

    <article className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>

        {/* Hero / Intro */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Interim CFO for Startups and Growth Companies
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          When your finance function needs senior leadership now — not in three
          months — an Interim CFO steps in to stabilize, professionalize, and
          deliver. At KNP Advisory, we have led finance transformations at
          over 10 companies, from Seed-stage to PE-backed exits.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          We bring deep finance expertise combined with AI-powered automation.
          The result: monthly close in 5 business days, investor-ready
          reporting, and finance processes that scale with your business.
        </p>

        {/* Key metrics */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          <div className="rounded-xl border border-border bg-card p-5 text-center">
            <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">5 days</div>
            <div className="text-sm text-muted-foreground">Monthly close</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 text-center">
            <TrendingUp className="h-6 w-6 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">80%</div>
            <div className="text-sm text-muted-foreground">Time saved on finance ops</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 text-center">
            <Users className="h-6 w-6 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">30+</div>
            <div className="text-sm text-muted-foreground">Years combined experience</div>
          </div>
        </div>

        {/* When you need one */}
        <h2 className="text-2xl font-bold mb-4">
          When your company needs an Interim CFO
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We typically see four situations where startups and growth companies
          bring in an Interim CFO:
        </p>
        <div className="space-y-3 mb-10">
          {[
            "Fundraising preparation — Series A and beyond requires investor-grade financials, a clean data room, and a compelling financial narrative. Most founding teams underestimate the finance workload this creates.",
            "Rapid growth — When headcount doubles and revenue triples, finance processes that worked at 15 people break at 50. The monthly close stretches to three weeks, nobody trusts the numbers, and the CEO spends hours each week on financial firefighting.",
            "CFO departure — Your finance lead left and you need someone who can step in immediately, keep reporting running, and give you time to find the right permanent hire.",
            "Sale or acquisition — PE buyers expect clean reporting, defensible KPIs, and a well-organized data room. Building this from scratch under time pressure requires experienced financial leadership.",
          ].map((text) => (
            <div key={text.slice(0, 30)} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <p className="text-muted-foreground text-base">{text}</p>
            </div>
          ))}
        </div>

        {/* How we work */}
        <h2 className="text-2xl font-bold mb-4">
          How we work: results within 1-3 months
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Every engagement follows a structured three-phase approach. We do not
          produce slide decks about what you should do — we roll up our sleeves
          and do it.
        </p>
        <div className="space-y-4 mb-14">
          {[
            {
              phase: "1. Diagnose & Design",
              time: "1-2 weeks",
              desc: "We assess your current finance setup, identify the biggest pain points, and define a clear target state with an implementation timeline.",
            },
            {
              phase: "2. Build & Automate",
              time: "4-8 weeks",
              desc: "We build and automate workflows, implement reporting routines, restructure processes, and document everything for your team. This is where 80% of the value is created.",
            },
            {
              phase: "3. Stabilize & Transition",
              time: "Ongoing",
              desc: "Day-to-day support in finance operations, controlling, and at CFO level. We upskill your team and hand over a finance function that runs without us.",
            },
          ].map((s) => (
            <div
              key={s.phase}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="font-semibold text-foreground">{s.phase}</span>
                <span className="text-xs text-muted-foreground">
                  ({s.time})
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <h2 className="text-2xl font-bold mb-6">
          Finance transformations we have led
        </h2>
        <div className="space-y-8 mb-14">
          {caseStudies.map((cs) => (
            <div
              key={cs.industry}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-accent">
                  {cs.industry}
                </span>
                <span className="text-xs text-muted-foreground">
                  {cs.size}
                </span>
                <span className="text-xs text-muted-foreground">
                  — {cs.role}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {cs.challenge}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    What we did
                  </div>
                  <ul className="space-y-1">
                    {cs.actions.map((a) => (
                      <li
                        key={a}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block mt-1.5 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    Results
                  </div>
                  <ul className="space-y-1">
                    {cs.results.map((r) => (
                      <li
                        key={r}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mb-6">
          Frequently asked questions
        </h2>
        <div className="space-y-6 mb-14">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {faq.q}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Authors / E-E-A-T */}
        <div className="rounded-xl border border-border bg-card p-6 mb-14">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Written by
          </div>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                Markus König
              </span>{" "}
              — Fractional CFO & Board Advisor. 18+ years in finance leadership,
              30+ fundraises and exits supported. MSc in Management from
              Stanford, background in investment banking.
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                Sascha Noack
              </span>{" "}
              — Controlling & Finance Ops Lead. 13 years building finance
              operations in German startups, from Gründerszene (Axel Springer)
              to CNC24 where he reduced process time by 80%.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Ready to professionalize your finance function?
          </h2>
          <p className="text-muted-foreground mb-6">
            Book a free 30-minute intro call. We will assess your situation and
            tell you honestly whether we can help.
          </p>
          <Button
            variant="accent"
            size="lg"
            className="text-base px-8 py-6"
            asChild
          >
            <a
              href="https://calendar.app.google/ucm1X1bTqKcT3j3i6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a 30-min intro call
            </a>
          </Button>
        </div>
      </div>
    </article>

    <Footer />

    {/* FAQ Schema */}
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        })}
      </script>
    </Helmet>
  </>
);

export default InterimCFO;
