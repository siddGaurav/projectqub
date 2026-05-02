"use client";

import { m } from "framer-motion";

const shapes = [
  {
    className:
      "left-[6%] top-[18%] h-24 w-24 rounded-[2rem] border border-cyan-400/25 bg-gradient-to-br from-cyan-500/15 to-transparent blur-[0.5px]",
    rotate: [8, -6, 8],
    duration: 14,
  },
  {
    className:
      "right-[8%] top-[22%] h-32 w-32 rounded-full border border-violet-400/30 bg-gradient-to-tr from-fuchsia-500/20 to-transparent",
    rotate: [-12, 10, -12],
    duration: 18,
  },
  {
    className:
      "bottom-[12%] left-[18%] h-20 w-40 skew-x-12 rounded-full border border-fuchsia-400/20 bg-gradient-to-r from-violet-600/20 to-cyan-500/10",
    rotate: [4, -8, 4],
    duration: 16,
  },
  {
    className:
      "right-[20%] bottom-[16%] h-16 w-16 rotate-45 rounded-xl border border-border bg-foreground/5",
    rotate: [0, 18, 0],
    duration: 12,
  },
] as const;

export function HeroShapes() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {shapes.map((s, i) => (
        <m.div
          key={i}
          className={`absolute ${s.className}`}
          animate={{ rotate: [...s.rotate], y: [0, -18, 0] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        />
      ))}
    </div>
  );
}
