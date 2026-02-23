import SectionWrapper from "./SectionWrapper";


import { Calculator, Wrench, Landmark, Scale, Users, BarChart3, Palette, Code } from "lucide-react";

const categories = [
  { icon: Calculator, title: "Tax & Accounting", desc: "Tax advisors we partner with" },
  { icon: Wrench, title: "Tools & Implementations", desc: "A full suite of tools we work with" },
  { icon: Landmark, title: "Banking / Debt / Leasing", desc: "Financing providers we have at hand" },
  { icon: Scale, title: "Legal (Corporate / VC / M&A)", desc: "Lawyers we can recommend" },
  { icon: Users, title: "HR & Organizational Development", desc: "People & culture experts we trust" },
  { icon: BarChart3, title: "GTM & Marketing Analytics", desc: "Growth & analytics partners we rely on" },
  { icon: Palette, title: "Product & Design", desc: "Designers & product thinkers we collaborate with" },
  { icon: Code, title: "Technology", desc: "Tech partners & engineers in our network" },
];

const Network = () => (
  <SectionWrapper id="network">
    <h2 className="text-3xl md:text-5xl font-bold text-foreground">Partner network</h2>
    <p className="mt-4 text-lg text-muted-foreground max-w-xl">
      When needed, we bring trusted specialists — so you move faster without losing quality.
    </p>

    <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((c) => (
        <div key={c.title} className="rounded-xl border border-border bg-card p-6 text-center">
          <c.icon className="h-8 w-8 text-accent mx-auto mb-4" />
          <h3 className="font-semibold text-foreground">{c.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Network;
