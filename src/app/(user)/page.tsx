import type { Metadata } from "next";
import Link from "next/link";

import Nav from "@/components/nav";
import SocialLinks from "@/components/nav/SocialLinks";
import About from "@/components/section/About";
import Experience from "@/components/section/Experience";
import Footer from "@/components/section/Footer";
import Projects from "@/components/section/Projects";

export const metadata: Metadata = {
  title: "Danial | Software Engineer",
  description: "Portfolio website for Malik Danial",
};

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <Link href="/">Malik Danial</Link>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Software Engineer II
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            I build engaging and accessible digital experiences.
          </p>
          <Nav />
        </div>
        <SocialLinks />
      </header>
      <main className="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
