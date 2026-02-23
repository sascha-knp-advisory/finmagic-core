import SectionWrapper from "./SectionWrapper";
import { BarChart3, BookOpen, Target, TrendingUp, Handshake, Shield } from "lucide-react";

const services = [
{
  icon: BookOpen,
  title: "Bookkeeping & Finance Ops Automation",
  desc: "Monthly close within 5 days — with accuracy, speed and confidence.",
  bullets: ["Automated processes", "Approval & payments", "Investor-ready numbers"]
},
{
  icon: BarChart3,
  title: "Reporting & Cash Forecasting",
  desc: "Integrated investor reporting and rolling cash scenario modelling.",
  bullets: ["Board-ready reporting", "Cash runway clarity", "Scenario planning"]
},
{
  icon: Target,
  title: "KPI & Performance Management",
  desc: "A lightweight performance system your board will back.",
  bullets: ["North-star metrics", "Operating cadence", "Board packs"]
},
{
  icon: TrendingUp,
  title: "Goal Setting & Budgeting",
  desc: "Create alignment through clear goals and budget ownership.",
  bullets: ["Goal tracking", "Budget ownership", "GTM ROI"]
},
{
  icon: Handshake,
  title: "Transactions & Investor Readiness",
  desc: "Get your numbers and narrative ready for fundraising or exit.",
  bullets: ["Fundraising deck", "Data room", "Quality of earnings mindset"]
},
{
  icon: Shield,
  title: "Interim CFO & Finance Ops Leadership",
  desc: "We go all-in — to stabilize, scale, or reset your finance engine.",
  bullets: ["Leadership stability", "Execution clarity", "Financial control"]
}];


const Services = () =>
<SectionWrapper id="services">
    <h2 className="text-3xl md:text-5xl font-bold text-foreground">What we do</h2>
    <p className="mt-4 text-lg text-muted-foreground max-w-xl">From bookkeeping to fundraising — AI-powered finance operations that simply work.

  </p>

    <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s) =>
    <div
      key={s.title}
      className="group rounded-xl border border-border bg-card p-6 hover:border-accent/40 transition-colors">

          <s.icon className="h-8 w-8 text-accent mb-4" />
          <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          <ul className="mt-4 space-y-1">
            {s.bullets.map((b) =>
        <li key={b} className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block" />
                {b}
              </li>
        )}
          </ul>
        </div>
    )}
    </div>
  </SectionWrapper>;


export default Services;