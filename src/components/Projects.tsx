"use client";

import { m } from "framer-motion";
import { useState } from "react";
import { PROJECTS, type Project } from "@/data/projects";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="relative border-t border-border py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, color-mix(in oklab, var(--accent-secondary) 12%, transparent), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-semibold uppercase tracking-[0.35em] text-accent-bright/90">
            Projects
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Selected work &amp; launch-ready builds
          </h2>

          {/* <p className="mt-4 text-base text-foreground/55">
            Swap URLs and copy in{" "}
            <code className="rounded-md border border-border bg-foreground/10 px-2 py-0.5 text-xs text-accent-secondary">
              src/data/projects.ts
            </code>{" "}
            whenever you ship something new.
          </p> */}
        </SectionReveal>

        <m.div
          className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-6%" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {PROJECTS.map((project) => (
            <m.div
              key={project.id}
              role="button"
              tabIndex={0}
              aria-label={`Open details for ${project.title}`}
              variants={{
                hidden: { opacity: 0, y: 32 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="group cursor-pointer text-left"
              onClick={() => setSelected(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(project);
                }
              }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            >
              <m.div className="relative overflow-hidden rounded-3xl border border-border bg-background/60 transition duration-300">
                <div
                  className={cn(
                    "relative h-48 overflow-hidden bg-gradient-to-br",
                    project.gradient,
                  )}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      loading="lazy"
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : null}

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />

                  <p className="absolute bottom-4 left-4 z-10 font-display text-lg font-semibold text-amber-200">
                    {project.title}
                  </p>
                </div>

                <div className="space-y-4 p-6">
                  <p className="text-sm leading-relaxed text-foreground/60">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[color-mix(in_oklab,var(--accent-secondary)_35%,transparent)] bg-[color-mix(in_oklab,var(--accent-secondary)_12%,transparent)] px-2.5 py-0.5 text-[11px] font-medium text-accent-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex flex-wrap gap-3 pt-1"
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                  >
                    <m.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-xl border border-border bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:border-blue-500 hover:bg-blue-700"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Live site
                    </m.a>

                    <m.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-xl border border-border bg-foreground/5 px-4 py-2 text-xs font-semibold text-foreground/85 hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)]"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      GitHub
                    </m.a>
                  </div>
                </div>
              </m.div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}