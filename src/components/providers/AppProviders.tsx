// "use client";

// import { LazyMotion, domAnimation } from "framer-motion";
// import { SmoothScroll } from "@/lib/smooth-scroll";
// import { ThemeProvider } from "@/components/providers/ThemeProvider";

// export function AppProviders({ children }: { children: React.ReactNode }) {
//   return (
//     <ThemeProvider>
//       <LazyMotion features={domAnimation} strict>
//         <SmoothScroll>{children}</SmoothScroll>
//       </LazyMotion>
//     </ThemeProvider>
//   );
// }

"use client";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LazyMotion, domAnimation } from "framer-motion";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </ThemeProvider>
  );
}


