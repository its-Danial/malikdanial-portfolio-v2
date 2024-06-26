"use client";

import ThemeProvider from "@/components/ThemeProvider";
import Spotlight from "@/components/ui/Spotlight";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useMouseMove } from "@/hooks/useMouseMove";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let { mouseX, mouseY, handleMouseMove } = useMouseMove();

  return (
    <html lang="en" className="scroll-smooth">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="icon" href="/favicon.ico" />
      <body
        className={`${inter.className} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative" onMouseMove={handleMouseMove}>
            <ThemeToggle />
            <Spotlight mouseX={mouseX} mouseY={mouseY} />
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
