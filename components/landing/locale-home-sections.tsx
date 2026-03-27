import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/animate-on-scroll";
import LaunchAppLink from "@/components/launch-app-link";
import SectionBadge from "@/components/section-badge";
import SocialIcon from "@/components/social-icon";
import {
  LINE_MINI_APP_HREF,
  SOCIAL_ICONS,
  WEB_APP_HREF,
} from "@/components/social-data";
import type { LocaleHomeCopy } from "@/lib/locale-home-copy";
import {
  ArrowUpRight,
  Coins,
  Headphones,
  Shield,
  Sparkles,
  Target,
} from "@/components/icons";
import {
  twCtaMutedOutlineMotion,
  twCtaOutlineMotion,
  twCtaPrimaryMotion,
  twDurButton,
  twEaseStandard,
  twFocusRingPrimary,
  twNavTextMotion,
  twPressSm,
  twTransitionButton,
} from "@/lib/motion-styles";

const WHY_ICONS = [Coins, Shield, Sparkles, Headphones] as const;
const WHY_BG = ["bg-mint", "bg-cream", "bg-cream", "bg-mint"] as const;

export function LocaleHomeHeroSection({
  copy,
}: {
  copy: LocaleHomeCopy;
}) {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col scroll-mt-28 overflow-hidden hero-gradient"
    >
      <div className="relative z-10 mx-auto flex min-h-0 w-full min-w-0 max-w-site flex-1 flex-col px-4 pb-0 pt-28 sm:px-6 md:pt-32 lg:px-8">
        <nav
          aria-label={copy.breadcrumbNavAria}
          className="mb-8 flex shrink-0 flex-wrap justify-center gap-4 text-sm md:justify-start"
        >
          <Link
            href="/"
            lang="en"
            className={`font-medium text-primary hover:text-primary-dark ${twNavTextMotion}`}
          >
            {copy.langNavEnglish}
          </Link>
          <span className="text-gray-300" aria-hidden>
            |
          </span>
          <span className="font-medium text-gray-700">{copy.langNavLocal}</span>
        </nav>

        <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col items-center justify-center text-center">
          <div className="mx-auto w-full max-w-3xl">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl lg:leading-[1.08]">
              {copy.hero.h1}
            </h1>
            <p className="mt-4 text-lg font-medium text-gray-800 md:text-xl">
              {copy.hero.sub}
            </p>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-gray-600 md:text-lg">
              {copy.hero.body}
            </p>
          </div>

          <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <LaunchAppLink
              className={`group min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-primary-dark sm:w-auto sm:min-w-[200px] ${twCtaPrimaryMotion}`}
            >
              {copy.hero.ctaLaunch}
              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-button ease-standard group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </LaunchAppLink>
            <a
              href="https://line.me/R/ti/p/@gogocash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={copy.hero.lineAria}
              className={`group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-900 shadow-sm hover:border-gray-400 hover:bg-gray-50 sm:w-auto sm:min-w-[200px] ${twCtaMutedOutlineMotion}`}
            >
              {copy.hero.ctaLine}
              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-button ease-standard group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </a>
          </div>
        </div>

        <div className="w-full min-w-0 shrink-0 leading-none">
          <Image
            src="/images/hero-dashboard-phones.svg"
            alt="GoGoCash app preview on two phones"
            width={800}
            height={600}
            className="mx-auto block h-auto w-full max-h-[min(52vh,34rem)] max-w-full object-contain object-bottom drop-shadow-[0_24px_48px_-12px_rgba(16,185,129,0.15)] sm:max-h-[min(56vh,36rem)] lg:max-h-[min(60vh,38rem)]"
            sizes="(max-width: 1200px) calc(100vw - 3rem), 1120px"
          />
        </div>
      </div>
    </section>
  );
}

