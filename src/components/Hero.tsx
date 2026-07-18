import { useEffect, useRef } from "react";
import "./Hero.css";

// Markus' paired taglines — first clause (accent) "means" second clause.
const PHRASES: { a: string; b: string; plain?: boolean }[] = [
  { a: "automated processes,", b: "faster close" },
  { a: "better reporting,", b: "stronger decisions" },
  { a: "real-time visibility,", b: "more control" },
  { a: "clear actions,", b: "faster results" },
  // Payoff line — full phrase in accent red, dot stays neutral text color.
  { a: "financial clarity", b: "in the boardroom", plain: true },
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
      const { a, b, plain } = PHRASES[pi];
      // plain = payoff line: full phrase styled like the other accent clauses (em), dot in neutral text color.
      rot.innerHTML = plain
        ? `<em>${a} ${b}</em><span class="hero-dot-neutral">.</span>`
        : `<em>${a}</em> ${b}<span class="hero-dot">.</span>`;
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
        Finance operations and CFO&nbsp;support —
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
