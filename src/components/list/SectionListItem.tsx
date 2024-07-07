import { urlForImage } from "@/lib/image";
import { formatDuration } from "@/utils/functions";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { type Image as SanityImageType } from "sanity";
import { Experience, Project } from "../../../sanity.types";
import ExternalLink from "../ui/ExternalLink";

type SectionListItemProps = Experience | Project;

const isExperience = (item: Experience | Project): item is Experience => {
  return (item as Experience).role !== undefined;
};

export default function SectionListItem(props: SectionListItemProps) {
  const period = isExperience(props)
    ? formatDuration({ startDate: props.startDate, endDate: props.endDate })
    : undefined;

  const displayTitle = isExperience(props) ? props.role : props.title;
  const link = props.link;
  const description = props.description;
  const coverImage = isExperience(props) ? undefined : props.coverImage;
  const company = isExperience(props) ? props.company : undefined;
  const technologies = props.technologies;

  const portableTextComponents: PortableTextComponents = {
    block: ({ children }) => {
      return <p className="mt-2 text-sm leading-normal">{children}</p>;
    },
  };

  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        {period && (
          <header
            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
            aria-label={period}
          >
            {period}
          </header>
        )}
        <div className={`z-10 sm:col-span-6${coverImage ? " sm:order-2" : ""}`}>
          <h3 className="font-medium leading-snug text-slate-200">
            <ExternalLink
              className="!font-medium"
              ariaLabel={displayTitle}
              href={link}
              linkLabel={company}
              title={displayTitle}
              outsideClick
            />
          </h3>

          <PortableText
            value={description}
            components={portableTextComponents}
          />

          {technologies && (
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {technologies.map((tech) => (
                <li key={tech._id} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {tech.name}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {coverImage && (
          <Image
            alt={coverImage.alt}
            width="200"
            height="48"
            className="rounded border-2 border-slate-200/10 text-transparent transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            src={urlForImage(coverImage as SanityImageType)}
          />
        )}
      </div>
    </li>
  );
}
