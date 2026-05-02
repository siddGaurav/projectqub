// // "use client";

// // import { m } from "framer-motion";
// // import { useMemo } from "react";

// // type Star = { id: number; x: number; y: number; s: number; d: number };

// // export function Starfield() {
// //   const stars = useMemo(() => {
// //     const out: Star[] = [];
// //     for (let i = 0; i < 25; i++) {
// //       out.push({
// //         id: i,
// //         x: Math.random() * 100,
// //         y: Math.random() * 100,
// //         s: 0.5 + Math.random() * 1.8,
// //         d: 3 + Math.random() * 6,
// //       });
// //     }
// //     return out;
// //   }, []);

// //   return (
// //     <div
// //       aria-hidden
// //       className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
// //     >
// //       {stars.map((st) => (
// //         <m.span
// //           key={st.id}
// //           className="absolute rounded-full shadow-[0_0_10px_color-mix(in_oklab,var(--accent-secondary)_35%,transparent)]"
// //           style={{
// //             left: `${st.x}%`,
// //             top: `${st.y}%`,
// //             width: st.s,
// //             height: st.s,
// //             background: "var(--star)",
// //           }}
// //           animate={{ opacity: [0.15, 0.85, 0.15], scale: [1, 1.35, 1] }}
// //           transition={{
// //             duration: st.d,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //             delay: st.id * 0.04,
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // }



// "use client";

// import { m } from "framer-motion";
// import { useMemo } from "react";

// export function Starfield() {
//   const stars = useMemo(() => {
//     const out = [];
//     for (let i = 0; i < 20; i++) { // aur kam kar diya
//       out.push({
//         id: i,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         d: 4 + Math.random() * 4,
//       });
//     }
//     return out;
//   }, []);

//   return (
//     <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
//       {stars.map((st) => (
//         <m.span
//           key={st.id}
//           className="absolute rounded-full bg-white"
//           style={{
//             left: `${st.x}%`,
//             top: `${st.y}%`,
//             width: 2,
//             height: 2,
//           }}
//           animate={{ opacity: [0.3, 1, 0.3] }}
//           transition={{
//             duration: st.d,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       ))}
//     </div>
//   );
// }




'use client'

export function Starfield() {
  const stars = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((_, i) => (
        <span
          key={i}
          className="absolute bg-white rounded-full opacity-70"
          style={{
            width: 2,
            height: 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}