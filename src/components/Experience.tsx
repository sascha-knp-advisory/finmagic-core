import SectionWrapper from "./SectionWrapper";

const cases = [
  { challenge: "Close mess", solution: "Close calendar + clear responsibilities + reconciliations", result: "Close time reduced from 20 to 5 days" },
  { challenge: "Finance team drowning", solution: "System and process implementation", result: "80% time saving in finance operations" },
  { challenge: "Investor confidence eroded", solution: "Streamlined reporting process + clear metrics", result: "Board-ready reporting every month" },
  { challenge: "Cash runway too short", solution: "Short-term liquidity measures + long-term funding plan", result: "Runway extended" },
  { challenge: "Pre-fundraise cold sweat", solution: "Finance clean-up + data room preparation", result: "Smooth diligence, less time to closing" },
  { challenge: "Exit desire", solution: "Full exit preparation (mgmt presentation + data room)", result: "Orchestrated sale process, competitive bids" },
];

const industries = [
  "SaaS", "Tech-enabled services", "Climate/Energy", "Digital health",
  "E-commerce & Marketplace", "Manufacturing & Hardware", "Mobility/Logistics", "D2C & Consumer",
];

const Experience = () => (
  <SectionWrapper id="experience">
    <h2 className="text-3xl md:text-5xl font-bold text-foreground">Case studies</h2>
    <p className="mt-4 text-lg text-muted-foreground">Patterns we've solved</p>

    <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cases.map((c) => (
        <div key={c.challenge} className="rounded-xl border border-border bg-card p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-accent">{c.challenge}</h3>
          <p className="mt-3 text-sm text-muted-foreground">→ {c.solution}</p>
          <p className="mt-auto pt-4 text-sm font-medium text-foreground">✓ {c.result}</p>
        </div>
      ))}
    </div>

    <div className="mt-14">
      <h3 className="text-lg font-semibold text-foreground mb-4">Industries we serve</h3>
      <div className="flex flex-wrap gap-3">
        {industries.map((ind) => (
          <span key={ind} className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
            {ind}
          </span>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Experience;
