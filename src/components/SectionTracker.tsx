import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const SECTION_IDS = ["hero", "services", "why-us", "team", "network", "values", "contact"];

const SectionTracker = () => {
  useEffect(() => {
    const seen = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !seen.has(entry.target.id)) {
            seen.add(entry.target.id);
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "section_view",
              section_name: entry.target.id,
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default SectionTracker;
