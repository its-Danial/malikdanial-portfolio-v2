import type { Metadata } from "next";
import { metadata as studioMetadata } from "next-sanity/studio/metadata";
import { viewport as studioViewport } from "next-sanity/studio/viewport";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "CMS Studio",
  description: "Sanity Studio",
  icons: { icon: "/favicon.ico" },
};

export const viewport = studioViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
