import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  metadataBase: new URL("https://qubnix.com"),

  title: {
    default: "QUBNIX",
    template: "%s | QUBNIX",
  },

  description:
    "QUBNIX is a modern digital product studio building high-performance websites, SaaS platforms, UI/UX systems and scalable web applications using Next.js and React.",

  keywords: [
    "QUBNIX",
    "website development",
    "Next.js agency",
    "React development",
    "SaaS development",
    "UI UX design",
    "frontend development",
    "backend development",
    "full stack development",
    "modern web applications",
    "digital product studio",
  ],

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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

        <GoogleAnalytics gaId="G-3ZGF4CW5QT" />
      </body>
    </html>
  );
}