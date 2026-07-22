import SectionWrapper from "./SectionWrapper";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "Diagnose & Design",
    time: "1–2 weeks",
    lines: ["Diagnose status quo and define goal state", "Establish implementation timeline"],
  },
  {
    num: "2",
    title: "Build & Automate",
    time: "4–8 weeks",
    lines: ["Build & automate workflows", "Team upskilling, workflow documentation, and hand-over"],
  },
  {
    num: "3",
    title: "Stabilize & Transition",
    time: "ongoing",
    lines: ["Day-to-day support in Finance Operations, Controlling, and on CFO level"],
  },
];

const benefits = [
  { label: "Deep finance expertise", rest: "we bring deep expertise that we continuously evolve, you get tried and tested processes" },
  { label: "Tailored solutions", rest: "we build tailored solutions to your situation so you get outstanding results" },
  { label: "Clear & reliable execution", rest: "we bring a clear plan and execute with precision" },
  { label: "Team member upskilling", rest: "we empower your team, you build internal capabilities" },
  { label: "ROI obsessed", rest: "we focus on results, so your investment pays off" },
];

const industries = [
  "SaaS", "Tech-enabled services", "Climate/Energy", "Digital health",
  "E-commerce & Marketplace", "Manufacturing & Hardware", "Mobility/Logistics", "D2C & Consumer",
  "EdTech", "Marketing/AdTech", "FinTech/InsureTech", "Media & Digital Publishing",
];

const WhyUs = () => (
  <SectionWrapper id="why-us">
    <h2 className="text-3xl md:text-5xl font-bold text-foreground">Why work with us<span className="text-accent">.</span></h2>

    {/* Benefits — now first */}
    <div className="mt-14">
      <h3 className="text-2xl font-bold text-foreground mb-6">Your benefits</h3>
      <div className="space-y-4">
        {benefits.map((b) => (
          <div key={b.label} className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
            <p className="text-muted-foreground text-base">
              <span className="font-semibold text-foreground">{b.label}:</span> {b.rest}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Our approach — now second */}
    <div className="mt-14">
      <h3 className="text-2xl font-bold text-foreground mb-8">
        Our approach: clear outcomes within 1–3 months
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.num} className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center h-9 w-9 rounded-full bg-accent text-accent-foreground text-sm font-bold">
                {s.num}
              </span>
              <div>
                <span className="font-semibold text-foreground">{s.title}</span>
                <span className="ml-2 text-xs text-muted-foreground">({s.time})</span>
              </div>
            </div>
            <ul className="space-y-1">
              {s.lines.map((l) => (
                <li key={l} className="text-sm text-muted-foreground">{l}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Industries we serve */}
    <div className="mt-14">
      <h3 className="text-2xl font-bold text-foreground mb-6">Industries we serve</h3>
      <div className="flex flex-wrap gap-3">
        {industries.map((ind) => (
          <span
            key={ind}
            className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground"
          >
            {ind}
          </span>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default WhyUs;
