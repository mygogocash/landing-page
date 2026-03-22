/** User-chosen language + region (header dropdown). */
export const LOCALE_STORAGE_KEY = "gogocash.locale";

/**
 * After first auto-detection pass (redirect from `/` or one-time URL sync), set so we
 * do not keep re-evaluating on every navigation.
 */
export const AUTO_LOCALE_DONE_KEY = "gogocash.auto_locale_done";

export function hasSavedLocalePreference(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(LOCALE_STORAGE_KEY) !== null;
}

/** Persists locale and notifies `LocaleDropdown` listeners. */
export function persistLocaleRaw(lang: string, region: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify({ lang, region }));
  document.documentElement.lang = lang;
  window.dispatchEvent(
    new CustomEvent<{ lang: string; region: string }>("gogocash:locale", {
      detail: { lang, region },
    }),
  );
}

export function readPrimaryBrowserLanguage(): string {
  if (typeof navigator === "undefined") return "en";
  const raw = navigator.languages?.[0] ?? navigator.language ?? "en";
  return raw.split("-")[0]?.toLowerCase() ?? "en";
}

export function isLikelyAutomatedClient(): boolean {
  if (typeof navigator === "undefined") return true;
  const ua = navigator.userAgent.toLowerCase();
  return /bot|crawler|spider|googlebot|bingbot|slurp|duckduckbot|facebookexternalhit|preview/i.test(
    ua,
  );
}
