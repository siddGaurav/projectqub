// import type { Metadata } from "next";
// import { Plus_Jakarta_Sans, Syne } from "next/font/google";
// import "./globals.css";
// import { AppProviders } from "@/components/providers/AppProviders";
// import { SiteChrome } from "@/components/shell/SiteChrome";

// const syne = Syne({
//   variable: "--font-syne",
//   subsets: ["latin"],
//   display: "swap",
// });

// const plusJakarta = Plus_Jakarta_Sans({
//   variable: "--font-plus-jakarta",
//   subsets: ["latin"],
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "QUBNIX",
//   description:
//     "A creative team of Backend, Frontend, and Full Stack developers building modern digital experiences.",
//   keywords: [
//     "WOWWEB",
//     "web studio",
//     "Next.js",
//     "creative agency",
//     "full stack",
//   ],

// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       data-theme="dark-neon"
//       suppressHydrationWarning
//       className={`${syne.variable} ${plusJakarta.variable} h-full`}
//     >
//       <body
//         suppressHydrationWarning
//         className="min-h-full bg-background text-foreground"
//       >
//         <AppProviders>
//           <SiteChrome />
//           {children}
//         </AppProviders>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { SiteChrome } from "@/components/shell/SiteChrome";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QUBNIX",
  description:
    "A creative team of Backend, Frontend, and Full Stack developers building modern digital experiences.",
  keywords: [
    "QUBNIX",
    "web studio",
    "Next.js",
    "creative agency",
    "full stack",
  ],
  icons: {
    icon: "/vercel.svg",
    shortcut: "/vercel.svg",

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark-neon"
      suppressHydrationWarning
      className={`${syne.variable} ${plusJakarta.variable} h-full`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-background text-foreground"
      >
        <AppProviders>
          <SiteChrome />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}