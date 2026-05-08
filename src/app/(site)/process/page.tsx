import { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";

// SEO

export const metadata: Metadata = {

  title:
    "Our Process | QUBNIX Digital Product Workflow",

  description:
    "Explore the QUBNIX process for building modern websites, SaaS platforms and scalable digital products through strategy, UI/UX design, development and launch.",

  keywords: [
    "QUBNIX process",
    "website development workflow",
    "SaaS product development",
    "UI UX design process",
    "Next.js development process",
    "digital product strategy",
    "modern web development",
    "React development workflow",
  ],

  openGraph: {

    title:
      "Our Process | QUBNIX",

    description:
      "Discover how QUBNIX transforms ideas into premium digital experiences through strategy, design and scalable development.",

    url:
      "https://qubnix.com/process",

    siteName: "QUBNIX",

    images: [
      {
        url:
          "https://qubnix.com/og-image.jpg",

        width: 1200,
        height: 630,

        alt:
          "QUBNIX Process",
      },
    ],

    type: "website",
  },
};

export default function ProcessPage() {

  return (
    <>
      <PageHero
        variant="slide-up"

        eyebrow="Method"

        title="Our Process"

        subtitle="
        Our process transforms
        ideas into polished digital
        experiences through
        strategy, UI/UX design,
        scalable development and
        seamless launch execution.

        Every stage is transparent,
        collaborative and focused
        on delivering high-quality
        websites and SaaS products
        with speed, clarity and
        precision.
        "
      />

      <Process />
    </>
  );
}