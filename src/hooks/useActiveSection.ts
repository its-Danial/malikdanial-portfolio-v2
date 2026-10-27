import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSectionId, setActiveSectionId] = useState(sectionIds[0]);

  useEffect(() => {
    // Browsers already fire scroll at most once per frame, and the work here
    // is three rect reads, so no extra throttling is needed.
    const update = () => {
      const { innerHeight, scrollY } = window;
      const maxScroll = document.documentElement.scrollHeight - innerHeight;
      const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

      // The activation line slides from the top of the viewport (page top)
      // to the bottom (page end). A fixed line breaks on tall screens, where
      // later sections are already past it before any scrolling, and on
      // short final sections that can never reach it.
      const activationLine = innerHeight * progress;

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
