import { RiArrowRightUpLine } from "react-icons/ri";
import { urlForImage } from "@/sanity/lib/image";
import type { ProjectsQueryResult } from "@/sanity/types";
import { Card, CardList, TechList } from "@/components/ui/CardList";
import ExternalLink from "@/components/ui/ExternalLink";
import RichText from "@/components/ui/RichText";
import Section from "@/components/section/Section";
import TrackedLink from "@/components/ui/TrackedLink";
import { cn, eventAttributes } from "@/utils/functions";

type CoverImage = NonNullable<ProjectsQueryResult[number]["coverImage"]>;

// Full width on phones (about 330px), a ~200px thumbnail column from `sm`
// up. Served straight from the Sanity CDN at the widths below.
const IMAGE_WIDTHS = [320, 480, 720, 960];
const IMAGE_SIZES = "(min-width: 640px) 200px, calc(100vw - 48px)";

function ProjectImage({
  image,
  href,
  title,
}: {
  image: CoverImage;
  href?: string | null;
  title?: string | null;
}) {
  const url = image.asset?.url;
  if (!url) return null;

  const { width, height } = image.asset?.metadata?.dimensions ?? {};
  const lqip = image.asset?.metadata?.lqip;
  const src = (w: number) => urlForImage(url).width(w).url();

  // A fixed 16:9 frame keeps cards even; portrait screenshots are contained
  // inside it over a blurred copy of themselves instead of stretching the card.
  const frame = (
    <div
      className="aspect-video overflow-hidden rounded border-2 border-foreground/10 bg-card bg-cover bg-center transition group-hover:border-foreground/30 motion-reduce:transition-none"
      style={lqip ? { backgroundImage: `url(${lqip})` } : undefined}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src(480)}
        srcSet={IMAGE_WIDTHS.map((w) => `${src(w)} ${w}w`).join(", ")}
        sizes={IMAGE_SIZES}
        alt={image.alt ?? ""}
        width={width ?? 16}
        height={height ?? 9}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-contain text-transparent"
      />
    </div>
  );

  // Image first on phones so each project leads with a visual; on larger
  // screens it moves into the left thumbnail column.
  const className =
    "z-10 order-first mb-4 block sm:order-1 sm:col-span-2 sm:mb-0 sm:translate-y-1";

  // On touch screens the image is the natural tap target, so it links to the
  // project too. It's hidden from keyboards and screen readers because the
  // title already carries the same link.
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      {...eventAttributes("outbound-link", {
        section: "projects",
        source: "image",
        title,
        url: href,
      })}
      tabIndex={-1}
      aria-hidden
      className={className}
    >
      {frame}
    </a>
  ) : (
    <div className={className}>{frame}</div>
  );
}

export default function Projects({
  projects,
}: {
  projects: ProjectsQueryResult;
}) {
  return (
    <Section id="projects" title="Projects" ariaLabel="Selected projects">
      <CardList>
        {projects.map((project) => (
          <Card key={project._id}>
            <div
              className={cn(
                "z-10 sm:col-span-6",
                project.coverImage && "sm:order-2",
              )}
            >
              <h3 className="font-medium leading-snug text-foreground">
                <ExternalLink
                  className="font-medium"
                  href={project.link}
                  title={project.title ?? ""}
                  eventData={{ section: "projects" }}
                  outsideClick
                />
              </h3>
              <RichText value={project.description} />
              <TechList technologies={project.technologies} />
            </div>
            {project.coverImage && (
              <ProjectImage
                image={project.coverImage}
                href={project.link}
                title={project.title}
              />
            )}
          </Card>
        ))}
      </CardList>
      <div className="mt-12">
        <TrackedLink
          href="/archive"
          event="archive-click"
          eventData={{ from: "home" }}
          className="group/link inline-flex items-baseline text-base font-semibold leading-tight text-foreground transition-colors hover:text-accent focus-visible:text-accent motion-reduce:transition-none"
        >
          View Full Project Archive
          <RiArrowRightUpLine
            aria-hidden
            className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
          />
        </TrackedLink>
      </div>
    </Section>
  );
}
