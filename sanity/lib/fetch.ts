import "server-only";

import { draftMode } from "next/headers";
import type { QueryOptions, QueryParams } from "next-sanity";
import { client } from "./client";

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags: string[];
}) {
  const isDraftMode = draftMode().isEnabled;

  const REVALIDATE_SKIP_CACHE = 0;
  const REVALIDATE_CACHE_FOREVER = false;

  return client.fetch<QueryResponse>(query, params, {
    ...(isDraftMode &&
      ({
        perspective: "previewDrafts",
      } satisfies QueryOptions)),
    next: {
      revalidate: isDraftMode
        ? REVALIDATE_SKIP_CACHE
        : REVALIDATE_CACHE_FOREVER,
      tags,
    },
  });
}
