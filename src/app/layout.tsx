
import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://qubnix.com"),


    verification: {
    google: "abc123xyz456",
  },

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

  authors: [
    {
      name: "QUBNIX",
    },
  ],

  creator: "QUBNIX",

  publisher: "QUBNIX",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "QUBNIX",

    description:
      "Modern websites, SaaS platforms and scalable digital experiences built with precision and premium UI/UX.",

    url: "https://qubnix.com",

    siteName: "QUBNIX",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QUBNIX",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "QUBNIX",

    description:
      "Modern websites, SaaS platforms and scalable digital products.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};