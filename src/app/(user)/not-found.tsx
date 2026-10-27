import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main
      id="content"
      className="flex min-h-[calc(100vh-6rem)] flex-col items-start justify-center lg:min-h-screen"
    >
      <p className="text-sm font-bold uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md leading-normal">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 font-semibold text-foreground transition-colors hover:text-accent focus-visible:text-accent motion-reduce:transition-none"
      >
        ← Back home
      </Link>
    </main>
  );
}
