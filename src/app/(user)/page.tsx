import type { Metadata } from "next";

import About from "@/components/section/About";
import Experience from "@/components/section/Experience";
import Footer from "@/components/section/Footer";
import Header from "@/components/section/Header";
import Projects from "@/components/section/Projects";
import {
  fetchExperience,
  fetchMyInfo,
  fetchProjects,
} from "@/sanity/lib/queries";
import {
  BASE_OPEN_GRAPH,
  BASE_TWITTER,
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
  const [info, experience, projects] = await Promise.all([
    fetchMyInfo(),
    fetchExperience(),
    fetchProjects(),
  ]);

  const currentJob = experience.find((job) => !job.endDate);
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: [info.firstName, info.lastName].filter(Boolean).join(" "),
    jobTitle: info.jobTitle,
    description: info.tagline,
    url: SITE_URL,
    sameAs: SOCIALS.map((social) => social.link),
    ...(currentJob?.company && {
      worksFor: { "@type": "Organization", name: currentJob.company },
    }),
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
      />
      <main id="content" className="pt-12 md:pt-16 lg:w-1/2 lg:py-24">
        <About summary={info.summary} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Footer />
      </main>
    </div>
  );
}
