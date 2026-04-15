import SectionWrapper from "./SectionWrapper";

const values = [
  {
    title: "Ownership & Empathy",
    desc: "We think and act like it's our own business — customer-first, cost-conscious.",
  },
  {
    title: "Hands-on Craft",
    desc: "We roll up our sleeves, tailor solutions to your context, and make them work.",
  },
  {
    title: "Fast, Measurable Impact",
    desc: "We prioritize speed-to-value — delivering results early and iterating from there.",
  },
  {
    title: "Transparency & Integrity",
    desc: "Reliable, detail-driven, accountable — delivered on time and within scope.",
  },
  {
    title: "Smart Efficiency",
    desc: "Lean finance systems powered by automation and AI. If we wouldn't use it ourselves, we won't build it.",
  },
  {
    title: "Strategic Acumen & Long-term View",
    desc: "We connect today's decisions to tomorrow's outcomes — balancing near-term with long-term wins.",
  },
];

const Values = () => (
  <SectionWrapper id="values">
    <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our values</h2>
    <div className="mt-14 grid md:grid-cols-2 gap-8">
      {values.map((v) => (
        <div key={v.title}>
          <h3 className="text-lg font-semibold text-accent">{v.title}</h3>
          <p className="mt-1 text-muted-foreground">{v.desc}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Values;
