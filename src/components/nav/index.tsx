"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import Link from "next/link";
import { trackEvent } from "@/utils/functions";
import { cn } from "@/utils/functions";

const SECTION_IDS = ["about", "experience", "education", "projects"] as const;

export default function Nav() {
  const activeSectionId = useActiveSection(SECTION_IDS);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {SECTION_IDS.map((sectionId) => {
          const isActive = activeSectionId === sectionId;

          return (
            <li key={sectionId}>
              <Link
                onClick={() => trackEvent("nav-click", { section: sectionId })}
                className={cn(
                  "group flex items-center py-3",
                  isActive && "active",
                )}
                href={`#${sectionId}`}
                aria-current={isActive ? "location" : undefined}
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-border-strong transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none" />
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground group-focus-visible:text-foreground motion-reduce:transition-none">
                  {sectionId}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
