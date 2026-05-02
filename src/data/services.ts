export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Pixel-perfect interfaces with React, Next.js, and motion systems that feel alive.",
    icon: "◇",
  },
  {
    title: "Backend Development",
    description:
      "Secure APIs, databases, and cloud infrastructure engineered for reliability.",
    icon: "⚡",
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end delivery from schema to UI—one team, one coherent product.",
    icon: "◈",
  },
  {
    title: "UI/UX Design",
    description:
      "Product thinking, wireframes, and visual language that elevates every interaction.",
    icon: "✦",
  },
  {
    title: "Website Optimization",
    description:
      "Core Web Vitals, caching, and performance tuning for speed that users feel.",
    icon: "◎",
  },
  {
    title: "SEO Friendly Websites",
    description:
      "Semantic structure, metadata, and content patterns built for discoverability.",
    icon: "⌁",
  },
];
