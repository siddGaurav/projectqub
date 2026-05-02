"use client";

import { m } from "framer-motion";
import { PROCESS_STEPS } from "@/data/process";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Process() {
  return (
    <section className="relative min-h-[120vh] border-t border-border py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 100% 60%, color-mix(in oklab, var(--accent-secondary) 10%, transparent), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-bright/90">
            Process
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From spark to launch—choreographed clarity
          </h2>

          <p className="mt-4 text-base text-foreground/55">
            A transparent timeline from planning to launch.
          </p>
        </SectionReveal>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Frontend
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-white">
              Pixel-perfect interfaces
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/60">
              We build smooth, responsive, and modern interfaces that feel
              premium on every device.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "Responsive Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
              Backend
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-white">
              Reliable systems & APIs
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/60">
              Powerful backend architecture built for speed, security, and
              long-term scalability.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express",
                "REST APIs",
                "MongoDB",
                "PostgreSQL",
                "Authentication",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
              SEO
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-white">
              Built to rank & perform
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/60">
              Every website is optimized for search engines, visibility, and
              faster growth.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Technical SEO",
                "Meta Tags",
                "Schema Markup",
                "Performance",
                "Core Web Vitals",
                "Sitemap",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              User Friendly
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-white">
              Experiences people enjoy
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/60">
              We focus on clarity, smooth interactions, and intuitive journeys
              that keep users engaged.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "UI/UX",
                "Easy Navigation",
                "Fast Loading",
                "Mobile Friendly",
                "Accessibility",
                "Micro Interactions",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-20 max-w-3xl pb-64">
          {/* <div className="absolute left-[11px] top-0 hidden h-full w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-bright)] to-[var(--accent-secondary)] sm:block md:left-[15px]" /> */}
          <div className="absolute left-[11px] top-0 bottom-32 hidden w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-bright)] to-[var(--accent-secondary)] sm:block md:left-[15px]" />

          <div className="space-y-12 sm:space-y-14 sm:pl-14">
            {PROCESS_STEPS.map((step, index) => (
              <m.div
                key={step.step}
                className="relative flex gap-5 sm:gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="relative flex flex-col items-center sm:absolute sm:-left-[20px] sm:top-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--accent-secondary)_45%,transparent)] bg-gradient-to-br from-[color-mix(in_oklab,var(--accent)_50%,transparent)] to-[color-mix(in_oklab,var(--accent-secondary)_40%,transparent)] text-xs font-bold text-foreground sm:h-9 sm:w-9">
                    {step.step}
                  </div>

                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="mt-2 h-12 w-px bg-gradient-to-b from-foreground/25 to-transparent sm:hidden" />
                  )}
                </div>

                <div className="flex-1 rounded-2xl border border-border bg-background/60 p-6 sm:ml-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-foreground/55">
                    {step.description}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}