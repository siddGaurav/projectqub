export const THEME_STORAGE_KEY = "qubnix-theme";

export const THEMES = [
  {
    id: "dark-neon",
    label: "Dark Neon",
    short: "Neon",
  },
  // {
  //   id: "midnight-blue",
  //   label: "Midnight Blue",
  //   short: "Blue",
  // },
  // {
  //   id: "purple-cyber",
  //   label: "Purple Cyber",
  //   short: "Cyber",
  // },
  // {
  //   id: "orange",
  //   label: "Orange",
  //   short: "Orange",
  //   accent: "#FF8A1F",
  //   accentSecondary: "#FFB347",
  //   gradient: ["#FF7A00", "#FF9F43", "#FFC56B"],
  // }



] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

export const DEFAULT_THEME: ThemeId = "dark-neon";

export function isThemeId(value: string): value is ThemeId {
  return THEMES.some((t) => t.id === value);
}
