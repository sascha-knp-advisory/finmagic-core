import { useEffect, useState } from "react";
import "./Hero.css";

// Markus' paired taglines — first clause (accent) "means" second clause.
const PHRASES = [
  { a: "automated processes,", b: "faster close" },
  { a: "better reporting,", b: "stronger decisions" },
  { a: "real-time visibility,", b: "more control" },
  { a: "clear actions,", b: "faster results" },
  { a: "financial clarity,", b: "in the boardroom" },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // fade out
      const swap = setTimeout(() => {
        setIndex((prev) => (prev + 1) % PHRASES.length);
        setVisible(true); // fade in next phrase
      }, 500);
      return () => clearTimeout(swap);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const phrase = PHRASES[index];

  return (
    <section id="hero" className="knp-hero">
      <div className="audience-pills">
        <span>For Startups &amp; Scaleups</span>
      </div>
      <h1>
        Finance operations and CFO&nbsp;support —
        <span className="hero-rotate-line">
          <span className={`hero-phrase${visible ? " is-visible" : ""}`}>
            <em>{phrase.a}</em> {phrase.b}
            <span className="hero-dot">.</span>
          </span>
        </span>
      </h1>
      <p>We pair deep finance expertise with hands-on implementation where it matters.</p>
      <div className="hero-cta" style={{ justifyContent: "center" }}>
        <a className="btn btn-ghost" href="#services">
          See services →
        </a>
      </div>
    </section>
  );
};

export default Hero;
