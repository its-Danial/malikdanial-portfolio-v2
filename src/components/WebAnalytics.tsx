import Script from "next/script";

export default function WebAnalytics() {
  return (
    <Script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
    />
  );
}
