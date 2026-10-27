const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

// The public site only. The Studio talks to many Sanity endpoints and
// manages its own framing, so it doesn't get the stricter policy.
const siteOnlyHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Content-Security-Policy",
    value:
      "frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  eslint: {
    dirs: ["src", "sanity"],
  },
  images: { unoptimized: true },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/((?!cms-studio).*)", headers: siteOnlyHeaders },
    ];
  },
};

export default nextConfig;
