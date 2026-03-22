"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionBadge from "@/components/section-badge";
import AnimateOnScroll from "@/components/animate-on-scroll";
import Marquee from "@/components/marquee";
import FAQAccordion from "@/components/faq-accordion";
import GoGoCashLogo from "@/components/gogocash-logo";
import {
  Sparkles,
  Star,
  Gift,
  ArrowUpRight,
  CheckCircle2,
  ShoppingCart,
  TrendingUp,
  Coins,
  Users,
  CreditCard,
  Headphones,
  Target,
  Smartphone,
} from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "How does GoGoCash cashback work?",
    answer:
      "Simply browse our merchant partners, click through GoGoCash to shop, and earn cashback automatically. Your cashback is tracked in real time and deposited to your GoGoCash wallet once confirmed.",
  },
  {
    question: "Which stores are available?",
    answer:
      "We partner with 70+ top stores across Southeast Asia including Lazada, Shopee, Agoda, Samsung, Trip.com, and many more. New merchants are added regularly.",
  },
  {
    question: "How long does it take to receive cashback?",
    answer:
      "Cashback is tracked instantly after your purchase. It typically takes 1-7 days for the merchant to confirm the transaction, after which your cashback becomes available to withdraw.",
  },
  {
    question: "Is GoGoCash free to use?",
    answer:
      "Yes, GoGoCash is completely free! There are no fees or subscriptions. You simply shop at your favorite stores through our platform and earn cashback on every purchase.",
  },
  {
    question: "How do I withdraw my cashback?",
    answer:
      "You can withdraw your cashback to your bank account or e-wallet once you reach the minimum threshold. Withdrawals are processed within 1-3 business days.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ==================== HERO SECTION ==================== */}
        <section
          id="home"
          className="relative min-h-screen overflow-hidden hero-gradient"
        >
          <div className="relative z-10 mx-auto max-w-site px-6 lg:px-8 pt-32 pb-24">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-8">
              {/* Left: Headline + CTA */}
              <div className="flex-1 text-center lg:text-left lg:pt-12">
                <h1 className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl lg:text-6xl">
                  Save Cash
                  <br />
                  on Every Spend
                </h1>
                <p className="mt-2 text-xl text-gray-800 lg:text-2xl">
                  <span className="inline-flex items-center gap-2">
                    <span className="hidden sm:inline h-px w-8 bg-primary/40" />
                    With GoGoCash
                  </span>
                </p>

                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-50 px-6 py-3 text-sm font-semibold text-gray-800 transition-all hover:bg-gray-100 hover:shadow-md"
                >
                  Start Saving
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </div>

              {/* Center: Phone Mockup */}
              <div className="flex-shrink-0 relative">
                <div className="relative mx-auto w-64 md:w-72 lg:w-80">
                  {/* Phone frame */}
                  <div className="rounded-[40px] border-[6px] border-gray-800 bg-white shadow-2xl overflow-hidden">
                    {/* Status bar */}
                    <div className="flex items-center justify-between bg-primary px-4 py-2">
                      <span className="text-[10px] font-medium text-white">9:41</span>
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-white/60" />
                        <div className="h-2 w-2 rounded-full bg-white/60" />
                        <div className="h-2 w-2 rounded-full bg-white/60" />
                      </div>
                    </div>

                    {/* App header */}
                    <div className="bg-primary px-4 py-3">
                      <div className="flex items-center justify-between">
                        <GoGoCashLogo className="h-5" variant="white" />
                        <div className="flex gap-2">
                          <div className="h-6 w-6 rounded-full bg-white/20" />
                          <div className="h-6 w-6 rounded-full bg-white/20" />
                        </div>
                      </div>
                    </div>

                    {/* Banner area */}
                    <div className="bg-gradient-to-b from-primary to-primary-dark p-4">
                      <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                        <p className="text-center text-xs font-bold text-white">
                          BOOST YOUR WALLET
                        </p>
                        <p className="mt-1 text-center text-[10px] text-white/80">
                          IN TWO STEPS
                        </p>
                      </div>
                    </div>

                    {/* Extra Cash Back Stores */}
                    <div className="bg-white px-4 py-3">
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-semibold text-gray-800">
                          Extra Cash Back Stores
                        </span>
                        <span className="text-xs">🔥</span>
                      </div>

                      {/* Store cards */}
                      <div className="mt-2 flex gap-2">
                        <div className="flex-1 rounded-xl border border-gray-100 p-2">
                          <div className="flex items-center gap-1">
                            <div className="h-5 w-5 rounded bg-orange-500 flex items-center justify-center">
                              <ShoppingCart className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-[9px] font-medium text-orange-500">Extra Cash Back</span>
                          </div>
                          <p className="mt-1 text-[10px] font-semibold text-gray-800">Shopee</p>
                          <p className="text-[9px] text-gray-400">Cashback up to</p>
                          <p className="text-sm font-bold text-primary">13%</p>
                        </div>
                        <div className="flex-1 rounded-xl border border-gray-100 p-2">
                          <div className="flex items-center gap-1">
                            <div className="h-5 w-5 rounded bg-orange-500 flex items-center justify-center">
                              <ShoppingCart className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-[9px] font-medium text-orange-500">Extra Cash Back</span>
                          </div>
                          <p className="mt-1 text-[10px] font-semibold text-gray-800">Banana</p>
                          <p className="text-[9px] text-gray-400">Cashback up to</p>
                          <p className="text-sm font-bold text-primary">13%</p>
                        </div>
                      </div>

                      {/* Trending Stores */}
                      <div className="mt-3 rounded-xl bg-gray-50 p-2 text-center">
                        <span className="text-[10px] font-semibold text-gray-600">
                          Trending Stores
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Description + Stats */}
              <div className="flex-1 flex flex-col items-center lg:items-start gap-8 lg:pt-12">
                {/* Plus icon */}
                <div className="text-primary/30">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4v24M4 16h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                <p className="text-sm leading-relaxed text-gray-600 text-center lg:text-left max-w-xs">
                  Shop smarter with GoGoCash — leading SEA shopping-to-earn
                  platform offering up to 30% cashback, personalized quests,
                  and exclusive rewards
                </p>

                {/* Stats */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    <span className="text-lg">🇬🇧</span>
                    <span className="text-lg">🇹🇭</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-800">150+</p>
                    <p className="text-xs text-gray-500">
                      Trusted globally by 6M+
                      <br />
                      users in 150+ countries!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== MARQUEE ==================== */}
        <Marquee text="WHY GOGOCASH?" />

        {/* ==================== MERCHANT LOGOS ==================== */}
        <section className="py-8">
          <div className="mx-auto max-w-site px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="rounded-3xl bg-mint px-8 py-10 text-center">
                <p className="text-lg font-medium text-gray-500">
                  Shop at your favorite stores and earn cashback
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-12">
                  {["Lazada", "Samsung", "Trip.com", "Agoda", "Shopee"].map(
                    (name) => (
                      <span
                        key={name}
                        className="text-xl font-bold text-gray-400 transition-colors hover:text-gray-600"
                      >
                        {name}
                      </span>
                    )
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ==================== VALUE PROPOSITION ==================== */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-site px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center">
                <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-primary md:text-5xl lg:text-5xl">
                  Your shopping already earns you money — GoGoCash makes it
                  effortless
                </h2>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="mt-8 flex flex-col items-center gap-2 text-center">
                <p className="text-base text-gray-600">
                  Cashback from 70+ stores, deposited straight to your wallet
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ==================== KEY FEATURES ==================== */}
        <section id="features" className="py-16 md:py-24">
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

            {/* 2x2 Feature Grid */}
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-6">
              {/* Instant Cashback */}
              <AnimateOnScroll delay={100}>
                <div className="relative overflow-hidden rounded-3xl bg-mint p-8 lg:p-10 min-h-[280px]">
                  <Coins className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-gray-800">
                    Instant Cashback
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
                    Get real cashback on every purchase — no points, no
                    waiting. Money goes straight back to your wallet.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* 24/7 Support */}
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

              {/* Personalized Quests */}
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

              {/* Get Started CTA */}
              <AnimateOnScroll delay={400}>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 lg:p-10 min-h-[280px] flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white">
                    Ready to start saving?
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    Join millions of happy shoppers
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-all hover:shadow-lg"
                  >
                    Get Started Free
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ==================== MORE FEATURES ==================== */}
        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-site px-6 lg:px-8">
            <AnimateOnScroll>
              <p className="text-center text-sm font-medium text-gray-500">
                More ways GoGoCash works for you
              </p>
            </AnimateOnScroll>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: CreditCard,
                  title: "Cashback Lending",
                  desc: "Turn cashback into instant credit for smarter spending",
                },
                {
                  icon: TrendingUp,
                  title: "Saving Plus",
                  desc: "Turn cashback into investments that grow safely",
                },
                {
                  icon: Coins,
                  title: "Stable Coin Cashback",
                  desc: "Earn cashback in stablecoin — secure, fast, and borderless",
                },
                {
                  icon: Target,
                  title: "Behavior Analysis",
                  desc: "Smart insights that tailor rewards to your spending habits",
                },
                {
                  icon: Users,
                  title: "Affiliate Center",
                  desc: "Partner with GoGoCash and earn more from your community",
                },
              ].map((feature, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:shadow-md">
                    <feature.icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 text-base font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {feature.desc}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== BENEFITS ==================== */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto max-w-site px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="flex flex-col items-center text-center">
                <SectionBadge
                  icon={<Star className="h-4 w-4" />}
                  label="Benefits"
                />
                <h2 className="mt-6 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
                  Real Benefits, Real Savings
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="mt-16 flex flex-col gap-6">
              {/* Benefit 1: Instant Rewards */}
              <AnimateOnScroll>
                <div className="flex flex-col gap-6 rounded-3xl bg-mint p-8 md:flex-row md:items-center md:gap-12 lg:p-12">
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <Gift className="h-10 w-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-primary">
                      Instant Rewards
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-gray-800 md:text-3xl">
                      Earn Instantly, Shop Smart
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Get up to 30% instant cashback every time you shop — no
                      waiting, no points, just real savings
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">
                          Up to 30% cashback
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">
                          70+ top merchant partners
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Benefit 2: Saving Plus */}
              <AnimateOnScroll>
                <div className="flex flex-col gap-6 rounded-3xl bg-cream p-8 md:flex-row md:items-center md:gap-12 lg:p-12">
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <TrendingUp className="h-10 w-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-primary">
                      Saving Plus
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-gray-800 md:text-3xl">
                      Grow Your Savings Effortlessly
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Turn your cashback into low-risk investments and grow
                      your capital while you shop
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">
                          Auto-invest cashback
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">
                          Low-risk growth options
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Benefit 3: Smart Personalization */}
              <AnimateOnScroll>
                <div className="flex flex-col gap-6 rounded-3xl bg-mint p-8 md:flex-row md:items-center md:gap-12 lg:p-12">
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-primary">
                      Smart Personalization
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-gray-800 md:text-3xl">
                      Personalized Shopping Experience
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Enjoy tailored quests and offers designed around your
                      spending habits and lifestyle
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">
                          AI-driven insights
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">
                          Quests & seasonal rewards
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ==================== HOW IT WORKS ==================== */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-site px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="rounded-3xl bg-cream p-8 md:p-12 lg:p-16">
                <div className="flex flex-col items-center text-center">
                  <SectionBadge
                    icon={<Gift className="h-4 w-4" />}
                    label="How it Works"
                  />
                  <h2 className="mt-6 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
                    How GoGoCash Works
                  </h2>
                </div>

                {/* Steps */}
                <div className="mt-16 grid gap-8 md:grid-cols-3">
                  {[
                    {
                      step: 1,
                      icon: "🔍",
                      title: "Find Your Favorite Stores",
                      desc: "Browse top e-commerce brands and discover exclusive cashback deals",
                    },
                    {
                      step: 2,
                      icon: "🛒",
                      title: "Shop as Usual",
                      desc: "Make your purchases just like you always do — no extra steps needed",
                    },
                    {
                      step: 3,
                      icon: "💰",
                      title: "Relax and Earn",
                      desc: "Sit back while we track your cashback automatically",
                    },
                  ].map((item, i) => (
                    <AnimateOnScroll key={i} delay={i * 200}>
                      <div className="flex flex-col items-center text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                          {item.step}
                        </div>
                        <span className="mt-3 text-2xl">{item.icon}</span>
                        <h3 className="mt-3 text-lg font-bold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500 max-w-xs">
                          {item.desc}
                        </p>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ==================== FAQ ==================== */}
        <section className="py-16 md:py-24">
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

        {/* ==================== FINAL CTA ==================== */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-site px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="rounded-3xl bg-gradient-to-br from-mint via-white to-cream p-12 md:p-16 text-center">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
                  Ready to save on every purchase?
                </h2>
                <p className="mt-4 text-base text-gray-500">
                  Join 6M+ happy shoppers earning cashback the easy way
                </p>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl hover:scale-105"
                >
                  Get Started Free
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
