"use client";

import { useIsMounted } from "@/hooks/useIsMounted";
import { useTheme } from "next-themes";
import { FiSun } from "react-icons/fi";
import { RiMoonClearLine } from "react-icons/ri";

type ThemeToggleProps = {};

export default function ThemeToggle(props: ThemeToggleProps) {
  const { systemTheme, theme, setTheme } = useTheme();

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  const Icon = currentTheme === "dark" ? RiMoonClearLine : FiSun;

  return (
    <button
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="absolute right-2 top-2 rounded-md bg-teal-300/10 p-3 hover:bg-teal-300/20 lg:right-4 lg:top-4"
    >
      <Icon size={20} className="text-teal-300" />
    </button>
  );
}
