"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { GradientCta } from "@/components/ui/GradientCta";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { HeroTyping } from "@/components/hero/HeroTyping";

const HeroCanvas = dynamic(
  () =>
    import("@/components/hero/HeroCanvas").then((mod) => mod.HeroCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="h-[min(320px,42vh)] w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.03]" />
    ),
  },
);

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-24 lg:pb-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgb(var(--glow-rgb) / 0.12), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-secondary/90">
              QUBNIX
            </p>

            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              We Build Websites That Make People Say{" "}
              <span className="text-gradient">WOW-QUBNIX</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/72 sm:text-xl">
              A team where backend precision, frontend creativity, and full-stack
              expertise come together to build exceptional digital experiences.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/58 sm:text-lg">
              We create products that are fast, modern, and designed to leave a
              lasting impression. From strategy and design to development and
              launch, every detail is crafted with clarity and purpose.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/58 sm:text-lg">
              The result is a digital experience that feels polished, powerful,
              and built for the future.
            </p>

            <div className="mt-8">
              <HeroTyping />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <GradientCta href="/projects">View Projects</GradientCta>

              <Link
                href="/contact"
                className="inline-flex rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-foreground/90 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                Contact Us
              </Link>
            </div>
          </SectionReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "Backend",
                description:
                  "Secure APIs, scalable systems, and architecture designed to perform as the product grows.",
              },
              {
                icon: "◆",
                title: "Frontend",
                description:
                  "Modern interfaces, smooth motion, and polished experiences that feel premium.",
              },
              {
                icon: "◇",
                title: "Full Stack",
                description:
                  "Connecting design and engineering into one seamless product from idea to launch.",
              },
            ].map((role) => (
              <div
                key={role.title}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-lg text-cyan-300">
                    {role.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {role.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl">
            <HeroCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}