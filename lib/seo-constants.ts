/**
 * Homepage equivalents only — use on `/`, `/th`, `/id`, `/tw`, `/ja`, and `/en` (canonical `/`).
 * Do not reuse on URLs without true locale alternates (e.g. `/learn/*`).
 */
export const HREFLANG_LANDING_ALTERNATES = {
  en: "/",
  id: "/id",
  th: "/th",
  "zh-TW": "/tw",
  ja: "/ja",
  "x-default": "/",
} as const;
