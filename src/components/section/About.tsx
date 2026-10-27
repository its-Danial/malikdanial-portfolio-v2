import type { MyInfoQueryResult } from "@/sanity/types";
import RichText from "@/components/ui/RichText";
import Section from "@/components/section/Section";

export default function About({
  summary,
}: {
  summary: NonNullable<MyInfoQueryResult>["summary"];
}) {
  return (
    <Section id="about" title="About" ariaLabel="About me">
      <RichText value={summary} variant="body" />
    </Section>
  );
}
