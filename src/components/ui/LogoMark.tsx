// "use client";

// import { m } from "framer-motion";
// import { cn } from "@/lib/utils";

// export function LogoMark({ className }: { className?: string }) {
//   return (
//     <m.span
//       className={cn(
//         "font-display inline-flex items-baseline gap-0.5 font-bold tracking-tight",
//         className,
//       )}
//       whileHover={{ scale: 1.02 }}
//     >
//       <m.span
//         className="bg-gradient-to-r from-[var(--grad-a)] via-[var(--grad-b)] to-[var(--grad-c)] bg-clip-text text-transparent"
//         style={{
//           filter: "drop-shadow(0 0 18px rgb(var(--glow-rgb) / 0.35))",
//         }}
//         animate={{
//           filter: [
//             "drop-shadow(0 0 14px rgb(var(--glow-rgb) / 0.4))",
//             "drop-shadow(0 0 26px color-mix(in oklab, var(--accent-secondary) 50%, transparent))",
//             "drop-shadow(0 0 14px rgb(var(--glow-rgb) / 0.4))",
//           ],
//         }}
//         transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
//       >
//         QUB
//       </m.span>
//       <span className="text-foreground/95">NIX</span>
//     </m.span>
//   );
// }



"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
<div className="relative h-16 w-[100px]">
  <Image
    src="/logo.png"
    alt="QUBNIX"
    fill
    priority
    className="object-contain object-left scale-110"
  />
</div>
  );
}


