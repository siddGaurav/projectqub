"use client";

import { m, useMotionTemplate, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Magnetic({
  children,
  className,
  strength = 0.22,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 220, damping: 22, mass: 0.12 });
  const y = useSpring(0, { stiffness: 220, damping: 22, mass: 0.12 });
  const rotateX = useTransform(y, [-40, 40], [8 * strength, -8 * strength]);
  const rotateY = useTransform(x, [-40, 40], [-8 * strength, 8 * strength]);
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.div
      ref={ref}
      className={cn(className)}
      style={{ transform }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </m.div>
  );
}
