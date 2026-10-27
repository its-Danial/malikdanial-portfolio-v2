import "server-only";

import { groq } from "next-sanity";
import type {
  ExperienceQueryResult,
  MyInfoQueryResult,
  ProjectsQueryResult,
} from "@/sanity/types";
import { sanityFetch } from "@/sanity/lib/fetch";

// How many entries the home page lists; the full history lives in the résumé.
const EXPERIENCE_LIMIT = 3;
const PROJECTS_LIMIT = 4;

const myInfoQuery = groq`*[_type == "admin"][0] {
  firstName,
  lastName,
  jobTitle,
  tagline,
  summary
}`;

const experienceQuery = groq`*[_type == "experience"] | order(startDate desc) [0...$limit] {
  _id,
  role,
  company,
  link,
  startDate,
  endDate,
  "technologies": coalesce(technologies[]->{ _id, name }, []),
  description
}`;

const projectsQuery = groq`*[_type == "project"] | order(date desc) [0...$limit] {
  _id,
  title,
  link,
  coverImage {
    alt,
    asset-> {
      url,
      metadata { lqip, dimensions { width, height } }
    }
  },
  "technologies": coalesce(technologies[]->{ _id, name }, []),
  description
}`;

// Tags match document `_type`s so the revalidation webhook can bust them directly.
export async function fetchMyInfo() {
  const info = await sanityFetch<MyInfoQueryResult>({
    query: myInfoQuery,
    tags: ["admin"],
  });

  if (!info) {
    throw new Error('No published "admin" document found in Sanity.');
  }

  return info;
}

export async function fetchExperience() {
  return sanityFetch<ExperienceQueryResult>({
    query: experienceQuery,
    params: { limit: EXPERIENCE_LIMIT },
    tags: ["experience", "technology"],
  });
}

export async function fetchProjects() {
  return sanityFetch<ProjectsQueryResult>({
    query: projectsQuery,
    params: { limit: PROJECTS_LIMIT },
    tags: ["project", "technology"],
  });
}
