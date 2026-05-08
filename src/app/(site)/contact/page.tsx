import { Metadata } from "next";

import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";

// SEO

export const metadata: Metadata = {

  title:
    "Contact QUBNIX | Website Development & SaaS Experts",

  description:
    "Contact QUBNIX for website development, SaaS platforms, UI/UX design, React, Next.js and modern digital product solutions.",

  keywords: [
    "Contact QUBNIX",
    "website development company",
    "Next.js developers",
    "React development agency",
    "UI UX design services",
    "SaaS development company",
    "web development contact",
    "digital product studio",
  ],

  openGraph: {

    title:
      "Contact QUBNIX",

    description:
      "Get in touch with QUBNIX to build modern websites, SaaS platforms and scalable digital products.",

    url:
      "https://qubnix.com/contact",

    siteName: "QUBNIX",

    images: [
      {
        url:
          "https://qubnix.com/og-image.jpg",

        width: 1200,
        height: 630,

        alt:
          "Contact QUBNIX",
      },
    ],

    type: "website",
  },
};

export default function ContactPage() {

  return (
    <>
      <PageHero
        variant="fade"

        eyebrow="Let’s Talk"

        title="Contact QUBNIX"

        subtitle="
        Share your project goals,
        startup ideas, timelines and
        product vision. We help
        businesses launch premium
        websites, SaaS platforms and
        scalable digital experiences
        with confidence.
        "
      />

      <Contact />
    </>
  );
}