type Technology = { _id: string; name: string | null };

// Shared hover treatment: hovering one card dims its siblings on desktop.
export function CardList({ children }: { children: React.ReactNode }) {
  return <ol className="group/list">{children}</ol>;
}

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all motion-reduce:transition-none sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgb(var(--color-muted-foreground)/0.1)] lg:group-hover:drop-shadow-lg" />
        {children}
      </div>
    </li>
  );
}

export function TechList({ technologies }: { technologies: Technology[] }) {
  if (!technologies.length) return null;

  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {technologies.map((tech) => (
        <li key={tech._id} className="mr-1.5 mt-2">
          <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
            {tech.name}
          </div>
        </li>
      ))}
    </ul>
  );
}
