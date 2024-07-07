import "server-only";

import groq from "groq";
import { Admin, Experience } from "../../sanity.types";
import { sanityFetch } from "./fetch";

export async function fetchMyInfo(): Promise<Admin> {
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

export async function fetchExperience(): Promise<Experience[]> {
  return await sanityFetch({
    query: groq`*[_type == "experience"] | order(startDate desc) {
      _id, 
      startDate, 
      endDate, 
      "technologies": technologies[]-> {_id, name, link, version},  
      role, 
      company, 
      company, 
      link, 
      description
    }`,
    tags: ["experience"],
  });
}
