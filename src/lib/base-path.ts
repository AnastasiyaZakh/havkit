// Vite injects the configured `base` (e.g. "/havkit/" when built for GitHub
// Pages, "/" in dev) as import.meta.env.BASE_URL. Root-relative URLs in head
// tags (favicons, canonical links, OG images) need that prefix so they still
// resolve when the site is served from a subpath.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
