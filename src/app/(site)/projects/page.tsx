import { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { Projects } from "@/components/Projects";

// SEO

export const metadata: Metadata = {

  title:
    "Projects & Case Studies | QUBNIX",

  description:
    "Explore QUBNIX projects, UI/UX case studies, SaaS dashboards, website development and modern digital product designs.",

  keywords: [
    "QUBNIX projects",
    "website development projects",
    "Next.js projects",
    "React case studies",
    "UI UX portfolio",
    "SaaS dashboard design",
    "web app development",
  ],

  openGraph: {

    title:
      "Projects & Case Studies | QUBNIX",

    description:
      "Explore modern web development and SaaS projects built by QUBNIX.",

    url:
      "https://qubnix.com/projects",

    siteName: "QUBNIX",

    images: [
      {
        url:
          "https://qubnix.com/og-image.jpg",

        width: 1200,
        height: 630,

        alt:
          "QUBNIX Projects",
      },
    ],

    type: "website",
  },
};

export default function ProjectsPage() {

  // JSON-LD

  const jsonLd = {

    "@context":
    "https://schema.org",

    "@type":
    "CreativeWork",

    name:
    "QUBNIX Projects",

    description:
    "Modern websites, SaaS dashboards and scalable digital products built by QUBNIX.",

    url:
    "https://qubnix.com/projects",

    creator: {

      "@type":
      "Organization",

      name:
      "QUBNIX",
    },
  };

  return (
    <>

      {/* STRUCTURED DATA */}

      <script
        type="application/ld+json"

        dangerouslySetInnerHTML={{
          __html:
          JSON.stringify(jsonLd),
        }}
      />

      <PageHero
        variant="blur"

        eyebrow="Work"

        title="
        Projects & Case Studies
        "

        subtitle="
        Explore modern websites,
        SaaS dashboards, UI/UX
        systems and scalable
        digital products built by
        QUBNIX.
        "
      />

      <Projects />

    </>
  );
}