import Image from "next/image";
import ExternalLink from "../ui/ExternalLink";

export type SectionListItemProps = {
  title: string;
  period?: string;
  description: string;
  technologies?: string[];
  link: string;
  linkLabel: string;
  image?: React.ImgHTMLAttributes<HTMLImageElement>;
};

export default function SectionListItem({
  title,
  period,
  description,
  technologies,
  link,
  linkLabel,
  image,
}: SectionListItemProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        {period && (
          <header
            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
            aria-label={period}
          >
            {period}
          </header>
        )}
        <div className={`z-10 sm:col-span-6${image ? " sm:order-2" : ""}`}>
          <h3 className="font-medium leading-snug text-slate-200">
            <ExternalLink
              className="!font-medium"
              ariaLabel={title}
              href={link}
              linkLabel={linkLabel}
              title={title}
              outsideClick
            />
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          {technologies && (
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {technologies.map((tech, index) => (
                <li key={index} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {image && (
          <Image
            alt={image.alt as string}
            width="200"
            height="48"
            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            style={{ color: "transparent" }}
            src={image.src as string}
          />
        )}
      </div>
    </li>
  );
}
