// export const NAV_ITEMS = [
//   { id: "home", label: "Home", href: "/" },
//   { id: "about", label: "About", href: "/about" },
//   { id: "team", label: "Team", href: "/team" },
//   { id: "projects", label: "Projects", href: "/projects" },
//   { id: "services", label: "Services", href: "/services" },
//   { id: "process", label: "Process", href: "/process" },
//   { id: "testimonials", label: "Testimonials", href: "/testimonials" },
//   { id: "contact", label: "Contact", href: "/contact" },
// ] as const;

// export type NavItem = (typeof NAV_ITEMS)[number];
// export type NavId = NavItem["id"];


export const NAV_ITEMS = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "process", label: "Process", href: "/process" },
  { id: "team", label: "Team", href: "/team" },

] as const;

export const FOOTER_ITEMS = [
  // { id: "home", label: "Home", href: "/" },
  // { id: "about", label: "About", href: "/about" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "services", label: "Services", href: "/services" },
  // { id: "process", label: "Process", href: "/process" },
  { id: "testimonials", label: "Testimonials", href: "/testimonials" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
export type NavId = NavItem["id"];