import "server-only";

import groq from "groq";
import { Admin, Experience, Project } from "../../sanity.types";
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
    }[0..2]`,
    tags: ["experience"],
  });
}

export async function fetchProjects(): Promise<Project[]> {
  return await sanityFetch({
    query: groq`*[_type == "project"] {
      _id, 
      title, 
      slug, 
      coverImage, 
      "technologies": technologies[]-> {_id, name, link, version},  
      link, 
      description
    }`,
    tags: ["projects"],
  });
}
