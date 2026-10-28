import type { Metadata } from "next";

import About from "@/components/section/About";
import Education from "@/components/section/Education";
import Experience from "@/components/section/Experience";
import Footer from "@/components/section/Footer";
import Header from "@/components/section/Header";
import Projects from "@/components/section/Projects";
import {
  fetchEducation,
  fetchExperience,
  fetchFeaturedProjects,
  fetchMyInfo,
} from "@/sanity/lib/queries";
import {
  BASE_OPEN_GRAPH,
  BASE_TWITTER,
  EMAIL,
  SITE_URL,
  SOCIALS,
} from "@/utils/constants";

export async function generateMetadata(): Promise<Metadata> {
  const { firstName, jobTitle, tagline } = await fetchMyInfo();
  const title = `${firstName} | ${jobTitle}`;
  const description = `${firstName} is a ${jobTitle}. ${tagline}`;

  return {
    title,
    description,
    openGraph: { ...BASE_OPEN_GRAPH, title, description },
    twitter: { ...BASE_TWITTER, title, description },
  };
}

export default async function Home() {
  const [info, experience, education, projects] = await Promise.all([
    fetchMyInfo(),
    fetchExperience(),
    fetchEducation(),
    fetchFeaturedProjects(),
  ]);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: [info.firstName, info.lastName].filter(Boolean).join(" "),
    jobTitle: info.jobTitle,
    description: info.tagline,
    url: SITE_URL,
    email: `mailto:${EMAIL}`,
    sameAs: SOCIALS.map((social) => social.link).filter((link) =>
      link.startsWith("http"),
    ),
    alumniOf: education.map((entry) => ({
      "@type": "CollegeOrUniversity",
      name: entry.institution,
    })),
  };

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <script
        type="application/ld+json"
        // Escape "<" so CMS text can never close the script tag early.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header
        firstName={info.firstName ?? ""}
        jobTitle={info.jobTitle ?? ""}
        tagline={info.tagline ?? ""}
        location={info.location}
      />
      <main id="content" className="pt-12 md:pt-16 lg:w-1/2 lg:py-24">
        <About summary={info.summary} />
        <Experience experience={experience} />
        <Education education={education} />
        <Projects projects={projects} />
        <Footer />
      </main>
    </div>
  );
}
