export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.malikdanial.xyz";

export const SITE_NAME = "Malik Danial";

// Page-level metadata replaces these objects wholesale, so pages spread them.
export const BASE_OPEN_GRAPH = {
  type: "website",
  url: "/",
  siteName: SITE_NAME,
  locale: "en_US",
} as const;

export const BASE_TWITTER = { card: "summary_large_image" } as const;

// The single source of truth for colors. tailwind.config.ts turns each entry
// into a `--color-*` CSS variable and a Tailwind color (`mutedForeground` ->
// `--color-muted-foreground` / `text-muted-foreground`). Code that runs
// outside the browser (share image, theme-color meta, manifest) reads the
// hex values here directly.
export const COLORS = {
  background: "#0f172a", // slate-900
  card: "#1e293b", // slate-800
  foreground: "#e2e8f0", // slate-200: headings, emphasis
  secondaryForeground: "#cbd5e1", // slate-300
  mutedForeground: "#94a3b8", // slate-400: body text
  border: "#334155", // slate-700
  borderStrong: "#475569", // slate-600
  accent: "#5eead4", // teal-300
  accentForeground: "#134e4a", // teal-900
  glow: "#1d4ed8", // blue-700: cursor spotlight
} as const;

export const SOCIALS = [
  { label: "GitHub", link: "https://github.com/its-Danial" },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/malik-danial-azhar/",
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/malikdanialazhar/",
  },
] as const;
