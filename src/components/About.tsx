"use client";

import { m } from "framer-motion";
import { useAnimatedStat } from "@/hooks/useAnimatedStat";
import { SectionReveal } from "@/components/ui/SectionReveal";

function StatCard({
  label,
  end,
  suffix = "",
  prefix = "",
}: {
  label: string;
  end: number;
  suffix?: string;
  prefix?: string;
}) {
  const { ref, value } = useAnimatedStat(end);

  return (
    <m.div
      ref={ref}
      className="glass-strong relative overflow-hidden rounded-2xl p-6"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
        {prefix}
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-foreground/50">{label}</p>
      <div
        className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 blur-2xl"
        style={{
          background: `color-mix(in oklab, var(--accent) 28%, transparent)`,
        }}
      />
    </m.div>
  );
}

function StatSpecial({ label, value }: { label: string; value: string }) {
  return (
    <m.div
      className="glass-strong relative overflow-hidden rounded-2xl p-6"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm text-foreground/50">{label}</p>
      <div
        className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 blur-2xl"
        style={{
          background: `color-mix(in oklab, var(--accent-secondary) 22%, transparent)`,
        }}
      />
    </m.div>
  );
}

export function About() {
  return (
    <section className="relative border-t border-border py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 20% 50%, color-mix(in oklab, var(--accent-secondary) 12%, transparent), transparent 50%)`,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-bright/90">
              About
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A studio wired for velocity, obsessed with polish.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/60">
              QUBNIX is a tight three-person team blending backend rigor,
              frontend artistry, and full-stack orchestration. We design and
              build immersive web experiences with glassy depth, electric
              motion, and performance that holds up in the real world.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/55">
              From cinematic landing pages to complex dashboards, we ship work
              that feels bespoke—never boilerplate—anchored in strategy and
              elevated through micro-interactions.
            </p>
            <m.div
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {["Next.js", "TypeScript", "Cloud Native", "Motion"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-foreground/5 px-4 py-1.5 text-xs font-medium text-foreground/70"
                  >
                    {tag}
                  </span>
                ),
              )}
            </m.div>
          </SectionReveal>

          <m.div
            className="grid gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <m.div
              variants={{
                hidden: { opacity: 0, x: 28 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <StatCard label="Projects Delivered" end={8} suffix="+" />
            </m.div>
            <m.div
              variants={{
                hidden: { opacity: 0, x: 28 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <StatCard label="Team Members" end={3} />
            </m.div>
            <m.div
              variants={{
                hidden: { opacity: 0, x: 28 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <StatCard label="Client Satisfaction" end={100} suffix="%" />
            </m.div>
            <m.div
              variants={{
                hidden: { opacity: 0, x: 28 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <StatSpecial label="Support" value="24/7" />
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
