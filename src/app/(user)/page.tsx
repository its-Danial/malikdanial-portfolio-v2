import type { Metadata } from "next";

import About from "@/components/section/About";
import Experience from "@/components/section/Experience";
import Footer from "@/components/section/Footer";
import Header from "@/components/section/Header";
import Projects from "@/components/section/Projects";
import { getMyInfo } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Danial | Software Engineer",
  description: "Portfolio website for Malik Danial",
};

export default async function Home() {
  const { firstName, jobTitle, tagline, summary } = await getMyInfo();

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header firstName={firstName} jobTitle={jobTitle} tagline={tagline} />
      <main className="pt-24 lg:w-1/2 lg:py-24">
        <About summary={summary} />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
