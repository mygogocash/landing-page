/**
 * Shared shape for localized marketing homepages (`/th`, `/tw`, `/ja`).
 * Implementations live in `lib/copy-*-home.ts`.
 */
export type LocaleHomeWhyCard = { title: string; body: string };
export type LocaleHomeFeatureCard = { title: string; body: string };
export type LocaleHomeHowStep = {
  summary: string;
  title: string;
  desc: string;
  bullets: readonly string[];
};
export type LocaleHomeLearnTeaser = {
  title: string;
  desc: string;
  href: string;
};

export type LocaleHomeCopy = {
  langNavEnglish: string;
  langNavLocal: string;
  breadcrumbNavAria: string;
  hero: {
    h1: string;
    sub: string;
    body: string;
    ctaLaunch: string;
    ctaLine: string;
    lineAria: string;
  };
  partners: { badge: string; title: string };
  why: {
    badge: string;
    title: string;
    subtitle: string;
    cards: readonly LocaleHomeWhyCard[];
  };
  features: {
    badge: string;
    title: string;
    cards: readonly [
      LocaleHomeFeatureCard,
      LocaleHomeFeatureCard,
      LocaleHomeFeatureCard,
    ];
    ctaCard: { title: string; bodyLine: string; cta: string };
  };
  howItWorks: {
    title: string;
    intro: string;
    steps: readonly [
      LocaleHomeHowStep,
      LocaleHomeHowStep,
      LocaleHomeHowStep,
    ];
  };
  download: {
    badge: string;
    title: string;
    desc: string;
    bullets: readonly string[];
    scanLabel: string;
    qrCaptionBefore: string;
    qrCaptionLink: string;
    qrCaptionAfter: string;
    telegram: string;
    line: string;
    web: string;
    qrAria: string;
    qrAlt: string;
  };
  learn: {
    badge: string;
    title: string;
    readMore: string;
    teasers: readonly [
      LocaleHomeLearnTeaser,
      LocaleHomeLearnTeaser,
      LocaleHomeLearnTeaser,
    ];
  };
  community: { badge: string; title: string; desc: string };
  faq: { badge: string; title: string; subtitleEnHint: string };
  finalCta: { title: string; sub: string; cta: string };
};
