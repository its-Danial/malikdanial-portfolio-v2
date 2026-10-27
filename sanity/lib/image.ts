import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "@/sanity/env";

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

// Accepts an asset URL (as returned by `asset->url` in queries) or any other
// image source the builder understands.
export const urlForImage = (source: Parameters<typeof imageBuilder.image>[0]) =>
  imageBuilder.image(source).auto("format").fit("max");
