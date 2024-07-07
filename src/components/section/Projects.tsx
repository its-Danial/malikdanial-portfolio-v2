import { fetchProjects } from "@/lib/queries";
import ListSection from "../list/ListSection";

export default async function Projects() {
  const projects = await fetchProjects();

  return (
    <ListSection
      id="projects"
      title="Projects"
      items={projects}
      ariaLabel="Selected projects"
    />
  );
}
