// src/data/team.ts

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  skills: string[];
  bio: string;
  initials: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "reenu",
    name: "Reenu",
    role: "Digital Alchemist",
    image: "/team/reenu.png",
    skills: [
      "Web Developers",
      "UI/UX Designers",
      "Digital Marketers",
      "Startup Founders",
      "Product Builders",
      "Brand Strategists",
      "Content Creators",
      "Growth Hackers",
      "No-Code / Low-Code Creators",
      "AI Tool Builders",
      "SaaS Creators",
      "Freelancers & Agency Owners"
    ],
    bio: "Behind every idea at QUBNIX is Reenu’s vision, creativity, and relentless drive for perfection.  She transforms simple concepts into bold digital experiences that feel modern and alive.  With an eye for every detail, she leads the team toward work that is elegant, powerful, and unforgettable.  Her passion is not just to build products—but to create something people truly remember.",
    initials: "R",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "gaurav-siddharth",
    name: "Gaurav Siddharth",
    role: "Co-Founder",
    image: "/team/gaurav.png",
    skills: [
      "Business Websites",
      "Landing Pages",
      "E-commerce",
      "Admin Panels",
      "SEO",
      "Responsive Design",
      "Performance",
      "Deployment",
    ],
    bio: "Connects product vision to shipped software across the entire stack.",
    initials: "GS",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },





  {
    id: "vicky-yadav",
    name: "Vicky Yadav",
    role: "Backend Developer",
    image: "/team/vicky.png",
    skills: [
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Cloud Hosting",
      "Security",
      "Authentication",
      "Database Design",
      "Server Management",
    ],
    bio: "Architects resilient systems, APIs, and data layers that scale with confidence.",
    initials: "VK",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "deepanshu-keshri",
    name: "Deepanshu Keshari",
    role: "Full Stack Developer",
    image: "/team/deepanshu.png",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Motion",
      "UI/UX",
      "Creative Direction",
      "Responsive Design",
      "Performance",
    ],
    bio: "Transforms ideas into polished interfaces with a strong focus on creativity and motion.",
    initials: "DK",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },




];