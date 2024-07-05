import "server-only";

import groq from "groq";
import { Admin, BlockContent } from "../../sanity.types";
import { sanityFetch } from "./fetch";

export type AdminInfo = {
  firstName: string;
  jobTitle: string;
  tagline: string;
  summary: BlockContent;
};

export async function getMyInfo(): Promise<Admin> {
  return await sanityFetch({
    query: groq`*[_type == "admin"] {
      firstName,
      jobTitle,
      tagline,
      summary
    }[0]`,
    tags: ["myInfo"],
  });
}
