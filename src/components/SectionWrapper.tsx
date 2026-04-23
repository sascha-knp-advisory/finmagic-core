import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
}

const hasHash = typeof window !== "undefined" && !!window.location.hash;

const SectionWrapper = ({ id, children, className = "" }: Props) => (
  <section id={id} className={`py-14 md:py-20 scroll-mt-20 ${className}`}>
    <motion.div
      initial={hasHash ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-8"
    >
      {children}
    </motion.div>
  </section>
);

export default SectionWrapper;
