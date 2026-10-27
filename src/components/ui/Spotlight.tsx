"use client";

import { useEffect, useRef } from "react";

// Cursor-following glow. Writes CSS variables straight to the element so
// pointer moves never trigger a React render.
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!el || !canHover.matches || reduceMotion.matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      el.style.setProperty("--spotlight-x", `${x}px`);
      el.style.setProperty("--spotlight-y", `${y}px`);
      el.style.opacity = "1";
    };

    const onPointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(600px at var(--spotlight-x, 0px) var(--spotlight-y, 0px), rgb(var(--color-glow) / 0.15), transparent 80%)",
      }}
    />
  );
}
