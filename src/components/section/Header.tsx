import Link from "next/link";
import Nav from "../nav";
import SocialLinks from "../nav/SocialLinks";

type HeaderProps = {
  firstName: string;
  jobTitle: string;
  tagline: string;
};

export default function Header({ firstName, jobTitle, tagline }: HeaderProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">{firstName}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {jobTitle}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{tagline}</p>
        <Nav />
      </div>
      <SocialLinks />
    </header>
  );
}
