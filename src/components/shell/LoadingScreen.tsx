"use client";

import { m, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/ui/LogoMark";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 2200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at center, rgb(var(--glow-rgb) / 0.2), transparent 55%)`,
            }}
          />
          <m.div
            className="relative flex flex-col items-center gap-8"
            initial={{ scale: 0.92, opacity: 0, filter: "blur(8px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <m.div
              animate={{
                scale: [1, 1.06, 1],
                filter: [
                  "drop-shadow(0 0 20px rgb(var(--glow-rgb) / 0.45))",
                  "drop-shadow(0 0 40px color-mix(in oklab, var(--accent-secondary) 55%, transparent))",
                  "drop-shadow(0 0 20px rgb(var(--glow-rgb) / 0.45))",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <LogoMark className="text-4xl sm:text-5xl" />
            </m.div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-foreground/10">
              <m.div
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, var(--accent), var(--accent-bright), var(--accent-secondary))`,
                }}
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
