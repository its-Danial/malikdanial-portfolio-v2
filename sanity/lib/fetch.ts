import "server-only";

import type { QueryParams } from "next-sanity";
import { client } from "@/sanity/lib/client";

// Fallback for when the Sanity webhook isn't configured; with the webhook,
// `/api/revalidate` busts these tags as soon as a document is published.
const REVALIDATE_TIME = 60; // seconds

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: REVALIDATE_TIME,
      tags,
    },
  });
}
