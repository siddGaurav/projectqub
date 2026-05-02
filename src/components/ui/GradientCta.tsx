"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { useState, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Ripple = { id: number; x: number; y: number };

export function GradientCta({
  children,
  className,
  onClick,
  href,
  type = "button",
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
}) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    setRipples((prev) => [
      ...prev,
      { id: Date.now(), x: e.clientX - r.left, y: e.clientY - r.top },
    ]);
    window.setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 650);
  };

  const sharedClass = cn(
    "relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-6 py-3 text-sm font-semibold tracking-wide text-white",
    "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400",
    "shadow-[0_0_40px_-8px_rgba(168,85,247,0.65),0_0_60px_-20px_rgba(56,189,248,0.45)]",
    "ring-1 ring-white/15 transition-transform",
    className,
  );

  const content = (
    <>
      <m.span
        className="pointer-events-none absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-violet-500/40 via-fuchsia-400/35 to-cyan-400/40 opacity-40 blur-md"
        aria-hidden
        animate={{ opacity: [0.28, 0.55, 0.28], scale: [1, 1.03, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <m.span
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-white/25 to-violet-500/0 opacity-0"
        whileHover={{ opacity: 1, x: ["-30%", "30%"] }}
        transition={{ duration: 0.9 }}
      />
      {ripples.map((r) => (
        <m.span
          key={r.id}
          className="pointer-events-none absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35"
          style={{ left: r.x, top: r.y }}
          initial={{ scale: 0, opacity: 0.55 }}
          animate={{ scale: 3.2, opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        />
      ))}
      <span className="relative z-[1]">{children}</span>
    </>
  );

  if (href?.startsWith("/")) {
    return (
      <m.span
        className="inline-block"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <Link
          href={href}
          className={sharedClass}
          onClick={(e) => {
            addRipple(e as unknown as MouseEvent<HTMLElement>);
            onClick?.();
          }}
        >
          {content}
        </Link>
      </m.span>
    );
  }

  if (href) {
    return (
      <m.a
        href={href}
        className={sharedClass}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={(e) => {
          addRipple(e);
        }}
      >
        {content}
      </m.a>
    );
  }

  return (
    <m.button
      type={type}
      className={sharedClass}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={(e) => {
        addRipple(e);
        onClick?.();
      }}
    >
      {content}
    </m.button>
  );
}
