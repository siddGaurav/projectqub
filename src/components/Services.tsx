"use client";

import { m } from "framer-motion";
import { SERVICES } from "@/data/services";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Services() {
  return (
    <section className="relative border-t border-border py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 0% 80%, rgb(var(--glow-rgb) / 0.12), transparent 55%)`,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-secondary/90">
            Services
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Full-spectrum web craftsmanship
          </h2>
          <p className="mt-4 text-base text-foreground/55">
            From interface physics to backend resilience—everything you need to
            ship a flagship site.
          </p>
        </SectionReveal>

        <m.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8%" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {SERVICES.map((service) => (
            <m.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <m.div
                className="glass group relative h-full overflow-hidden rounded-3xl p-7"
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <m.span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[color-mix(in_oklab,var(--accent-secondary)_35%,transparent)] bg-gradient-to-br from-[color-mix(in_oklab,var(--accent)_35%,transparent)] to-[color-mix(in_oklab,var(--accent-secondary)_28%,transparent)] text-xl text-foreground shadow-glow-sm"
                // animate={{
                //   boxShadow: [
                //     "0 0 28px -10px rgb(var(--glow-rgb) / 0.45)",
                //     "0 0 40px -8px color-mix(in oklab, var(--accent-secondary) 45%, transparent)",
                //     "0 0 28px -10px rgb(var(--glow-rgb) / 0.45)",
                //   ],
                // }}
                // transition={{ duration: 3.6, repeat: Infinity }}
                >
                  {service.icon}
                </m.span>
                <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/55">
                  {service.description}
                </p>
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition-opacity group-hover:opacity-100"
                  style={{
                    background: `color-mix(in oklab, var(--accent-bright) 18%, transparent)`,
                  }}
                />
              </m.div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
