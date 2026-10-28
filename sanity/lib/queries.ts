import "server-only";

import { groq } from "next-sanity";
import type {
  EducationQueryResult,
  ExperienceQueryResult,
  MyInfoQueryResult,
  ProjectsQueryResult,
} from "@/sanity/types";
import { sanityFetch } from "@/sanity/lib/fetch";

// Used on the home page until at least one project is marked as featured.
const FEATURED_FALLBACK_COUNT = 4;

const myInfoQuery = groq`*[_type == "admin"][0] {
  firstName,
  lastName,
  jobTitle,
  tagline,
  location,
  summary
}`;

const experienceQuery = groq`*[_type == "experience"] | order(startDate desc) {
  _id,
  role,
  company,
  link,
  startDate,
  endDate,
  "technologies": coalesce(technologies[]->{ _id, name }, []),
  description
}`;

// Entries without dates (shown without a period) sort last.
const educationQuery = groq`*[_type == "education"] | order(coalesce(startDate, "0000-01-01") desc) {
  _id,
  degree,
  institution,
  location,
  link,
  startDate,
  endDate,
  description
}`;

const projectsQuery = groq`*[_type == "project"] | order(date desc) {
  _id,
  title,
  date,
  featured,
  madeAt,
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
    tags: ["experience", "technology"],
  });
}

export async function fetchEducation() {
  return sanityFetch<EducationQueryResult>({
    query: educationQuery,
    tags: ["education"],
  });
}

export async function fetchProjects() {
  return sanityFetch<ProjectsQueryResult>({
    query: projectsQuery,
    tags: ["project", "technology"],
  });
}

export async function fetchFeaturedProjects() {
  const projects = await fetchProjects();
  const featured = projects.filter((project) => project.featured);

  return featured.length
    ? featured
    : projects.slice(0, FEATURED_FALLBACK_COUNT);
}
