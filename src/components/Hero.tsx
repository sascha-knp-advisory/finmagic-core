import { useEffect, useRef } from "react";
import "./Hero.css";

// Markus' paired taglines — first clause (accent) "means" second clause.
const PHRASES: { a: string; b: string }[] = [
  { a: "Automated processes,", b: "faster close" },
  { a: "Better reporting,", b: "stronger decisions" },
  { a: "Real-time visibility,", b: "more control" },
  { a: "Clear actions,", b: "faster results" },
  { a: "Financial clarity", b: "in the boardroom" },
];

const Hero = () => {
  const rotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const rot = rotRef.current;
    if (!rot) return;
    rot.style.transition = "opacity 0.45s ease, transform 0.45s ease";
    let pi = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    function show() {
      const { a, b } = PHRASES[pi];
      rot.innerHTML = `<em>${a}</em> ${b}<span class="hero-dot">.</span>`;
      rot.style.opacity = "0";
      rot.style.transform = "translateY(14px)";
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          rot.style.opacity = "1";
          rot.style.transform = "translateY(0)";
        })
      );
      timers.push(
        setTimeout(() => {
          rot.style.opacity = "0";
          rot.style.transform = "translateY(-14px)";
          timers.push(
            setTimeout(() => {
              pi = (pi + 1) % PHRASES.length;
              show();
            }, 460)
          );
        }, 2600)
      );
    }
    show();

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="hero" className="knp-hero">
      <div className="audience-pills">
        <span>For Startups &amp; Scaleups</span>
      </div>
      <h1>
        <span className="hero-prefix-line">CFO Services and Finance&nbsp;operations</span>
        <span className="hero-rotate-line">
          <span className="hero-phrase" ref={rotRef}></span>
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
