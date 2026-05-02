"use client";

import {
  m,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";

export function BackToTop() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setShow(y > 560);
  });

  return (
    <AnimatePresence>
      {show && (
        <m.button
          type="button"
          aria-label="Back to top"
          className="fixed bottom-8 right-6 z-[170] flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-foreground/5 text-sm font-medium text-foreground shadow-glow backdrop-blur-md transition-colors hover:border-[color-mix(in_oklab,var(--accent)_45%,transparent)] hover:bg-[color-mix(in_oklab,var(--accent)_12%,transparent)]"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </m.button>
      )}
    </AnimatePresence>
  );
}
