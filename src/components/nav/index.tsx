"use client";

import { useActiveSectionObserver } from "@/hooks/useActiveSectionObserver";
import Link from "next/link";

export default function Nav() {
  const sectionIds = ["about", "experience", "projects"];

  const activeSectionId = useActiveSectionObserver(sectionIds);

  const isSectionActive = (sectionId: string) => {
    return activeSectionId === sectionId;
  };

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {sectionIds.map((sectionId) => (
          <li key={sectionId}>
            <Link
              data-umami-event={`NAV --> ${sectionId}`}
              className={`group flex items-center py-3${isSectionActive(sectionId) ? " active" : ""}`}
              href={`#${sectionId}`}
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {sectionId}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
