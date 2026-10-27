// Newer TypeScript versions type-check side-effect imports. Next 14 only
// declares `*.module.css`, and resolves `server-only` internally without
// shipping types, so both need declarations here.
declare module "*.css";
declare module "server-only";
