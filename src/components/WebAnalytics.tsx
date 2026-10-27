import Script from "next/script";

const UMAMI_ID = process.env.NEXT_PUBLIC_UMAMI_ID;

export default function WebAnalytics() {
  if (!UMAMI_ID) return null;

  return (
    <Script
      src="https://cloud.umami.is/script.js"
      data-website-id={UMAMI_ID}
      // Keeps localhost and preview deployments out of the stats.
      data-domains="www.malikdanial.xyz,malikdanial.xyz"
      strategy="afterInteractive"
    />
  );
}
