import { urlForImage } from "@/sanity/lib/image";
import type { ProjectsQueryResult } from "@/sanity/types";
import { Card, CardList, TechList } from "@/components/ui/CardList";
import ExternalLink from "@/components/ui/ExternalLink";
import RichText from "@/components/ui/RichText";
import Section from "@/components/section/Section";
import { cn } from "@/utils/functions";

type CoverImage = NonNullable<ProjectsQueryResult[number]["coverImage"]>;

// Thumbnails render at most 200px wide; serve 1x/2x/3x straight from the
// Sanity CDN instead of re-optimizing them through Next.
const THUMBNAIL_WIDTH = 200;

function ProjectThumbnail({ image }: { image: CoverImage }) {
  const url = image.asset?.url;
  if (!url) return null;

  const { width = 16, height = 9 } = image.asset?.metadata?.dimensions ?? {};
  const lqip = image.asset?.metadata?.lqip;
  const src = (scale: number) =>
    urlForImage(url)
      .width(THUMBNAIL_WIDTH * scale)
      .url();

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src(2)}
      srcSet={`${src(1)} 1x, ${src(2)} 2x, ${src(3)} 3x`}
      alt={image.alt ?? ""}
      width={THUMBNAIL_WIDTH}
      height={Math.round((THUMBNAIL_WIDTH * (height ?? 9)) / (width ?? 16))}
      loading="lazy"
      decoding="async"
      className="z-10 h-auto w-full max-w-[200px] rounded border-2 border-foreground/10 bg-cover bg-center text-transparent transition group-hover:border-foreground/30 motion-reduce:transition-none sm:order-1 sm:col-span-2 sm:translate-y-1"
      style={lqip ? { backgroundImage: `url(${lqip})` } : undefined}
    />
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
                  outsideClick
                />
              </h3>
              <RichText value={project.description} />
              <TechList technologies={project.technologies} />
            </div>
            {project.coverImage && (
              <ProjectThumbnail image={project.coverImage} />
            )}
          </Card>
        ))}
      </CardList>
    </Section>
  );
}
