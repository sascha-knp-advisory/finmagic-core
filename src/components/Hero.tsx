import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
const Hero = () => <section className="relative min-h-screen flex items-center justify-center bg-topo pt-16">
    <div className="container mx-auto px-4 md:px-8 py-24 md:py-32 max-w-4xl text-center">
      <motion.h1 initial={{
      opacity: 0,
      y: 24
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-foreground lg:text-6xl">
        Clarity in your numbers.
        <br />
        Confidence in your decisions.
      </motion.h1>

      <motion.p initial={{
      opacity: 0,
      y: 24
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 0.15
    }} className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-primary">End-to-end finance operations and CFO support for Startups and Scaleups. Built for speed, accuracy, and scale—with automation and AI where it matters.


    </motion.p>

      <motion.div initial={{
      opacity: 0,
      y: 24
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 0.3
    }} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="accent" size="lg" className="text-base px-8 py-6" asChild>
          <a href="#contact">Book a 30-min intro call</a>
        </Button>
        <Button variant="ghost-light" size="lg" className="text-base px-8 py-6" asChild>
          <a href="#contact">Financial Health Assessment
        </a>
        </Button>
      </motion.div>
    </div>
  </section>;
export default Hero;