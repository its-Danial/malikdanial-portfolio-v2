// Newer TypeScript versions type-check side-effect imports. Next 14 only
// declares `*.module.css`, and resolves `server-only` internally without
// shipping types, so both need declarations here.
declare module "*.css";
declare module "server-only";

// Set by the Umami script (src/components/WebAnalytics.tsx) once it loads.
interface Window {
  umami?: {
    track: (event: string, data?: Record<string, string>) => void;
  };
}
