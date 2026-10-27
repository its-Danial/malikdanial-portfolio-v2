import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";

import Spotlight from "@/components/ui/Spotlight";
import WebAnalytics from "@/components/WebAnalytics";
import {
  BASE_OPEN_GRAPH,
  BASE_TWITTER,
  SITE_NAME,
  SITE_URL,
  COLORS,
} from "@/utils/constants";
import "@/app/globals.css";
import { cn } from "@/utils/functions";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: BASE_OPEN_GRAPH,
  twitter: BASE_TWITTER,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: COLORS.background,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        fontSans.variable,
        "scroll-smooth motion-reduce:scroll-auto",
      )}
    >
      <body className="bg-background font-sans leading-relaxed text-muted-foreground antialiased selection:bg-accent selection:text-accent-foreground">
        <a
          href="#content"
          className="absolute left-0 top-0 z-50 block -translate-x-full rounded bg-accent px-4 py-3 text-sm font-bold uppercase tracking-widest text-accent-foreground focus-visible:translate-x-0"
        >
          Skip to Content
        </a>
        <Spotlight />
        <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          {children}
        </div>
        <WebAnalytics />
      </body>
    </html>
  );
}
