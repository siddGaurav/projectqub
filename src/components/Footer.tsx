

"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { FOOTER_ITEMS } from "@/data/nav";
import { CONTACT_INFO } from "@/data/contact";
import { LogoMark } from "@/components/ui/LogoMark";

export function Footer() {
  return (
    <footer
      className="relative border-t border-border"
      style={{ background: "var(--footer-bg)" }}
    >
      <m.div
        className="h-px w-full origin-center"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent), var(--accent-bright), var(--accent-secondary), transparent)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/">
              <LogoMark className="text-2xl" />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/50">
              QUBNIX builds futuristic, high-performance websites designed to stand out in a crowded digital world.

              For ambitious teams, we create experiences that feel bold, electric, and impossible to ignore.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { label: "IG", href: CONTACT_INFO.social.instagram },
                { label: "GH", href: CONTACT_INFO.social.github },
                { label: "IN", href: CONTACT_INFO.social.linkedin },
              ].map((s) => (
                <m.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-foreground/5 text-xs font-semibold text-foreground/70 transition-colors hover:border-[color-mix(in_oklab,var(--accent-secondary)_40%,transparent)] hover:text-foreground"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {s.label}
                </m.a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/40">
              Quick Links
            </p>

            <ul className="mt-4 space-y-2">
              {FOOTER_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/55 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/40">
              Say Hello
            </p>

            <p className="mt-4 text-sm text-foreground/55">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-foreground"
              >
                {CONTACT_INFO.email}
              </a>
            </p>

            <p className="mt-2 text-sm text-foreground/55">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="hover:text-foreground"
              >
                {CONTACT_INFO.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 text-xs text-foreground/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} QUBNIX. All rights reserved.</p>

          <p className="text-foreground/35">
            Built with Next.js · Motion · Precision
          </p>
        </div>
      </div>
    </footer>
  );
}