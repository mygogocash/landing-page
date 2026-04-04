import type { LocaleHomeCopy } from "@/lib/locale-home-copy";
import { TH_HOME } from "@/lib/copy-th-home";
import { JA_ALPHA, JA_HOME } from "@/lib/copy-ja-home";
import { TW_ALPHA, TW_HOME } from "@/lib/copy-tw-home";

/** Locales that use `LocaleHomePage` + `LocaleHomeCopy` (path roots `/th`, `/tw`, `/ja`). */
export const LOCALE_HOME_IDS = ["th", "tw", "ja"] as const;

export type LocaleHomeId = (typeof LOCALE_HOME_IDS)[number];

/**
 * Single registry for localized marketing home copy — add a locale here when adding `copy-*-home.ts`.
 */
export const LOCALE_HOME_COPY: Record<LocaleHomeId, LocaleHomeCopy> = {
  th: TH_HOME,
  tw: TW_HOME,
  ja: JA_HOME,
};

export function localeHomeCopy(id: LocaleHomeId): LocaleHomeCopy {
  return LOCALE_HOME_COPY[id];
}

export type LocaleAlphaBanner = { badge: string; message: string };

/** Optional Alpha strip (TW/JA); `th` has no banner. */
const LOCALE_HOME_ALPHA: Partial<Record<LocaleHomeId, LocaleAlphaBanner>> = {
  tw: TW_ALPHA,
  ja: JA_ALPHA,
};

export function localeHomeAlpha(
  id: LocaleHomeId,
): LocaleAlphaBanner | undefined {
  return LOCALE_HOME_ALPHA[id];
}
