import SectionWrapper from "./SectionWrapper";
import { Linkedin } from "lucide-react";
import saschaImg from "@/assets/sascha-noack.jpg";
import markusImg from "@/assets/markus-koenig.jpg";

const values = ["Ownership", "Hands-on", "Speed", "Transparency", "Efficiency", "Long-term view"];

const founders = [
  {
    name: "Sascha Noack",
    role: "Fractional CFO & Finance Ops Advisor",
    stats: "13+ years in finance leadership • 15+ finance ops transformed • Based in Berlin",
    linkedin: "https://www.linkedin.com/in/sascha-noack-740b21160/",
    photo: saschaImg,
    bio: "Sascha spent 13 years building finance operations in German startups. Starting as a tax advisor assistant, he speaks Steuerberater language fluently and bridges external advisors and in-house teams. From working student to CFO-level responsibility, he built finance teams from scratch, supported fundraising, accelerated month-end close from weeks to days, and automated core processes. Before going freelance, he cut process time by ~80% in his prior firm, building a team that could run independently.",
  },
  {
    name: "Markus König",
    role: "Fractional CFO & Board Advisor",
    stats: "18+ years in finance leadership • 30+ fundraises & exits supported • Based in Berlin",
    linkedin: "https://www.linkedin.com/in/markuskoenig82",
    photo: markusImg,
    bio: "Markus is a finance & operations leader who brings control, clarity, and momentum in high-pressure growth phases. After 10 years in investment banking and an MSc in Management at Stanford, he moved into CFO roles, taking over and transforming finance functions. He has led financings from crowd-style rounds and debt to IPO-scale outcomes, and spent a year leading finance in West Africa for a tech group. He combines rigorous execution with a strong passion for leadership development and transformational coaching.",
  },
];

const WhoWeAre = () => (
  <SectionWrapper id="team">
    <h2 className="text-3xl md:text-5xl font-bold text-foreground">Who we are</h2>
    <p className="mt-4 text-lg text-muted-foreground">Over 30 years of financial leadership.</p>

    <div className="mt-8 flex flex-wrap gap-3">
      {values.map((v) => (
        <span key={v} className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-foreground">
          {v}
        </span>
      ))}
    </div>

    <div className="mt-16 space-y-16">
      {founders.map((f) => (
        <div key={f.name} className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src={f.photo}
            alt={f.name}
            className="w-40 h-40 rounded-2xl object-cover shrink-0"
            loading="lazy"
          />
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold text-foreground">{f.name}</h3>
              <a href={f.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${f.name} LinkedIn`}>
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
            <p className="text-accent font-medium mt-1">{f.role}</p>
            <p className="text-sm text-muted-foreground mt-1">{f.stats}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{f.bio}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default WhoWeAre;
