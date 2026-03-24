"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionBadge from "@/components/section-badge";
import AnimateOnScroll from "@/components/animate-on-scroll";
import FAQAccordion from "@/components/faq-accordion";
import MerchantOffersStrip from "@/components/landing/merchant-offers-strip";
import type { PartnerBrand } from "@/lib/involve-asia";
import WhyChooseSection from "@/components/landing/why-choose-section";
import AppDownloadSection from "@/components/landing/app-download-section";
import CommunitySection from "@/components/landing/community-section";
import ContentTeaser from "@/components/landing/content-teaser";
import LaunchAppLink from "@/components/launch-app-link";
import { LINE_OFFICIAL_ACCOUNT_HREF } from "@/components/social-data";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { SITE_FACTS, heroSeoSupportingLine } from "@/lib/site-facts";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Coins,
  Headphones,
  Target,
} from "@/components/icons";

const HOW_IT_WORKS_STEPS = [
  {
    summary: "Browse & choose",
    title: "Browse and pick your store",
    desc: `Explore ${SITE_FACTS.partnerCountLabel} e-commerce and travel partners across ${SITE_FACTS.regionLabel}. Compare cashback rates and open the store from GoGoCash so your visit is tracked.`,
    bullets: [
      "Lazada, Shopee, Agoda, AliExpress, Trip.com, and more",
      "Transparent rates before you shop",
    ],
  },
  {
    summary: "Shop normally",
    title: "Shop the way you already do",
    desc: "Add items to cart and check out on the merchant site or app as usual. No coupons to paste and no extra steps at payment.",
    bullets: [
      "Use your normal account and payment methods",
      "GoGoCash follows the purchase in the background",
    ],
  },
  {
    summary: "Earn cashback",
    title: "Cashback after the merchant confirms",
    desc: "When the store confirms your order, cashback is credited to your GoGoCash wallet. Track everything in the app, then withdraw when you're ready.",
    bullets: [
      "Typical confirmation within a few days",
      "Withdraw to bank or e-wallet when you hit the minimum",
    ],
  },
] as const;

type HomePageProps = {
  initialPartners: PartnerBrand[];
};

