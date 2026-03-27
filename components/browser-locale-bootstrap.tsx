"use client";

import { useEffect } from "react";
import {
  AUTO_LOCALE_DONE_KEY,
  hasSavedLocalePreference,
  isLikelyAutomatedClient,
  persistLocale,
  readPrimaryBrowserLanguage,
} from "@/lib/locale-storage";
import {
  resolveAutoRedirectPath,
  resolveLocaleForPathname,
} from "@/lib/locale-routing";

/**
 * No visible UI: aligns experience with the browser language once.
 * - From `/` only: redirect to `/th` or `/id` when the primary language matches
 *   and the user has not chosen a locale in the header dropdown.
 * - Skips bots to reduce SEO risk.
 * - Sets `AUTO_LOCALE_DONE_KEY` after the first evaluation so returning to `/`
 *   (e.g. “English site”) does not loop redirects.
 * - Syncs the header dropdown + `document.documentElement.lang` from locale routes
 *   (`/th`, `/id`, `/tw`, `/ja`) when there is no saved preference yet.
 */
export function BrowserLocaleBootstrap() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isLikelyAutomatedClient()) return;

    const path = window.location.pathname;
    const autoDone = localStorage.getItem(AUTO_LOCALE_DONE_KEY);
    const userChose = hasSavedLocalePreference();

    if (!autoDone) {
      if (path === "/") {
        const redirectPath = !userChose
          ? resolveAutoRedirectPath(readPrimaryBrowserLanguage())
          : null;
        if (redirectPath) {
          localStorage.setItem(AUTO_LOCALE_DONE_KEY, "1");
          window.location.replace(redirectPath);
          return;
        }
      }
      localStorage.setItem(AUTO_LOCALE_DONE_KEY, "1");
    }

    if (!userChose) {
      const routeLocale = resolveLocaleForPathname(path);
      if (routeLocale) {
        persistLocale(routeLocale);
      }
    }
  }, []);

  return null;
}
