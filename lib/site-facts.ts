/**
 * Single source of truth for marketing copy, schema, and FAQ consistency (SEO / AEO).
 * Update here first, then align visible copy if needed.
 */
export const SITE_FACTS = {
  brandName: "GoGoCash",
  partnerCountMin: 70,
  /** Shown in copy as "70+" */
  partnerCountLabel: "70+",
  maxCashbackPhrase: "up to 30%",
  keyMerchantsShort: "Shopee, Lazada, Agoda",
  regionLabel: "Southeast Asia",
  countriesIso: ["TH", "ID", "MY", "SG", "PH", "VN"] as const,
  countriesList:
    "Thailand, Indonesia, Malaysia, Singapore, the Philippines, and Vietnam",
  /** Community size callout (hero / footer); keep in sync with product claims */
  shopperCommunityLabel: "6M+",
} as const;

/** One-line hero supporting sentence: keywords without stuffing. */
export function heroSeoSupportingLine(): string {
  return `Earn ${SITE_FACTS.maxCashbackPhrase} cashback at ${SITE_FACTS.partnerCountLabel} stores — ${SITE_FACTS.keyMerchantsShort}, and more across ${SITE_FACTS.regionLabel}.`;
}

/** Short blurb for meta / schema where a full sentence is needed. */
export function siteSeoOneLiner(): string {
  return `Shop via ${SITE_FACTS.brandName} at ${SITE_FACTS.partnerCountLabel} partners across ${SITE_FACTS.regionLabel}. Earn ${SITE_FACTS.maxCashbackPhrase} real cashback at stores like ${SITE_FACTS.keyMerchantsShort}.`;
}
