"use client";

import { m, LayoutGroup } from "framer-motion";
import { THEMES, type ThemeId } from "@/lib/themes";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <LayoutGroup id="theme-switcher">
      <div
        className={cn(
          "relative flex items-center gap-0.5 rounded-2xl border border-border bg-surface/80 p-1 backdrop-blur-md",
          className,
        )}
        role="radiogroup"
        aria-label="Theme"
      >
        {THEMES.map((t) => {
          const active = theme === t.id;
          return (
            <m.button
              key={t.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setTheme(t.id as ThemeId)}
              className={cn(
                "relative z-[1] rounded-xl px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-colors sm:px-3 sm:text-[11px]",
                active ? "text-foreground" : "text-foreground/45 hover:text-foreground/75",
              )}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              title={t.label}
            >
              {active && (
                <m.span
                  layoutId="theme-pill"
                  className="absolute inset-0 -z-[1] rounded-xl bg-gradient-to-r from-[var(--accent)]/35 via-[var(--accent-bright)]/25 to-[var(--accent-secondary)]/35 shadow-[0_0_24px_-6px_var(--accent)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{t.short}</span>
            </m.button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
