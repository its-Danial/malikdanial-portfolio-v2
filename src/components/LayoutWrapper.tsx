"use client";

import { useMouseMove } from "@/hooks/useMouseMove";
import ThemeProvider from "./ThemeProvider";
import Spotlight from "./ui/Spotlight";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  let { mouseX, mouseY, handleMouseMove } = useMouseMove();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="relative" onMouseMove={handleMouseMove}>
        {/* <ThemeToggle /> */}
        <Spotlight mouseX={mouseX} mouseY={mouseY} />
        {children}
      </div>
    </ThemeProvider>
  );
}
