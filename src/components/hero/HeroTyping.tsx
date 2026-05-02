"use client";

import { m } from "framer-motion";
import { useEffect, useState } from "react";

const PHRASES = [
  "Interfaces that hypnotize.",
  "Systems engineered to scale.",
  "Experiences people remember.",
];

export function HeroTyping() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = PHRASES[phraseIndex];
    let id: number;

    if (!deleting) {
      if (display.length < full.length) {
        id = window.setTimeout(() => {
          setDisplay(full.slice(0, display.length + 1));
        }, 55);
      } else {
        id = window.setTimeout(() => setDeleting(true), 1300);
      }
    } else if (display.length > 0) {
      id = window.setTimeout(() => {
        setDisplay(full.slice(0, display.length - 1));
      }, 32);
    } else {
      id = window.setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
      }, 280);
    }

    return () => window.clearTimeout(id);
  }, [display, deleting, phraseIndex]);

  return (
    <m.p
      className="mt-6 max-w-xl text-base leading-relaxed text-foreground/65 sm:text-lg"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.5 }}
    >
      <span className="text-foreground/80">{display}</span>
      <m.span
        className="ml-0.5 inline-block h-[1.1em] w-0.5 translate-y-0.5 bg-accent-secondary"
        // animate={{ opacity: [1, 0.2, 1] }}
        // transition={{ duration: 0.9, repeat: Infinity }}
      />
    </m.p>
  );
}
