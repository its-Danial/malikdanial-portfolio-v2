import ListSection from "../list/ListSection";

type ProjectsProps = {};

const projectItems = [
  {
    title: "WatchedThis",
    description:
      "A Website to search popular and trending movies and track when new episodes are released",
    technologies: ["React", "Next", "Typescript", "MongoDB", "Oauth"],
    link: "https://watchedthis.malikdanial.xyz/",
    linkLabel: "App",
    image: {
      alt: "Search new tv shows and movies and track progress",
      src: "https://www.malikdanial.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanding-page.ec146d2f.png&w=3840&q=75",
    },
  },
  {
    title: "WatchedThis",
    description:
      "A Website to search popular and trending movies and track when new episodes are released",
    technologies: ["React", "Next", "Typescript", "MongoDB", "Oauth"],
    link: "https://watchedthis.malikdanial.xyz/",
    linkLabel: "App",
    image: {
      alt: "Search new tv shows and movies and track progress",
      src: "https://www.malikdanial.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanding-page.ec146d2f.png&w=3840&q=75",
    },
  },
];

export default function Projects(props: ProjectsProps) {
  return (
    <ListSection
      id="projects"
      title="Projects"
      items={projectItems}
      ariaLabel="Selected projects"
    />
  );
}
