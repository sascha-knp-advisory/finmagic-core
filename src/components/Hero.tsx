import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const audiences = ["Startups & Scaleups", "Owner-led SMEs & Succession", "PE-backed companies"];

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-topo pt-16">
    <div className="container mx-auto px-4 md:px-8 py-24 md:py-32 max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-3 mb-8"
      >
        {audiences.map((a) => (
          <span
            key={a}
            className="rounded-full bg-secondary/60 border border-border px-4 py-1.5 text-xs text-muted-foreground"
          >
            {a}
          </span>
        ))}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-foreground lg:text-6xl"
      >
        <span className="text-accent">AI-powered</span> finance operations
        <br />
        and CFO support.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground md:text-xl"
      >
        Built for speed, accuracy, and scale—with automation where it matters.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button variant="accent" size="lg" className="text-base px-8 py-6" asChild>
          <a href="https://calendar.app.google/ucm1X1bTqKcT3j3i6" target="_blank" rel="noopener noreferrer">
            Book a 30-min intro call
          </a>
        </Button>
        <Button variant="ghost-light" size="lg" className="text-base px-8 py-6" asChild>
          <a href="https://tally.so/r/gDqe8l" target="_blank" rel="noopener noreferrer">
            Finance Health Assessment
          </a>
        </Button>
      </motion.div>

    </div>
  </section>
);

export default Hero;