export default function HomePage({ initialPartners }: HomePageProps) {
  return (
    <>
      <Header />
      <main role="main">
        <section
          id="home"
          className="relative min-h-screen scroll-mt-28 overflow-hidden hero-gradient"
        >
          <div className="relative z-10 mx-auto flex min-h-screen max-w-site flex-col px-6 pb-16 pt-28 md:pb-24 md:pt-32 lg:px-8">
            {/* Centered dashboard-style hero (single column, max-width copy, CTAs below) */}
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <div className="mx-auto w-full max-w-3xl">
                <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl lg:leading-[1.08]">
                  Save Cash on Every Spend
                </h1>
                <p className="mt-4 text-lg font-medium text-gray-800 md:text-xl">
                  With GoGoCash
                </p>
                <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-gray-600 md:text-lg">
                  {heroSeoSupportingLine()} Complete personalized quests and
                  unlock exclusive rewards in the app.
                </p>
              </div>

              <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
                <LaunchAppLink className="min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl hover:scale-105 motion-reduce:transition-colors motion-reduce:hover:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto sm:min-w-[200px] sm:px-6 md:px-8 md:py-3.5">
                  Launch App
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </LaunchAppLink>
                <a
                  href={LINE_OFFICIAL_ACCOUNT_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact us on LINE"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-surface-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto sm:min-w-[200px]"
                >
                  Contact us
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <MerchantOffersStrip
          partners={initialPartners}
          loadMoreLabel="Load more brands"
        />

        <WhyChooseSection />

        <section id="features" className="scroll-mt-28 py-16 md:py-24">
          <div className="mx-auto max-w-site px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="flex flex-col items-center text-center">
                <SectionBadge
                  icon={<Sparkles className="h-4 w-4" />}
                  label="Key Features"
                />
                <h2 className="mt-6 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
                  What Makes GoGoCash Special
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-6">
              <AnimateOnScroll delay={100}>
                <div className="relative overflow-hidden rounded-3xl bg-mint p-8 lg:p-10 min-h-[280px]">
                  <Coins className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-gray-800">
                    Instant Cashback
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
                    Get real cashback on every purchase — no points, no
                    complicated tiers. Once the merchant approves your order,
                    cashback is credited to your wallet instantly.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="relative overflow-hidden rounded-3xl bg-cream p-8 lg:p-10 min-h-[280px]">
                  <Headphones className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-gray-800">
                    24/7 Customer Support
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
                    Got questions? Our support team is always here to help,
                    day or night, via chat or email.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={300}>
                <div className="relative overflow-hidden rounded-3xl bg-cream p-8 lg:p-10 min-h-[280px]">
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-gray-800">
                    Personalized Quests
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
                    Complete fun shopping challenges tailored to your habits
                    and unlock bonus rewards and exclusive deals.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={400}>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 lg:p-10 min-h-[280px] flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white">
                    Ready to start saving?
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    Join millions of happy shoppers
                  </p>
                  <LaunchAppLink className="mt-4 w-fit min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-all hover:shadow-lg">
                    Get Started Free
                    <ArrowUpRight className="h-4 w-4" />
                  </LaunchAppLink>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="scroll-mt-28 border-t border-gray-200/80 bg-gray-50 py-16 md:py-24"
        >
          <div className="mx-auto max-w-site px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                  Get Started with GoGoCash
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                  Wondering how cashback works in Southeast Asia? Here&apos;s how
                  GoGoCash makes it effortless:
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-0">
                {HOW_IT_WORKS_STEPS.map((step, i) => (
                  <div
                    key={step.summary}
                    className={`flex w-full items-center justify-center sm:w-auto ${
                      i > 0
                        ? "border-t border-gray-200 pt-3 sm:border-l sm:border-t-0 sm:pt-0"
                        : ""
                    }`}
                  >
                    <span className="px-4 text-center text-sm font-semibold text-gray-900 sm:px-8 md:text-base">
                      {step.summary}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={160}>
              <div className="mx-auto mt-12 max-w-4xl">
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-6 py-8 shadow-sm md:px-10 md:py-12 lg:px-14 lg:py-14">
                  <div className="space-y-0">
                    {HOW_IT_WORKS_STEPS.map((block, i) => (
                      <div
                        key={block.title}
                        className={`flex gap-4 py-8 md:gap-10 md:py-10 ${
                          i < HOW_IT_WORKS_STEPS.length - 1
                            ? "border-b border-gray-100"
                            : ""
                        }`}
                      >
                        <span
                          className="shrink-0 pt-0.5 text-3xl font-bold tabular-nums leading-none text-primary md:w-12 md:pt-1 md:text-right md:text-4xl"
                          aria-hidden
                        >
                          {i + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-bold text-gray-900 md:text-xl lg:text-2xl">
                            {block.title}
                          </h3>
                          <p className="mt-3 text-base leading-relaxed text-gray-600">
                            {block.desc}
                          </p>
                          <ul className="mt-4 space-y-2">
                            {block.bullets.map((line) => (
                              <li
                                key={line}
                                className="flex gap-2 text-sm text-gray-600 md:text-base"
                              >
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <AppDownloadSection />

        <ContentTeaser />

        <CommunitySection />

        <section id="faq" className="scroll-mt-28 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="flex flex-col items-center text-center">
                <SectionBadge label="FAQ" />
                <h2 className="mt-6 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
                  Frequently Asked Questions
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="mt-12">
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-site px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="rounded-3xl bg-gradient-to-br from-mint via-white to-cream p-12 md:p-16 text-center">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
                  Ready to save on every purchase?
                </h2>
                <p className="mt-4 text-base text-gray-500">
                  Join {SITE_FACTS.shopperCommunityLabel} happy shoppers earning
                  cashback the easy way
                </p>
                <LaunchAppLink className="mt-8 min-h-11 items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl hover:scale-105">
                  Launch App
                  <ArrowUpRight className="h-4 w-4" />
                </LaunchAppLink>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
