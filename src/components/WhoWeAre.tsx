import SectionWrapper from "./SectionWrapper";
import { Linkedin } from "lucide-react";
import steffenImg from "@/assets/steffen-fixson.png";
import markusImg from "@/assets/markus-koenig.jpg";

const values = ["Ownership", "Hands-on", "Speed", "Transparency", "Efficiency", "Long-term view"];

const founders = [
  {
    name: "Dr. Steffen Fixson",
    role: "Head of Client Development & Executive Advisor",
    stats: "15+ years of advisory & client development experience • CFO advisory & Finance transformations • Based in Dubai",
    linkedin: "https://www.linkedin.com/in/drsteffenfixson/",
    photo: steffenImg,
    bio: "Steffen is an executive advisor and client development leader who partners with startups and scaleups to improve and transform finance processes. His experience includes working with professional leaders across multiple departmental functions, including CFOs, CHROs, and other functional heads. He is customer-centric with a strong focus on goal achievement, supporting clients in their behavioral and organizational change to get future-ready. He holds a BSc, MSc and Ph.D.",
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
