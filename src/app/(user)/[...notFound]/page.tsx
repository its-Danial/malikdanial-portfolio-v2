import { notFound } from "next/navigation";

// With one root layout per route group there is no app-level not-found
// boundary, so unknown URLs are routed here to render (user)/not-found.tsx.
export default function CatchAll() {
  notFound();
}
