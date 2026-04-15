import SectionWrapper from "./SectionWrapper";

const industries = [
  "SaaS", "Tech-enabled services", "Climate/Energy", "Digital health",
  "E-commerce & Marketplace", "Manufacturing & Hardware", "Mobility/Logistics", "D2C & Consumer",
  "EdTech", "Marketing/AdTech", "FinTech/InsureTech", "Media & Digital Publishing",
];

const Industries = () => (
  <SectionWrapper id="industries">
    <h2 className="text-3xl md:text-5xl font-bold text-foreground">Industries we serve</h2>
    <div className="mt-8 flex flex-wrap gap-3">
      {industries.map((ind) => (
        <span
          key={ind}
          className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground"
        >
          {ind}
        </span>
      ))}
    </div>
  </SectionWrapper>
);

export default Industries;
