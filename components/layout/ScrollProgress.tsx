"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-0.5">
      <motion.div
        className="h-full origin-left bg-acid shadow-[0_0_18px_rgba(111,255,139,0.7)]"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
