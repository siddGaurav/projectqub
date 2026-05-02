// "use client";

// import Lenis from "lenis";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";

// export function SmoothScroll({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const lenis = new Lenis({
//       duration: 1.1,
//       smoothWheel: true,
//       touchMultiplier: 1.35,
//     });

//     let rafId = 0;
//     function raf(time: number) {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     }
//     rafId = requestAnimationFrame(raf);

//     return () => {
//       cancelAnimationFrame(rafId);
//       lenis.destroy();
//     };
//   }, [pathname]);

//   return <>{children}</>;
// }


"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);

    const isMobile = window.innerWidth < 768;

    if (isMobile) return;

    const lenis = new Lenis({
      duration: 0.7,
      smoothWheel: true,
      touchMultiplier: 1,
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}