/** Article list + fallback when Strapi is not configured — see `lib/learn-data.ts`. */
export type LearnArticleMeta = {
  slug: string;
  /** H1 + document title base */
  title: string;
  metaTitle: string;
  metaDescription: string;
  hubDesc: string;
  updated: string;
};

export const LEARN_ARTICLES: LearnArticleMeta[] = [
  {
    slug: "how-cashback-works",
    title: "How cashback tracking works",
    metaTitle: "How Cashback Tracking Works | GoGoCash Learn",
    metaDescription:
      "How GoGoCash tracks purchases from click to merchant confirmation — and how to avoid common tracking issues.",
    hubDesc: "From click to merchant confirmation — what affects your rewards.",
    updated: "March 22, 2026",
  },
  {
    slug: "saving-plus-explained",
    title: "Saving Plus in plain language",
    metaTitle: "Saving Plus Explained | GoGoCash Learn",
    metaDescription:
      "Plain-language overview of Saving Plus, risks, fees, and how it differs from confusing points programs.",
    hubDesc: "Optional ways to think about idle balances — without the jargon.",
    updated: "March 22, 2026",
  },
  {
    slug: "best-cashback-stores-thailand",
    title: "Best cashback brands for Thailand shoppers",
    metaTitle: "Best Cashback Brands for Thailand | GoGoCash Learn",
    metaDescription:
      "How Thai shoppers can compare marketplace, travel, and electronics cashback — and stay safe while shopping.",
    hubDesc: "How to compare categories, travel, and electronics deals.",
    updated: "March 22, 2026",
  },
  {
    slug: "withdraw-cashback-gogocash",
    title: "How to withdraw cashback from GoGoCash",
    metaTitle: "How to Withdraw Cashback | GoGoCash Learn",
    metaDescription:
      "Steps to withdraw GoGoCash cashback to your bank or e-wallet: thresholds, timing, and what to expect.",
    hubDesc: "Thresholds, methods, and typical payout timing.",
    updated: "March 22, 2026",
  },
  {
    slug: "cashback-not-tracking-fixes",
    title: "Cashback not tracking? Common fixes",
    metaTitle: "Cashback Not Tracking — Fixes | GoGoCash Learn",
    metaDescription:
      "If GoGoCash did not track your order: checklist for ad blockers, cookies, session rules, and when to contact support.",
    hubDesc: "Checklist before you contact support — cookies, tabs, and timing.",
    updated: "March 22, 2026",
  },
  {
    slug: "minimum-withdrawal-payouts-sea",
    title: "Minimum withdrawal and payouts in Southeast Asia",
    metaTitle: "Minimum Withdrawal & Payouts (SEA) | GoGoCash Learn",
    metaDescription:
      "Why minimum withdrawal exists, where to see your threshold, and how payouts differ by country and rail.",
    hubDesc: "Thresholds, rails, and country-specific nuances.",
    updated: "March 22, 2026",
  },
];

const bySlug: Record<string, LearnArticleMeta> = Object.fromEntries(
  LEARN_ARTICLES.map((a) => [a.slug, a]),
);

export function learnArticleBySlug(slug: string): LearnArticleMeta | undefined {
  return bySlug[slug];
}

export function learnArticleSlugs(): string[] {
  return LEARN_ARTICLES.map((a) => a.slug);
}

export function learnArticlePaths(): string[] {
  return LEARN_ARTICLES.map((a) => `/learn/${a.slug}`);
}
