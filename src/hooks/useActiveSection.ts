import { useEffect, useState } from "react";

// A section becomes active once its top crosses this fraction of the
// viewport. Nav clicks scroll sections to ~96px from the top (scroll-mt-24),
// well above the line, while the next section's top stays below it.
const ACTIVATION_RATIO = 0.3;

// Within this many pixels of either end of the page counts as "at the end".
const EDGE_TOLERANCE = 4;

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSectionId, setActiveSectionId] = useState(sectionIds[0]);

  useEffect(() => {
    // Browsers already fire scroll at most once per frame, and the work here
    // is a few rect reads, so no extra throttling is needed.
    const update = () => {
      const { innerHeight, scrollY } = window;
      const maxScroll = document.documentElement.scrollHeight - innerHeight;

      // On tall screens later sections already sit above the line before any
      // scrolling, so the top of the page always belongs to the first section.
      if (scrollY <= EDGE_TOLERANCE) {
        setActiveSectionId(sectionIds[0]);
        return;
      }

      // A short last section may never reach the line, so the bottom of the
      // page always belongs to the last one.
      if (scrollY >= maxScroll - EDGE_TOLERANCE) {
        setActiveSectionId(sectionIds[sectionIds.length - 1]);
        return;
      }

      const activationLine = innerHeight * ACTIVATION_RATIO;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          current = id;
        }
      }
      setActiveSectionId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionIds]);

  return activeSectionId;
}
