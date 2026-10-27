import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { COLORS } from "./src/utils/constants";
const { fontFamily } = require("tailwindcss/defaultTheme");

const toKebab = (name: string) =>
  name.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);

// "#0f172a" -> "15 23 42", the format Tailwind needs for opacity modifiers.
const toChannels = (hex: string) =>
  [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)).join(" ");

const colorNames = Object.keys(COLORS).map(toKebab);

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: Object.fromEntries(
        colorNames.map((name) => [
          name,
          `rgb(var(--color-${name}) / <alpha-value>)`,
        ]),
      ),
    },
  },
  plugins: [
    // Emits `:root { --color-background: 15 23 42; ... }` from COLORS.
    plugin(({ addBase }) => {
      addBase({
        ":root": Object.fromEntries(
          Object.entries(COLORS).map(([name, hex]) => [
            `--color-${toKebab(name)}`,
            toChannels(hex),
          ]),
        ),
      });
    }),
  ],
};
export default config;
