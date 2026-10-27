import type { ExperienceQueryResult } from "@/sanity/types";
import { formatDuration } from "@/utils/functions";
import { Card, CardList, TechList } from "@/components/ui/CardList";
import ExternalLink from "@/components/ui/ExternalLink";
import RichText from "@/components/ui/RichText";
import Section from "@/components/section/Section";

export default function Experience({
  experience,
}: {
  experience: ExperienceQueryResult;
}) {
  return (
    <Section id="experience" title="Experience" ariaLabel="Work experience">
      <CardList>
        {experience.map((job) => (
          <Card key={job._id}>
            <p className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
              {job.startDate &&
                formatDuration({
                  startDate: job.startDate,
                  endDate: job.endDate,
                })}
            </p>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                <ExternalLink
                  className="font-medium"
                  href={job.link}
                  title={job.role ?? ""}
                  linkLabel={job.company}
                  outsideClick
                />
              </h3>
              <RichText value={job.description} />
              <TechList technologies={job.technologies} />
            </div>
          </Card>
        ))}
      </CardList>
      <div className="mt-12">
        <ExternalLink href="/resume.pdf" title="View Full" linkLabel="Résumé" />
      </div>
    </Section>
  );
}
