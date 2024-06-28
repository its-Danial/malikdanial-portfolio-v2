import { useEffect, useState } from "react";

type Section = {
  id: string;
  title: string;
};

export const useActiveSectionObserver = (sections: Section[]) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(
    sections[0].id,
  );

  useEffect(() => {
    const debounce = (func: Function, delay: number) => {
      let timeoutId: NodeJS.Timeout;
      return function (...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(null, args), delay);
      };
    };

    const handleIntersection = debounce(
      (entries: IntersectionObserverEntry[]) => {
        let mostVisibleEntry: IntersectionObserverEntry | null = null;
        entries.forEach((entry) => {
          if (
            !mostVisibleEntry ||
            entry.intersectionRatio > mostVisibleEntry.intersectionRatio
          ) {
            mostVisibleEntry = entry;
          }
        });
        // @ts-ignore
        if (mostVisibleEntry && mostVisibleEntry.isIntersecting) {
          // @ts-ignore
          const targetElement = mostVisibleEntry.target as HTMLElement;
          setActiveSectionId(targetElement.id);
        }
      },
      20,
    );

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -40% 0px",
      threshold: Array.from({ length: 100 }, (_, i) => i / 100),
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  return activeSectionId;
};
