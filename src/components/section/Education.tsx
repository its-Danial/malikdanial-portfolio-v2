import type { EducationQueryResult } from "@/sanity/types";
import { formatDuration } from "@/utils/functions";
import { Card, CardList } from "@/components/ui/CardList";
import ExternalLink from "@/components/ui/ExternalLink";
import RichText from "@/components/ui/RichText";
import Section from "@/components/section/Section";

export default function Education({
  education,
}: {
  education: EducationQueryResult;
}) {
  if (!education.length) return null;

  return (
    <Section id="education" title="Education" ariaLabel="Education">
      <CardList>
        {education.map((entry) => (
          <Card key={entry._id}>
            <p className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
              {entry.startDate &&
                formatDuration({
                  startDate: entry.startDate,
                  endDate: entry.endDate,
                })}
            </p>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                <ExternalLink
                  className="font-medium"
                  href={entry.link}
                  title={entry.degree ?? ""}
                  linkLabel={entry.institution}
                  eventData={{ section: "education" }}
                  outsideClick
                />
              </h3>
              {entry.location && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {entry.location}
                </p>
              )}
              <RichText value={entry.description} />
            </div>
          </Card>
        ))}
      </CardList>
    </Section>
  );
}
