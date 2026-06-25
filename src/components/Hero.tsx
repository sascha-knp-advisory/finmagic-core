import { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = typewriterRef.current;
    if (!el) return;

    const words = ["better", "automated", "hands-on"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function type() {
      const current = words[wordIndex];

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      el!.textContent = current.substring(0, charIndex);

      let speed = isDeleting ? 70 : 110;

      if (!isDeleting && charIndex === current.length) {
        speed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 350;
      }

      timeoutId = setTimeout(type, speed);
    }

    // Start after a short initial delay
    timeoutId = setTimeout(type, 800);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="hero" className="knp-hero">
      <div className="audience-pills">
        <span>For Startups &amp; Scaleups</span>
      </div>
      <h1>
        Finance operations and CFO support —{" "}
        <em>
          <span id="typewriter" ref={typewriterRef}></span>
          <span className="typewriter-cursor"></span>
        </em>{" "}
        <em>processes</em>,<br />
        faster close.
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
