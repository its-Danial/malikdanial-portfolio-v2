"use client";

import { useActiveSectionObserver } from "@/hooks/useActiveSectionObserver";
import Link from "next/link";

export default function Nav() {
  const sections = [
    {
      title: "About",
      id: "about",
    },
    {
      title: "Experience",
      id: "experience",
    },
    {
      title: "Projects",
      id: "projects",
    },
    {
      title: "Contact",
      id: "contact",
    },
  ];

  const activeSectionId = useActiveSectionObserver(sections);

  const isSectionActive = (sectionId: string) => {
    return activeSectionId === sectionId;
  };

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              className={`group flex items-center py-3${isSectionActive(section.id) ? " active" : ""}`}
              href={`#${section.id}`}
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {section.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
