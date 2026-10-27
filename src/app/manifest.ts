import type { MetadataRoute } from "next";

import { SITE_NAME, COLORS } from "@/utils/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} | Software Engineer`,
    short_name: "Danial",
    start_url: "/",
    display: "standalone",
    theme_color: COLORS.background,
    background_color: COLORS.background,
    icons: [
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
