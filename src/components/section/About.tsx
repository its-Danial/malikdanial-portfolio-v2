export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Currently employed at Bayt.com, specializing in front‐end development.
          Actively leading project migrations to the latest technologies,
          designing and maintaining an custom web components widget for seamless
          third party integration, and prioritizing application performance
          optimization.
        </p>
        <p>
          I work on personal projects using{" "}
          <b className="text-gray-200 hover:text-teal-300 focus-visible:text-teal-300">
            React.js/Next.js
          </b>{" "}
          with{" "}
          <b className="text-gray-200 hover:text-teal-300 focus-visible:text-teal-300">
            Typescript
          </b>{" "}
          and{" "}
          <b className="text-gray-200 hover:text-teal-300 focus-visible:text-teal-300">
            Spring Boot
          </b>{" "}
          or{" "}
          <b className="text-gray-200 hover:text-teal-300 focus-visible:text-teal-300">
            Django
          </b>{" "}
          in my spare time. Recently I&apos;ve been playing around with{" "}
          <b className="text-gray-200 hover:text-teal-300 focus-visible:text-teal-300">
            IOS{" "}
          </b>
          development, machine learning and AI.
        </p>
      </div>
    </section>
  );
}
