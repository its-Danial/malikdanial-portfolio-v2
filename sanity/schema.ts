import { type SchemaTypeDefinition } from "sanity";

import admin from "./schemaTypes/admin";
import blockContent from "./schemaTypes/blockContent";
import experience from "./schemaTypes/experience";
import project from "./schemaTypes/project";
import technology from "./schemaTypes/technology";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [admin, experience, project, technology, blockContent],
};
