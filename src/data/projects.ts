/**
 * Edit this file to update project cards, links, and modal content.
 * `liveUrl` and `githubUrl` are used for buttons; set to "#" as placeholder.
 */
export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    id: "ecommerce",
    title: "E-commerce Website",
    description: "High-conversion storefront with fluid checkout and realtime inventory.",
    longDescription:
      "A premium shopping experience with dynamic product discovery, secure payments, and a design system tuned for trust and clarity.",
    tech: ["Next.js", "Tailwind",],
    liveUrl: "https://somecollege.netlify.app/",
    githubUrl: "https://github.com",
    gradient: "from-violet-600/40 via-fuchsia-500/30 to-cyan-500/30",
    image: "/heritage.jpg",
  },
  // {
  //   id: "gym",
  //   title: "Gym Website",
  //   description: "Bold fitness brand site with schedules, trainers, and membership CTAs.",
  //   longDescription:
  //     "Immersive landing with class timetables, trainer profiles, and animated metrics that drive sign-ups.",
  //   tech: ["React", "Framer Motion", "CMS"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  //   gradient: "from-emerald-500/35 via-cyan-500/25 to-blue-600/35",
  //   image: ""
  // },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Editorial portfolio with case studies and cinematic scroll storytelling.",
    longDescription:
      "Awwwards-inspired case study layout with magnetic interactions and refined typography.",
    tech: ["Next.js", "GSAP", "Three.js"],
    liveUrl: "https://qubnix.com/",
    githubUrl: "https://github.com",
    gradient: "from-amber-500/30 via-rose-500/25 to-violet-600/35",
    image: "/web.png",
  },
  // {
  //   id: "dashboard",
  //   title: "Dashboard App",
  //   description: "Analytics dashboard with dense data viz and glass UI panels.",
  //   longDescription:
  //     "Operational clarity through charts, alerts, and role-based views—built for speed at scale.",
  //   tech: ["TypeScript", "React", "D3", "REST"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  //   gradient: "from-sky-500/35 via-indigo-500/30 to-purple-600/35",
  //   image: "",
  // },
  {
    id: "woodshape",
    title: "woodshape Website",
    description: "Studio site with immersive hero, services grid, and lead capture.",
    longDescription:
      "Signature presence for a creative agency—motion-first narrative and polished project reels.",
    tech: ["Next.js", "Tailwind", "Sanity"],
    liveUrl: "https://woodshape.shop",
    githubUrl: "https://github.com",
    gradient: "from-fuchsia-600/35 via-violet-500/25 to-cyan-400/30",
    image: "/woodshape.jpg",
  },
  {
    id: "fresh-juice",
    title: "Fresh Juice Website",
    description: "Moody dining experience with menu, reservations, and location story.",
    longDescription:
      "Tactile menus, photography-led layout, and reservation flow tuned for local discovery.",
    tech: ["React", "Node", "Maps API"],
    liveUrl: "https://juicelook.com",
    githubUrl: "https://github.com",
    gradient: "from-orange-500/30 via-red-500/25 to-rose-600/35",
    image: "/juice.jpg",
  }
];
