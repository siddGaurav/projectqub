"use client";

import { m } from "framer-motion";
import Link from "next/link";

const LINKS = [
  {
    href: "/projects",
    title: "Projects",
    desc: "Case studies and shipped interfaces.",
  },
  {
    href: "/services",
    title: "Services",
    desc: "End-to-end web craftsmanship.",
  },
  {
    href: "/process",
    title: "Process",
    desc: "How we go from idea to launch.",
  },
] as const;

export function HomeHighlights() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          className="mb-10 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-secondary/90">
            Explore
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Dive deeper into the studio
          </h2>
        </m.div>
        <div className="grid gap-6 md:grid-cols-3">
          {LINKS.map((item, i) => (
            <m.div
              key={item.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link href={item.href} className="group block h-full">
                <m.div
                  className="glass-strong h-full rounded-2xl p-6 transition-shadow group-hover:shadow-glow"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  <p className="font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-foreground/55">{item.desc}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
                    Open →
                  </p>
                </m.div>
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