export function LocaleWhySection({
  copy,
}: {
  copy: LocaleHomeCopy;
}) {
  return (
    <section id="why-gogocash" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto min-w-0 max-w-site px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="flex flex-col items-center text-center">
            <SectionBadge
              icon={<Sparkles className="h-4 w-4" />}
              label={copy.why.badge}
            />
            <h2 className="mt-6 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
              {copy.why.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base text-gray-500">
              {copy.why.subtitle}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {copy.why.cards.map((card, index) => {
            const Icon = WHY_ICONS[index];
            return (
              <AnimateOnScroll key={card.title} delay={index * 100}>
                <div
                  className={`rounded-3xl p-8 lg:p-10 ${WHY_BG[index]} min-h-[220px]`}
                >
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-xl font-bold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {card.body}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function LocaleFeatureGridSection({
  copy,
}: {
  copy: LocaleHomeCopy;
}) {
  return (
    <section id="features" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto min-w-0 max-w-site px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="flex flex-col items-center text-center">
            <SectionBadge
              icon={<Sparkles className="h-4 w-4" />}
              label={copy.features.badge}
            />
            <h2 className="mt-6 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
              {copy.features.title}
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-6">
          <AnimateOnScroll delay={100}>
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl bg-mint p-8 lg:p-10">
              <Coins className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold text-gray-800">
                {copy.features.cards[0].title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
                {copy.features.cards[0].body}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl bg-cream p-8 lg:p-10">
              <Headphones className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold text-gray-800">
                {copy.features.cards[1].title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
                {copy.features.cards[1].body}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl bg-cream p-8 lg:p-10">
              <Target className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold text-gray-800">
                {copy.features.cards[2].title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
                {copy.features.cards[2].body}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <div className="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-white">
                {copy.features.ctaCard.title}
              </h3>
              <p className="mt-2 text-sm text-white/80">
                {copy.features.ctaCard.bodyLine}
              </p>
              <LaunchAppLink
                className={`group mt-4 w-fit min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:shadow-lg ${twTransitionButton} ${twPressSm} ${twFocusRingPrimary}`}
              >
                {copy.features.ctaCard.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-button ease-standard group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </LaunchAppLink>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

export function LocaleDownloadSection({
  copy,
}: {
  copy: LocaleHomeCopy;
}) {
  return (
    <section
      id="download-app"
      className="scroll-mt-28 bg-cream py-16 md:py-24"
    >
      <div className="mx-auto min-w-0 max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimateOnScroll>
            <div>
              <SectionBadge label={copy.download.badge} />
              <h2 className="mt-6 text-3xl font-bold text-gray-800 md:text-4xl">
                {copy.download.title}
              </h2>
              <p className="mt-4 text-base text-gray-500">
                {copy.download.desc}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                {copy.download.bullets.map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://t.me/GoGoCashAppBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#229ED9] px-6 py-3 text-sm font-semibold text-white hover:opacity-95 ${twTransitionButton} ${twPressSm} ${twFocusRingPrimary}`}
                >
                  {copy.download.telegram}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-button ease-standard group-hover:translate-x-0.5 motion-reduce:transition-none" />
                </a>
                <a
                  href={LINE_MINI_APP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#06C755] px-6 py-3 text-sm font-semibold text-white hover:opacity-95 ${twTransitionButton} ${twPressSm} ${twFocusRingPrimary}`}
                >
                  {copy.download.line}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-button ease-standard group-hover:translate-x-0.5 motion-reduce:transition-none" />
                </a>
                <a
                  href={WEB_APP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-primary bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-surface-green ${twCtaOutlineMotion}`}
                >
                  {copy.download.web}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-button ease-standard group-hover:translate-x-0.5 motion-reduce:transition-none" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="mx-auto flex max-w-sm flex-col items-center rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm lg:mx-0 lg:max-w-none">
              <p className="text-sm font-medium text-gray-500">
                {copy.download.scanLabel}
              </p>
              <a
                href={LINE_MINI_APP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 block rounded-2xl border border-gray-200 bg-white p-2 shadow-inner hover:border-[#06C755]/40 ${twDurButton} ${twEaseStandard} transition-[border-color,box-shadow] motion-reduce:duration-micro`}
                aria-label={copy.download.qrAria}
              >
                <Image
                  src="/images/qr-gogocash-line-miniapp.webp"
                  alt={copy.download.qrAlt}
                  width={224}
                  height={224}
                  className="h-56 w-56 rounded-xl object-contain md:h-64 md:w-64"
                />
              </a>
              <p className="mt-4 text-xs text-gray-500">
                {copy.download.qrCaptionBefore}{" "}
                <a
                  href={LINE_MINI_APP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#06C755] underline-offset-2 hover:underline"
                >
                  {copy.download.qrCaptionLink}
                </a>
                {copy.download.qrCaptionAfter}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

export function LocaleLearnSection({
  copy,
  learnArticleLang,
}: {
  copy: LocaleHomeCopy;
  learnArticleLang: string;
}) {
  return (
    <section
      id="learn"
      className="scroll-mt-28 border-t border-gray-100 bg-white py-16 md:py-20"
    >
      <div className="mx-auto min-w-0 max-w-site px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="flex flex-col items-center text-center">
            <SectionBadge label={copy.learn.badge} />
            <h2 className="mt-6 text-2xl font-bold text-gray-800 md:text-3xl">
              {copy.learn.title}
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {copy.learn.teasers.map((item, index) => (
            <AnimateOnScroll key={item.href} delay={index * 100}>
              <a
                href={item.href}
                lang={learnArticleLang}
                className={`group flex h-full flex-col rounded-2xl border border-gray-100 bg-cream/50 p-6 hover:border-primary/20 hover:shadow-md ${twTransitionButton} ${twPressSm}`}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-500">
                  {item.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {copy.learn.readMore}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-button ease-standard motion-reduce:transition-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocaleCommunitySection({
  copy,
}: {
  copy: LocaleHomeCopy;
}) {
  return (
    <section id="community" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto min-w-0 max-w-site px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="flex flex-col items-center text-center">
            <SectionBadge label={copy.community.badge} />
            <h2 className="mt-6 text-3xl font-bold text-gray-800 md:text-4xl">
              {copy.community.title}
            </h2>
            <p className="mt-4 max-w-xl text-base text-gray-500">
              {copy.community.desc}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {SOCIAL_ICONS.map((social, index) => (
            <AnimateOnScroll key={social.label} delay={index * 60}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:border-primary/30 hover:text-primary ${twTransitionButton} ${twPressSm} ${twFocusRingPrimary}`}
              >
                <SocialIcon name={social.icon} />
                <span className="hidden sm:inline">{social.label}</span>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
