"use client";

import { m, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.15,
  });

  return (
    <m.div
      className="fixed left-0 right-0 top-0 z-[180] h-[3px] origin-left shadow-glow-sm"
      style={{
        scaleX,
        background: `linear-gradient(90deg, var(--accent), var(--accent-bright), var(--accent-secondary))`,
      }}
    />
  );
}
