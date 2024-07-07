import { fetchExperience } from "@/lib/queries";
import ListSection from "../list/ListSection";
import ExternalLink from "../ui/ExternalLink";

export default async function Experience() {
  const experience = await fetchExperience();

  return (
    <ListSection
      id="experience"
      title="Experience"
      items={experience}
      ariaLabel="Work experience"
    >
      <div className="mt-12">
        <ExternalLink
          href="/resume.pdf"
          ariaLabel="View Full Résumé"
          title="View Full"
          linkLabel="Résumé"
        />
      </div>
    </ListSection>
  );
}
