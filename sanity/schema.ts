import { type SchemaTypeDefinition } from "sanity";

import admin from "@/sanity/schemaTypes/admin";
import blockContent from "@/sanity/schemaTypes/blockContent";
import experience from "@/sanity/schemaTypes/experience";
import project from "@/sanity/schemaTypes/project";
import technology from "@/sanity/schemaTypes/technology";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [admin, experience, project, technology, blockContent],
};
