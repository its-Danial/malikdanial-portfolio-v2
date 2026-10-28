import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Nav from "@/components/nav";
import SocialLinks from "@/components/nav/SocialLinks";

type HeaderProps = {
  firstName: string;
  jobTitle: string;
  tagline: string;
  location?: string | null;
};

export default function Header({
  firstName,
  jobTitle,
  tagline,
  location,
}: HeaderProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          <Link href="/">{firstName}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
          {jobTitle}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{tagline}</p>
        {location && (
          <p className="mt-3 flex items-center gap-1.5 text-sm">
            <HiOutlineLocationMarker
              className="h-4 w-4 shrink-0 text-accent"
              aria-hidden
            />
            {location}
          </p>
        )}
        <Nav />
      </div>
      <SocialLinks />
    </header>
  );
}
