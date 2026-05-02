"use client";

import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/data/nav";
import { cn } from "@/lib/utils";
import { GradientCta } from "@/components/ui/GradientCta";
import { LogoMark } from "@/components/ui/LogoMark";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <m.header
      className="fixed left-0 right-0 top-0 z-[160] border-b border-border backdrop-blur-2xl"
      style={{ background: "var(--navbar-bg)" }}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:gap-4 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3 text-left">
          <LogoMark className="text-xl sm:text-2xl" />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <m.div key={item.id} whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-2.5 py-2 text-[12px] font-medium tracking-wide transition-colors xl:px-3 xl:text-[13px]",
                    isActive
                      ? "text-foreground"
                      : "text-foreground/55 hover:text-foreground/90",
                  )}
                >
                  {item.label}
                  <m.span
                    className="absolute bottom-1 left-2.5 right-2.5 h-px origin-left rounded-full xl:left-3 xl:right-3"
                    style={{
                      background: `linear-gradient(90deg, var(--accent), var(--accent-bright), var(--accent-secondary))`,
                    }}
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                      boxShadow: isActive
                        ? `0 0 16px rgb(var(--glow-rgb) / 0.45)`
                        : "0 0 0 rgba(0,0,0,0)",
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {!isActive && (
                    <m.span
                      className="absolute bottom-1 left-2.5 right-2.5 h-px origin-left scale-x-0 rounded-full bg-foreground/25 xl:left-3 xl:right-3"
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </m.div>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <ThemeSwitcher />
          <GradientCta href="/contact">Start Your Project</GradientCta>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeSwitcher className="scale-90" />
          <m.button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-foreground/5 text-foreground"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-lg">{open ? "×" : "≡"}</span>
          </m.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            className="border-t border-border px-4 py-4 lg:hidden"
            style={{ background: "var(--navbar-bg)" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-left text-sm font-medium text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <GradientCta href="/contact" onClick={() => setOpen(false)}>
                  Start Your Project
                </GradientCta>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}
