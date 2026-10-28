import type { Metadata } from "next";
import { RiArrowLeftLine, RiArrowRightUpLine } from "react-icons/ri";

import Footer from "@/components/section/Footer";
import ExternalLink from "@/components/ui/ExternalLink";
import TrackedLink from "@/components/ui/TrackedLink";
import { fetchMyInfo, fetchProjects } from "@/sanity/lib/queries";
import { BASE_OPEN_GRAPH, BASE_TWITTER } from "@/utils/constants";
import { eventAttributes, formatDate } from "@/utils/functions";

export async function generateMetadata(): Promise<Metadata> {
  const { firstName } = await fetchMyInfo();
  const title = `Project Archive | ${firstName}`;
  const description = `Every project ${firstName} has built, from production platforms to side projects.`;

  return {
    title,
    description,
    alternates: { canonical: "/archive" },
    openGraph: { ...BASE_OPEN_GRAPH, url: "/archive", title, description },
    twitter: { ...BASE_TWITTER, title, description },
  };
}

const displayUrl = (link: string) => {
  try {
    const { hostname, pathname } = new URL(link);
    return `${hostname.replace(/^www\./, "")}${pathname.replace(/\/$/, "")}`;
  } catch {
    return link;
  }
};

export default async function Archive() {
  const [{ firstName }, projects] = await Promise.all([
    fetchMyInfo(),
    fetchProjects(),
  ]);

  return (
    <main id="content" className="lg:py-24">
      <TrackedLink
        href="/"
        event="home-click"
        eventData={{ from: "archive" }}
        className="group inline-flex items-center gap-1.5 font-semibold leading-tight text-accent"
      >
        <RiArrowLeftLine
          aria-hidden
          className="h-4 w-4 transition-transform group-hover:-translate-x-1 group-focus-visible:-translate-x-1 motion-reduce:transition-none"
        />
        {firstName}
      </TrackedLink>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        All Projects
      </h1>

      <table className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 whitespace-nowrap bg-background/75 backdrop-blur">
          <tr>
            <th className="py-4 pr-6 text-sm font-semibold text-foreground">
              Year
            </th>
            <th className="py-4 pr-6 text-sm font-semibold text-foreground">
              Project
            </th>
            <th className="hidden py-4 pr-6 text-sm font-semibold text-foreground md:table-cell">
              Made at
            </th>
            <th className="hidden py-4 pr-6 text-sm font-semibold text-foreground lg:table-cell">
              Built with
            </th>
            <th className="hidden py-4 text-sm font-semibold text-foreground sm:table-cell">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr
              key={project._id}
              className="border-b border-foreground/10 last:border-none"
            >
              <td className="py-4 pr-6 align-top text-sm tabular-nums">
                {project.date && formatDate(project.date, { year: "numeric" })}
              </td>
              <td className="py-4 pr-6 align-top font-semibold leading-snug text-foreground">
                {/* Phones have no link column, so the title carries it. */}
                <span className="sm:hidden">
                  <ExternalLink
                    className="text-base"
                    href={project.link}
                    title={project.title ?? ""}
                    eventData={{ section: "archive" }}
                  />
                </span>
                <span className="hidden sm:inline">{project.title}</span>
                {project.madeAt && (
                  <span className="mt-1 block text-sm font-normal text-muted-foreground md:hidden">
                    {project.madeAt}
                  </span>
                )}
              </td>
              <td className="hidden py-4 pr-6 align-top text-sm md:table-cell">
                {project.madeAt}
              </td>
              <td className="hidden py-4 pr-6 align-top lg:table-cell">
                <ul className="flex -translate-y-1.5 flex-wrap">
                  {project.technologies.map((tech) => (
                    <li key={tech._id} className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                        {tech.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="hidden py-4 align-top sm:table-cell">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    {...eventAttributes("outbound-link", {
                      section: "archive",
                      title: project.title,
                      url: project.link,
                    })}
                    className="group/link inline-flex items-baseline text-sm font-medium transition-colors hover:text-accent focus-visible:text-accent motion-reduce:transition-none"
                  >
                    <span className="max-w-[16rem] truncate">
                      {displayUrl(project.link)}
                    </span>
                    <RiArrowRightUpLine
                      aria-hidden
                      className="ml-1 h-3.5 w-3.5 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
                    />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
