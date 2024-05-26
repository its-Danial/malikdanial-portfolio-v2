/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/cms-studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "@/env";
import { schema } from "@/schema";
import StudioNavbar from "@/components/nav/StudioNavbar";
import Logo from "@/components/ui/Logo";

export default defineConfig({
  basePath: "/cms-studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
  icon: Logo,
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
