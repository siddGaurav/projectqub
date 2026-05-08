import { Metadata } from "next";

import { About } from "@/components/About";
import { PageHero } from "@/components/PageHero";

// SEO

export const metadata: Metadata = {

  title:
    "About QUBNIX | Website Development Company",

  description:
    "Learn about QUBNIX, a modern website development and digital product studio specializing in Next.js, React, SaaS platforms, UI/UX systems and scalable web applications.",

  keywords: [
    "QUBNIX",
    "About QUBNIX",
    "website development company",
    "Next.js agency",
    "React developers",
    "UI UX studio",
    "SaaS development",
    "modern web development",
  ],

  openGraph: {

    title:
      "About QUBNIX",

    description:
      "Meet the creative and technical team behind QUBNIX digital products and modern web experiences.",

    url:
      "https://qubnix.com/about",

    siteName: "QUBNIX",

    images: [
      {
        url:
          "https://qubnix.com/og-image.jpg",

        width: 1200,
        height: 630,

        alt:
          "About QUBNIX",
      },
    ],

    type: "website",
  },
};

export default function AboutPage() {

  return (
    <>
      <PageHero
        variant="slide-left"

        eyebrow="QUBNIX"

        title="
        About QUBNIX
        "

        subtitle="
        A modern digital product
        studio focused on building
        high-performance websites,
        SaaS platforms, UI systems
        and scalable web experiences
        with precision, speed and
        premium design quality.
        "
      />

      <About />
    </>
  );
}