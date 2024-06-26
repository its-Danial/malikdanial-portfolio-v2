import ListSection from "../list/ListSection";
import ExternalLink from "../ui/ExternalLink";

const experienceItems = [
  {
    title: "Software Engineer II ·",
    period: "2024 — Present",
    description:
      "Designed and maintained a custom web component SDK widget for seamless integration with third-party applications, expanding Evalufy's reach and usability. Focused on optimizing application performance and transitioning towards a Progressive Web App (PWA) architecture to enhance accessibility and user engagement. Collaborating seamlessly with cross-functional teams, ensuring effective communication and synergy between front-end and back-end development efforts.",
    technologies: [
      "JavaScript",
      "Vue.js",
      "Vuetify",
      "Jira",
      "Sentry",
      "Custom Web Component",
    ],
    link: "https://www.evalufy.com/",
    linkLabel: "Bayt.com - Evalufy",
  },
  {
    title: "Software Engineer I ·",
    period: "2024 — Present",
    description:
      "Designed and maintained a custom web component SDK widget for seamless integration with third-party applications, expanding Evalufy's reach and usability. Focused on optimizing application performance and transitioning towards a Progressive Web App (PWA) architecture to enhance accessibility and user engagement. Collaborating seamlessly with cross-functional teams, ensuring effective communication and synergy between front-end and back-end development efforts.",
    technologies: [
      "JavaScript",
      "Vue.js",
      "Vuetify",
      "Jira",
      "Sentry",
      "Custom Web Component",
    ],
    link: "https://www.evalufy.com/",
    linkLabel: "Bayt.com - Evalufy",
  },
];

export default function Experience() {
  return (
    <ListSection
      id="experience"
      title="Experience"
      items={experienceItems}
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
