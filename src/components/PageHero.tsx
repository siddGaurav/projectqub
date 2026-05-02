"use client";

import { m, type Variants } from "framer-motion";

export type PageHeroVariant =
  | "fade"
  | "slide-up"
  | "slide-left"
  | "scale"
  | "blur"
  | "rotate";

const containerVariants: Record<PageHeroVariant, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 48 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 56 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] as const },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 26 },
    },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(12px)" },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
  },
  rotate: {
    hidden: { opacity: 0, rotateX: 14, y: 24 },
    show: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] as const },
    },
  },
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  variant = "fade",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  variant?: PageHeroVariant;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pb-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% -20%, rgb(var(--glow-rgb) / 0.22), transparent),
            radial-gradient(ellipse 50% 40% at 100% 0%, color-mix(in oklab, var(--accent-secondary) 25%, transparent), transparent)`,
        }}
      />
      <m.div
  className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full blur-[100px]"
  style={{
    background: `color-mix(in oklab, var(--accent) 35%, transparent)`,
    transform: "scale(1) translateZ(0)",
  }}
  animate={{ opacity: [0.35, 0.55, 0.35] }}
  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
/>
      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          variants={containerVariants[variant]}
          initial="hidden"
          animate="show"
          style={{ perspective: variant === "rotate" ? 900 : undefined }}
        >
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-secondary/90">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/60 sm:text-lg">
            {subtitle}
          </p>
        </m.div>
      </div>
    </section>
  );
}
