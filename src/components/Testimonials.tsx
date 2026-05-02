"use client";

import { m, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative border-t border-border py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgb(var(--glow-rgb) / 0.1), transparent 55%)`,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-secondary/90">
            Testimonials
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Trusted by teams who ship loud
          </h2>
        </SectionReveal>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div
            className="pointer-events-none absolute -inset-10 rounded-[3rem] blur-3xl"
            style={{
              background: `linear-gradient(90deg, color-mix(in oklab, var(--accent) 22%, transparent), color-mix(in oklab, var(--accent-bright) 18%, transparent), color-mix(in oklab, var(--accent-secondary) 22%, transparent))`,
            }}
          />
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
            <AnimatePresence mode="wait">
              <m.div
                key={t.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -36 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <m.span
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      ★
                    </m.span>
                  ))}
                </div>
                <p className="mt-6 font-display text-xl font-medium leading-relaxed text-foreground/90 sm:text-2xl">
                  “{t.text}”
                </p>
                <div className="mt-8 flex flex-col gap-1 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-foreground/50">
                      {t.role}, {t.company}
                    </p>
                  </div>
                  <div className="flex gap-2 pt-2 sm:pt-0">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Go to testimonial ${i + 1}`}
                        onClick={() => setIndex(i)}
                        className={`h-2 rounded-full transition-all ${
                          i === index
                            ? "w-8 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)]"
                            : "w-2 bg-foreground/20 hover:bg-foreground/35"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
