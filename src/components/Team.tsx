"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { TEAM_MEMBERS } from "@/data/team";
import { SectionReveal } from "@/components/ui/SectionReveal";

const iconBtn =
  "flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-foreground/5 text-xs text-foreground/70 transition-colors hover:border-[color-mix(in_oklab,var(--accent-secondary)_40%,transparent)] hover:text-foreground";

export function Team() {
  const founder = TEAM_MEMBERS.find((member) => member.id === "reenu");

  const otherMembers = TEAM_MEMBERS.filter(
    (member) => member.id !== "reenu"
  );

  return (
    <section className="relative border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-secondary/90">
            Team
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Four minds. One vision.
          </h2>

          <p className="mt-4 text-base text-foreground/55">
           Design, code, and strategy moving in perfect sync to craft experiences that feel futuristic, seamless, and unforgettable. From pixel-perfect interfaces to powerful backend systems, every member contributes a unique skill to one shared vision. We don&apos;t work in isolated roles—we move as one team, driven by precision, speed, and ambition. Together, we turn bold ideas into exceptional digital products that go far beyond the ordinary.
          </p>



        </SectionReveal>

        {founder && (
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 overflow-hidden rounded-[36px] border border-border bg-foreground/[0.03] p-8 lg:p-12"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[320px_1fr]">
              <div className="flex justify-center">
                <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-border">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <span className="inline-flex rounded-full border border-accent-secondary/20 bg-accent-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent-secondary">
                  Founder
                </span>

                <h3 className="mt-5 font-display text-4xl font-bold text-foreground lg:text-6xl">
                  {founder.name}
                </h3>

                <p className="mt-2 text-lg text-accent-secondary">
                  {founder.role}
                </p>

                <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/65">
                  {founder.bio}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {founder.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-foreground/5 px-4 py-2 text-sm text-foreground/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </m.div>
        )}

        <m.div
          className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.14 } },
          }}
        >
          {otherMembers.map((member) => (
            <m.article
              key={member.id}
              variants={{
                hidden: { opacity: 0, y: 36 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
              className="group relative"
            >
              <div className="glass-strong relative h-full overflow-hidden rounded-3xl p-6 ring-1 ring-[color-mix(in_oklab,var(--accent)_18%,transparent)]">
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-border">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-accent-secondary/95">
                    {member.role}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-foreground/55">
                    {member.bio}
                  </p>

                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {member.skills.slice(0, 12).map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-foreground/5 px-3 py-1 text-[11px] font-medium text-foreground/65"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}