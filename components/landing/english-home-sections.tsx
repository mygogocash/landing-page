import Image from "next/image";
import AnimateOnScroll from "@/components/animate-on-scroll";
import LaunchAppLink from "@/components/launch-app-link";
import SectionBadge from "@/components/section-badge";
import { SITE_FACTS, heroEarnSupportingParagraph } from "@/lib/site-facts";
import {
  ArrowUpRight,
  Coins,
  Headphones,
  Sparkles,
  Target,
} from "@/components/icons";
import { LINE_OFFICIAL_ACCOUNT_HREF } from "@/components/social-data";
import {
  twCtaOutlineMotion,
  twCtaPrimaryMotion,
  twFocusRingPrimary,
  twPressSm,
  twTransitionButton,
} from "@/lib/motion-styles";

export function EnglishHomeHeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col scroll-mt-28 overflow-hidden hero-gradient"
    >
      <div className="relative z-10 mx-auto flex min-h-0 w-full min-w-0 max-w-site flex-1 flex-col px-4 pb-0 pt-28 sm:px-6 md:pt-32 lg:px-8">
        <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col items-center justify-center text-center">
          <div className="flex w-full max-w-xl flex-col items-center xl:max-w-3xl">
            <div className="mx-auto w-full max-w-3xl">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl lg:leading-[1.08]">
                Earn Cashback on Every Spend
              </h1>
              <p className="mt-4 text-lg font-medium text-gray-800 md:text-xl">
                With GoGoCash — on brands you already shop
              </p>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-gray-600 md:text-lg">
                {heroEarnSupportingParagraph()}
              </p>
            </div>

            <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
              <LaunchAppLink
                className={`group min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary-dark hover:shadow-xl sm:w-auto sm:min-w-[200px] sm:px-6 md:px-8 md:py-3.5 ${twCtaPrimaryMotion}`}
              >
                Start earning
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-button ease-standard group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </LaunchAppLink>
              <a
                href={LINE_OFFICIAL_ACCOUNT_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on LINE"
                className={`group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-surface-green sm:w-auto sm:min-w-[200px] ${twCtaOutlineMotion}`}
              >
                Contact us
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-button ease-standard group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </a>
            </div>
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

export function EnglishFeatureHighlightsSection() {
  return (
    <section id="features" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto min-w-0 max-w-site px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="flex flex-col items-center text-center">
            <SectionBadge
              icon={<Sparkles className="h-4 w-4" />}
              label="Why it adds up"
            />
            <h2 className="mt-6 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
              Built to turn everyday spends into wallet balance
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-6">
          <AnimateOnScroll delay={100}>
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl bg-mint p-8 lg:p-10">
              <Coins className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold text-gray-800">
                Cashback hits your wallet
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
                After the store confirms your order, cashback shows up in your
                GoGoCash balance — no confusing points math. Track it in the
                app anytime.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl bg-cream p-8 lg:p-10">
              <Headphones className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold text-gray-800">
                24/7 Customer Support
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
                Tracking or payout questions? We&apos;re here day or night via
                chat or email.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl bg-cream p-8 lg:p-10">
              <Target className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold text-gray-800">
                Personalized Quests
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
                Challenges matched to how you shop — unlock bonus cashback and
                limited-time boosts.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <div className="relative flex min-h-[280px] flex-col justify-end rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-white">
                Ready to start earning?
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Join {SITE_FACTS.shopperCommunityLabel} shoppers stacking real
                cashback
              </p>
              <LaunchAppLink
                className={`group mt-4 w-fit min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:shadow-lg ${twTransitionButton} ${twPressSm} ${twFocusRingPrimary}`}
              >
                Start earning free
                <ArrowUpRight className="h-4 w-4 transition-transform duration-button ease-standard group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </LaunchAppLink>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
