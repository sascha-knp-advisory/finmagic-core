import SectionWrapper from "./SectionWrapper";
import { CheckCircle } from "lucide-react";

const reasons = [
  { title: "Ownership & Empathy", desc: "We think and act like it's our own business — customer-first, cost-conscious." },
  { title: "Hands-on Craft", desc: "We roll up our sleeves, tailor solutions to your context, and make them work." },
  { title: "Fast, Measurable Impact", desc: "We prioritize speed-to-value — delivering results early and iterating from there." },
  { title: "Transparency & Integrity", desc: "Reliable, detail-driven, accountable — delivered on time and within scope." },
  { title: "Smart Efficiency", desc: "Lean finance systems powered by automation and AI. If we wouldn't use it ourselves, we won't build it." },
  { title: "Strategic Acumen & Long-term View", desc: "We connect today's decisions to tomorrow's outcomes — balancing near-term with long-term wins." },
];

const steps = [
  { num: "1", title: "Diagnose", time: "1–2 weeks", lines: ["Diagnose status quo and define goal state", "Establish implementation timeline"] },
  { num: "2", title: "Build & Automate", time: "4–8 weeks", lines: ["Process, system & team transformation", "Workflow automation"] },
  { num: "3", title: "Stabilize", time: "ongoing", lines: ["Ongoing Finance Ops, Controlling and CFO support"] },
];

const benefits = [
  "Clear & reliable execution: we bring a clear plan and execute like clockwork",
  "Better systems & processes: we build efficient workflows, you get reliable data quality",
  "Team member upskilling: we empower your team, you build internal capabilities",
  "Money back guarantee: 100% refund, if you aren't satisfied",
];

const WhyUs = () => (
  <SectionWrapper id="why-us">
    <h2 className="text-3xl md:text-5xl font-bold text-foreground">Why work with us</h2>

    <div className="mt-14 grid md:grid-cols-2 gap-8">
      {reasons.map((r) => (
        <div key={r.title}>
          <h3 className="text-lg font-semibold text-foreground">{r.title}</h3>
          <p className="mt-1 text-muted-foreground">{r.desc}</p>
        </div>
      ))}
    </div>

    {/* How we work */}
    <div className="mt-20">
      <h3 className="text-2xl font-bold text-foreground mb-8">How we work</h3>
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

    {/* Benefits */}
    <div className="mt-14">
      <h3 className="text-2xl font-bold text-foreground mb-6">Your benefits</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {benefits.map((b) => (
          <div key={b} className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
            <p className="text-muted-foreground">{b}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default WhyUs;
