"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobile-nav";
import { TrendingDown, ShoppingBag, Clock, Store, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon, TelegramIcon } from "@/components/brand-icons";
import AnimateOnScroll from "@/components/animate-on-scroll";
import StoreLogo from "@/components/store-logo";
import { STORES } from "@/data/stores";
import FAQAccordion from "@/components/faq-accordion";
import { ErrorBoundary } from "@/components/error-boundary";

export default function HomePage() {
  return (
    <ErrorBoundary>
      <Header />
      <main id="main-content" className="pb-16 pt-16 lg:pb-0 lg:pt-20" role="main">
        {/* Hero Section */}
        <section
          id="home"
          className="relative overflow-hidden bg-[#f3fbf5] py-12 md:py-24 lg:py-scale-20"
          aria-label="ส่วนหลัก - GoGoCash"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col items-center gap-8 sm:gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-12">
              {/* Left Column */}
              <AnimateOnScroll animation="fadeInRight" delay={0}>
                <div className="w-full text-center lg:text-left">
                  <h1 className="text-[28px] font-bold leading-[36px] tracking-[-0.7px] text-[#006c4f] sm:text-[36px] sm:leading-[45px] sm:tracking-[-0.9px] lg:text-[72px] lg:leading-[72px] lg:tracking-[-1.8px]">
                    GoGoCash - ช้อปฉลาด รับเงินคืนทันที
                    <br />
                    <span className="text-[#006c4f]">อย่าปล่อยให้เงินหายไป</span>
                    <br />
                    <span className="text-[#006c4f]">เฉย ๆ</span>
                  </h1>
                  <AnimateOnScroll animation="fadeInUp" delay={200}>
                    <p className="mx-auto mt-4 max-w-[340px] text-base leading-6 text-[#3c4a43] sm:mt-6 sm:max-w-[384px] sm:text-lg sm:leading-[29.25px] lg:mx-0 lg:max-w-[512px] lg:text-xl lg:leading-[32.5px]">
                      รวมร้านค้ากว่า 220+ แห่ง เปลี่ยนทุกการจ่าย
                      <br />
                      ให้เป็นรายได้กลับคืนมาแบบง่ายที่สุด
                    </p>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fadeInUp" delay={400}>
                    <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                      <a
                        href="https://miniapp.line.me/2008237918-mpplkp5Q"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="เปิดใช้งาน GoGoCash ผ่าน Line Mini App - ช้อปฉลาด รับเงินคืนทันที"
                        className="btn btn-primary relative inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-bold text-white shadow-lg sm:w-auto sm:px-6 sm:py-4 sm:text-base lg:rounded-full lg:px-8 lg:py-4 lg:text-lg"
                        style={{ minHeight: "48px", minWidth: "48px" }}
                      >
                        <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" aria-hidden="true" />
                        <span>เปิด Line Mini App</span>
                      </a>
                      <a
                        href="https://lin.ee/7om5sAr"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="ติดต่อ GoGoCash ผ่าน Telegram"
                        className="btn btn-secondary inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-bold text-[#00503a] sm:w-auto sm:px-6 sm:py-4 sm:text-base lg:rounded-full lg:px-8 lg:py-4 lg:text-lg"
                        style={{ minHeight: "48px", minWidth: "48px" }}
                      >
                        <TelegramIcon className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                        <span>ติดต่อเรา</span>
                      </a>
                    </div>
                  </AnimateOnScroll>
                </div>
              </AnimateOnScroll>

              {/* Right Column: Phone Mockup */}
              <AnimateOnScroll animation="fadeInLeft" delay={300}>
                <div className="relative flex w-full justify-center lg:w-auto lg:justify-end">
                <div className="relative h-[280px] w-[280px] max-w-full sm:h-[320px] sm:w-[320px] lg:h-[600px] lg:w-[300px] xl:h-[700px] xl:w-[350px]">
                  <div className="absolute inset-0 rounded-[32px] border-4 border-[#dce5de] bg-white p-3 shadow-[0px_25px_25px_0px_rgba(0,0,0,0.15)] sm:rounded-[48px] sm:border-8 sm:p-4">
                    <div className="h-full w-full rounded-[28px] bg-gradient-to-br from-[#00cc99]/20 to-[#006c4f]/20 p-4 sm:rounded-[40px] sm:p-6">
                      <div className="mb-3 rounded-lg bg-accent/10 p-3 sm:mb-4 sm:rounded-xl sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent sm:h-12 sm:w-12">
                            <CheckCircle2 className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold text-on-surface-variant sm:text-xs">
                              CASH-BACK
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 sm:mt-4">
                        <button 
                          className="btn btn-primary w-full rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white sm:rounded-xl sm:px-6 sm:py-3 sm:text-sm"
                          aria-label="รับเงินคืนทันที"
                        >
                          Get Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Problem/Awareness Section */}
        <section 
          className="py-12 md:py-24 lg:py-scale-20"
          aria-labelledby="problem-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
            <AnimateOnScroll animation="fadeInUp" delay={0}>
              <div className="rounded-3xl bg-[#edf6ef] p-6 sm:rounded-[48px] sm:p-8 lg:p-24 xl:p-32">
                <AnimateOnScroll animation="fadeInDown" delay={100}>
                  <div className="mb-4 text-center sm:mb-6 lg:mb-8">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-[1.2px] text-[#006c4f] sm:text-xs">
                      The Reality Check
                    </span>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeInUp" delay={200}>
                  <h2 id="problem-heading" className="mx-auto max-w-[768px] text-center text-xl font-bold leading-[28px] text-[#161d1a] sm:text-2xl sm:leading-[32px] lg:text-[48px] lg:leading-[48px]">
                    เงินที่คุณเสียไปโดยไม่รู้ตัว
                  </h2>
                </AnimateOnScroll>
                <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:gap-6 lg:mt-16 lg:grid lg:grid-cols-3 lg:gap-8">
                {[
                  {
                    icon: TrendingDown,
                    title: "Invisible Loss",
                    description: [
                      "เงินคืน 5-10% ที่ควรจะได้ แต่หายไปเพราะ",
                      "คุณไม่ได้กดผ่าน GoGoCash",
                    ],
                  },
                  {
                    icon: ShoppingBag,
                    title: "Dead Money",
                    description: [
                      "การช้อปแบบเดิมคือการจ่ายออกฝ่ายเดียว",
                      "ไม่มีการหมุนเวียนเงินกลับเข้ากระเป๋า",
                    ],
                  },
                  {
                    icon: Clock,
                    title: "Expired Perks",
                    description: [
                      "โอกาสที่คุณจะได้รับโปรโมชั่นซ้อนโปรโมชั่น",
                      "กำลังลดลงเรื่อยๆ ในทุกวินาที",
                    ],
                  },
                ].map((item, index) => (
                  <AnimateOnScroll
                    key={index}
                    animation="fadeInUp"
                    delay={300 + index * 100}
                  >
                    <article
                      className="h-auto rounded-lg border-l-4 border-[#006c4f] bg-white p-6 shadow-[0px_8px_40px_0px_rgba(0,0,0,0.03)] transition-all duration-300 hover-lift hover:shadow-[0px_12px_48px_0px_rgba(0,0,0,0.08)] sm:p-8 lg:h-[224px] lg:rounded-[32px] lg:p-10"
                      aria-labelledby={`problem-${index}`}
                    >
                    <item.icon className="h-6 w-6 text-[#006c4f] sm:h-8 sm:w-8 lg:h-5 lg:w-5" aria-hidden="true" />
                    <h3 id={`problem-${index}`} className="mt-4 text-lg font-bold text-[#161d1a] sm:mt-6 sm:text-xl lg:mt-10 lg:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-5 text-[#3c4a43] sm:mt-4 sm:text-base sm:leading-6">
                      {item.description[0]}
                      <br />
                      {item.description[1]}
                    </p>
                  </article>
                  </AnimateOnScroll>
                ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section 
          className="bg-white py-12 md:py-24 lg:py-scale-20"
          aria-labelledby="value-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col items-center gap-6 sm:gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14">
              <AnimateOnScroll animation="fadeInRight" delay={0}>
                <div className="relative w-full">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl bg-surface-container shadow-lg transition-all duration-300 hover-scale sm:rounded-2xl lg:rounded-[2rem]">
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-accent/20 to-primary/20">
                      <ShoppingBag className="h-20 w-20 text-primary/30 sm:h-24 sm:w-24 lg:h-32 lg:w-32" />
                    </div>
                  </div>
                  <AnimateOnScroll animation="scaleIn" delay={300}>
                    <div className="absolute bottom-3 left-3 max-w-[280px] rounded-lg border border-outline-variant/15 bg-white/95 p-3 shadow-lg backdrop-blur-sm sm:bottom-4 sm:left-4 sm:max-w-xs sm:rounded-xl sm:p-4 lg:bottom-6 lg:left-6 lg:rounded-2xl lg:p-6">
                      <p className="text-xs font-bold text-primary sm:text-sm lg:text-base">
                        "เด้งจริง!"
                      </p>
                      <p className="mt-1.5 text-[10px] text-on-surface-variant sm:mt-2 sm:text-xs lg:text-sm">
                        ผู้ใช้งานกว่า 1 ล้านคนสัมผัสความรู้สึกนี้แล้ว
                      </p>
                      <div className="mt-2 flex items-center gap-2 sm:mt-3 lg:mt-4 lg:gap-3">
                        <div className="h-7 w-7 rounded-full bg-primary/20 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
                        <div>
                          <p className="text-[10px] font-semibold text-on-surface sm:text-xs">
                            คุณสมหญิง
                          </p>
                          <p className="text-[10px] text-on-surface-variant sm:text-xs">
                            นักช้อปตัวยง
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInLeft" delay={200}>
                <div className="w-full text-center lg:text-left">
                  <h2 id="value-heading" className="text-xl font-bold leading-[28px] text-on-background sm:text-2xl sm:leading-[32px] lg:text-headline">
                    วินาทีที่เงินคืนเด้ง…
                    <br />
                    คุณจะไม่อยากช้อปแบบเก่าอีกเลย
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant sm:mt-4 sm:text-base lg:mt-6 lg:text-lg">
                    ไม่ใช่แค่การประหยัด แต่มันคือความรู้สึกที่ได้รับชัยชนะทุกครั้งที่ใช้จ่าย
                    ปลดล็อกความคุ้มค่าที่คุณคู่ควรได้ตั้งแต่วันนี้
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Savings Comparison Section */}
        <section 
          className="bg-white py-12 md:py-24 lg:py-scale-20"
          aria-labelledby="savings-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
            <AnimateOnScroll animation="fadeInUp" delay={0}>
              <div className="mx-auto max-w-4xl text-center">
                <h2 id="savings-heading" className="text-xl font-bold leading-[28px] text-[#1a1c1c] sm:text-2xl sm:leading-[32px] lg:text-[48px] lg:leading-[48px]">
                  ถ้าคุณเคยช้อปแบบเดิมตลอดปีที่ผ่านมา...
                  <br />
                  คุณพลาดอะไรไปบ้าง?
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:mt-14 lg:grid-cols-2 xl:grid-cols-5">
              {[
                {
                  icon: Store,
                  title: ["พนักงานออฟฟิศ", "สายช้อปออนไลน์"],
                  oldWay: ["ช้อป", "Shopee/Lazada ทุก", "เดือน"],
                  newWay: ["คืนมา", "1,000+ บาท/ปี"],
                  benefit: ["เหมือนได้ของใช้จำเป็นในบ้านฟรีๆ ยก", "ตะกร้าทุกปี"],
                },
                {
                  icon: Store,
                  title: ["ฟรีแลนซ์ /", "Creator"],
                  oldWay: ["ซื้อ", "อุปกรณ์/Software"],
                  newWay: ["คืนมา", "1,500+ บาท/ปี"],
                  benefit: ["จ่ายค่าสมาชิก Software ได้ฟรี 1-2", "เดือนเลย"],
                },
                {
                  icon: Store,
                  title: ["สายเที่ยว", "ตัวยง"],
                  oldWay: ["จอง Agoda /", "Trip.com"],
                  newWay: ["คืนมา", "2,000+ บาท/ปี"],
                  benefit: ["ได้ค่าโรงแรมฟรีเพิ่มอีก 1-2 คืน ใน", "ทริปถัดไป"],
                },
                {
                  icon: Store,
                  title: ["แม่บ้าน /", "คนดูแลครอบครัว"],
                  oldWay: ["สั่งของ", "Supermarket"],
                  newWay: ["คืนมา", "1,800+ บาท/ปี"],
                  benefit: ["เป็นเงินออมฉุกเฉิน หรือของขวัญ", "พิเศษให้ลูกๆ"],
                },
                {
                  icon: Store,
                  title: ["นักศึกษา /", "Gen Z"],
                  oldWay: ["เติมเกม / ซื้อเครื่อง", "สำอาง"],
                  newWay: ["คืนมาเกือบ", "1,000 บาท/ปี"],
                  benefit: ["แลกบัตรคอนเสิร์ตหรือสกินในเกมได้", "ฟรีแบบชิลล์ๆ"],
                },
              ].map((item, index) => (
                <AnimateOnScroll
                  key={index}
                  animation="fadeInUp"
                  delay={200 + index * 100}
                >
                  <article
                    className="clickable-card flex flex-col rounded-xl border border-[#f4f4f5] bg-white p-4 sm:rounded-2xl sm:p-6 lg:rounded-[32px]"
                  >
                    <div className="mb-3 flex flex-col gap-2 sm:mb-4 lg:mb-6">
                      <item.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                      <h3 className="text-sm font-bold leading-[22px] text-[#1a1c1c] sm:text-base sm:leading-[24.75px] lg:text-lg">
                        {item.title[0]}
                        <br />
                        {item.title[1]}
                      </h3>
                    </div>
                    <div className="mb-3 flex flex-col gap-3 sm:mb-4 sm:gap-4">
                      <div className="rounded-2xl border-l-4 border-[#d4d4d8] bg-[#fafafa] pl-3 pr-2 py-2 sm:rounded-[32px] sm:pl-4 sm:pr-3 sm:py-3">
                        <p className="text-[9px] font-bold uppercase tracking-[0.5px] text-[#a1a1aa] sm:text-[10px]">
                          จ่ายแบบเดิม
                        </p>
                        <p className="mt-1.5 text-sm font-bold leading-5 text-[#52525b] sm:mt-2 sm:text-base sm:leading-6">
                          {item.oldWay[0]}
                          <br />
                          {item.oldWay[1]}
                          {item.oldWay[2] && (
                            <>
                              <br />
                              {item.oldWay[2]}
                            </>
                          )}
                        </p>
                      </div>
                      <div className="rounded-2xl border-l-4 border-[#0c9] bg-[#ecfdf5] pl-3 pr-2 py-2 sm:rounded-[32px] sm:pl-4 sm:pr-3 sm:py-3">
                        <p className="text-[9px] font-bold uppercase tracking-[0.5px] text-[#0c9] sm:text-[10px]">
                          ใช้ GoGoCash
                        </p>
                        <p className="mt-1.5 text-sm font-bold leading-5 text-[#0c9] sm:mt-2 sm:text-base sm:leading-6">
                          {item.newWay[0]}
                          <br />
                          {item.newWay[1]}
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto pt-4 border-t border-[#f4f4f5] sm:pt-6">
                      <p className="text-[10px] leading-4 text-[#5f5e5e] sm:text-xs sm:leading-[19.5px]">
                        {item.benefit[0]}
                        <br />
                        {item.benefit[1]}
                      </p>
                    </div>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
            <AnimateOnScroll animation="fadeInUp" delay={800}>
              <div className="mt-6 text-center sm:mt-8 lg:mt-12">
                <p className="text-base font-medium leading-6 text-[#1a1c1c] sm:text-lg sm:leading-7 lg:text-xl lg:leading-[32.5px]">
                  สิ่งเดียวที่คุณต้องทำต่างออกไปวันนี้ คือเริ่มทุกการช้อปจาก{" "}
                  <span className="font-bold text-[#126d37]">GoGoCash</span> แล้วให้เงิน
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  เริ่มไหลกลับมาหาคุณแทนที่จะหายไปเฉย ๆ
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Partner Stores Section */}
        <section 
          id="stores" 
          className="bg-white py-12 md:py-24 lg:py-scale-20"
          aria-labelledby="stores-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
            <AnimateOnScroll animation="fadeInUp" delay={0}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h2 id="stores-heading" className="text-xl font-bold leading-[28px] text-[#1a1c1c] sm:text-2xl sm:leading-[32px] lg:text-[48px] lg:leading-[48px] lg:tracking-[-1.2px]">
                    ช้อปได้จาก 220+ ร้านค้าชั้นนำ
                  </h2>
                  <p className="text-sm text-[#5f5e5e] sm:text-base lg:text-xl">
                    ครอบคลุมทุกไลฟ์สไตล์ ตั้งแต่ของใช้ในบ้านจนถึงทริปต่างประเทศ
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "ทั้งหมด", active: true },
                    { label: "ยอดนิยม", active: false },
                    { label: "ท่องเที่ยว", active: false },
                    { label: "ช้อปปิ้ง", active: false },
                  ].map((filter) => (
                    <button
                      key={filter.label}
                      aria-label={`กรองร้านค้าตามหมวดหมู่: ${filter.label}`}
                      aria-pressed={filter.active}
                      className={`filter-btn rounded-full px-2.5 py-1 text-[10px] font-bold sm:px-3 sm:py-1.5 sm:text-xs lg:px-4 lg:py-2 lg:text-sm ${
                        filter.active
                          ? "active bg-[#126d37] text-white"
                          : "bg-[#e8e8e8] text-[#3f4940]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:mt-12 lg:grid-cols-3 xl:grid-cols-6">
              {STORES.map((store, i) => (
                <AnimateOnScroll
                  key={store.id}
                  animation="scaleIn"
                  delay={200 + i * 50}
                >
                  <a
                    href={store.url || "#"}
                    className="clickable-card relative flex flex-col items-center rounded-xl border border-[#f4f4f5] bg-white p-4 sm:rounded-2xl sm:p-6"
                    aria-label={`ร้านค้า ${store.name} - คืนเงินสูงสุด ${store.cashbackRate}%`}
                  >
                    <div className="mb-3 sm:mb-4" aria-hidden="true">
                      <StoreLogo
                        storeName={store.name}
                        logoUrl={store.logoUrl}
                        size="md"
                      />
                    </div>
                    <div className="mb-2 text-center text-sm font-bold text-[#1a1c1c] sm:text-base">
                      {store.name}
                    </div>
                    <div className="mt-auto w-full rounded-full bg-[#9aefac] px-1.5 py-0.5 text-center sm:px-2 sm:py-1">
                      <span className="text-[10px] font-bold text-[#126d37] sm:text-xs">
                        คืนเงินสูงสุด {store.cashbackRate}%
                      </span>
                    </div>
                  </a>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-gradient-to-b from-white to-[#f3fbf5] py-12 md:py-24 lg:py-scale-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
            <AnimateOnScroll animation="fadeInUp" delay={0}>
              <div className="text-center">
                <h2 id="how-it-works-heading" className="text-xl font-bold leading-[28px] text-[#1a1c1c] sm:text-2xl sm:leading-[32px] lg:text-[48px] lg:leading-[56px] lg:tracking-[-1.2px]">
                  3 ขั้นตอนสู่ความมั่งคั่งจากการช้อป
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm text-[#5f5e5e] sm:text-base lg:mt-6 lg:text-lg">
                  ง่าย เร็ว และได้เงินคืนจริง ไม่ต้องรอ ไม่ต้องกังวล
                </p>
              </div>
            </AnimateOnScroll>
            
            {/* Steps Container */}
            <div className="mt-12 flex flex-col gap-8 sm:mt-16 sm:gap-12 lg:mt-20 lg:flex-row lg:items-start lg:justify-center lg:gap-8">
              {/* Step 1 */}
              <AnimateOnScroll animation="fadeInUp" delay={200} key="step-1">
                <article
                  className="relative flex flex-col items-center text-center lg:flex-1 lg:max-w-[360px]"
                  aria-labelledby="step-1-heading"
                >
                  {/* Step Number Badge */}
                  <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#006c4f] to-[#00cc99] shadow-lg sm:h-20 sm:w-20 lg:h-24 lg:w-24" aria-label="ขั้นตอนที่ 1">
                    <span className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl" aria-hidden="true">1</span>
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#006c4f] to-[#00cc99] opacity-20 blur-md" aria-hidden="true"></div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="w-full rounded-2xl bg-white p-6 shadow-[0px_8px_40px_0px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0px_12px_48px_0px_rgba(0,0,0,0.12)] sm:p-8 lg:rounded-[32px] lg:p-10">
                    <div className="mb-4 flex items-center justify-center gap-3 sm:mb-6" aria-hidden="true">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecfdf5] sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                        <WhatsAppIcon className="h-6 w-6 text-[#126d37] sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecfdf5] sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                        <TelegramIcon className="h-6 w-6 text-[#126d37] sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                      </div>
                    </div>
                    <h3 id="step-1-heading" className="mb-3 text-lg font-bold text-[#1a1c1c] sm:text-xl lg:mb-4 lg:text-2xl">
                      เริ่มใช้งานทันที
                    </h3>
                    <p className="text-sm leading-6 text-[#5f5e5e] sm:text-base lg:leading-7">
                      เปิดใช้งาน GoGoCash ผ่าน Line Mini App หรือ Telegram Bot ได้ทันที ไม่ต้องโหลดแอปแยกให้หนักเครื่อง
                    </p>
                  </div>
                  
                  {/* Connector Line (Desktop Only) */}
                  <div className="hidden lg:block" aria-hidden="true">
                    <div className="absolute left-full top-12 h-0.5 w-full max-w-[120px] bg-gradient-to-r from-[#00cc99] to-transparent"></div>
                    <div className="absolute left-full top-11 h-3 w-3 rounded-full bg-[#00cc99]"></div>
                  </div>
                </article>
              </AnimateOnScroll>

              {/* Step 2 */}
              <AnimateOnScroll animation="fadeInUp" delay={400}>
                <article
                  className="relative flex flex-col items-center text-center lg:flex-1 lg:max-w-[360px]"
                  aria-labelledby="step-2-heading"
                >
                  {/* Step Number Badge */}
                  <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#006c4f] to-[#00cc99] shadow-lg sm:h-20 sm:w-20 lg:h-24 lg:w-24" aria-label="ขั้นตอนที่ 2">
                    <span className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl" aria-hidden="true">2</span>
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#006c4f] to-[#00cc99] opacity-20 blur-md" aria-hidden="true"></div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="w-full rounded-2xl bg-white p-6 shadow-[0px_8px_40px_0px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0px_12px_48px_0px_rgba(0,0,0,0.12)] sm:p-8 lg:rounded-[32px] lg:p-10">
                    <div className="mb-4 flex items-center justify-center sm:mb-6" aria-hidden="true">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecfdf5] sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                        <Store className="h-6 w-6 text-[#126d37] sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                      </div>
                    </div>
                    <h3 id="step-2-heading" className="mb-3 text-lg font-bold text-[#1a1c1c] sm:text-xl lg:mb-4 lg:text-2xl">
                      เลือกร้านค้า
                    </h3>
                    <p className="text-sm leading-6 text-[#5f5e5e] sm:text-base lg:leading-7">
                      ค้นหาจาก 220+ ร้านค้าพาร์ทเนอร์ที่คุณชื่นชอบ แล้วกดเข้าสู่ร้านผ่านช่องทางที่คุณเลือก
                    </p>
                  </div>
                  
                  {/* Connector Line (Desktop Only) */}
                  <div className="hidden lg:block" aria-hidden="true">
                    <div className="absolute left-full top-12 h-0.5 w-full max-w-[120px] bg-gradient-to-r from-[#00cc99] to-transparent"></div>
                    <div className="absolute left-full top-11 h-3 w-3 rounded-full bg-[#00cc99]"></div>
                  </div>
                </article>
              </AnimateOnScroll>

              {/* Step 3 */}
              <AnimateOnScroll animation="fadeInUp" delay={600}>
                <article
                  className="relative flex flex-col items-center text-center lg:flex-1 lg:max-w-[360px]"
                  aria-labelledby="step-3-heading"
                >
                  {/* Step Number Badge */}
                  <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#006c4f] to-[#00cc99] shadow-lg sm:h-20 sm:w-20 lg:h-24 lg:w-24" aria-label="ขั้นตอนที่ 3">
                    <span className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl" aria-hidden="true">3</span>
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#006c4f] to-[#00cc99] opacity-20 blur-md" aria-hidden="true"></div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="w-full rounded-2xl bg-white p-6 shadow-[0px_8px_40px_0px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0px_12px_48px_0px_rgba(0,0,0,0.12)] sm:p-8 lg:rounded-[32px] lg:p-10">
                    <div className="mb-4 flex items-center justify-center sm:mb-6" aria-hidden="true">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecfdf5] sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                        <CheckCircle2 className="h-6 w-6 text-[#126d37] sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                      </div>
                    </div>
                    <h3 id="step-3-heading" className="mb-3 text-lg font-bold text-[#1a1c1c] sm:text-xl lg:mb-4 lg:text-2xl">
                      รับเงินและถอนได้
                    </h3>
                    <p className="text-sm leading-6 text-[#5f5e5e] sm:text-base lg:leading-7">
                      รับเงินคืนทันทีหลังช้อปเสร็จ และถอนได้ทันทีผ่านบัญชีธนาคารหรือ e-Wallet
                    </p>
                  </div>
                </article>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-white py-12 md:py-24 lg:py-scale-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
            <AnimateOnScroll animation="fadeInUp" delay={0}>
              <div className="text-center">
                <h2 className="text-xl font-bold leading-[28px] text-[#1a1c1c] sm:text-2xl sm:leading-[32px] lg:text-[36px] lg:leading-[40px] lg:tracking-[-0.9px]">
                  คนที่ใช้แล้วบอกว่า...
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-[#5f5e5e] sm:text-base lg:mt-4 lg:text-lg">
                  ฟังเสียงจากผู้ใช้งานจริงที่ได้รับเงินคืนแล้ว
                </p>
              </div>
            </AnimateOnScroll>

            <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {/* Testimonial 1 */}
              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <article className="flex flex-col rounded-2xl bg-[#f3fbf5] p-6 shadow-[0px_8px_40px_0px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0px_12px_48px_0px_rgba(0,0,0,0.08)] sm:p-8 lg:rounded-[32px]">
                  <div className="mb-4 flex items-center gap-1 text-[#00cc99] sm:mb-6" role="img" aria-label="5 ดาว">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-4 flex-1 text-sm leading-6 text-[#1a1c1c] sm:text-base sm:leading-7 lg:text-lg">
                    "ทำไมฉันเพิ่งจะรู้จัก GoGoCash? เงินที่เสียไปอาจจะพาไปเที่ยวญี่ปุ่นได้แล้ว!"
                  </blockquote>
                  <footer className="flex items-center gap-3 border-t border-[#00cc99]/20 pt-4">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-[#006c4f] to-[#00cc99] sm:h-12 sm:w-12" aria-hidden="true" role="img" aria-label="รูปโปรไฟล์"></div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#1a1c1c] sm:text-base">คุณแพรว</p>
                      <p className="text-xs text-[#5f5e5e] sm:text-sm">นักช้อปตัวยง</p>
                    </div>
                  </footer>
                </article>
              </AnimateOnScroll>

              {/* Testimonial 2 */}
              <AnimateOnScroll animation="fadeInUp" delay={400}>
                <article className="flex flex-col rounded-2xl bg-[#f3fbf5] p-6 shadow-[0px_8px_40px_0px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0px_12px_48px_0px_rgba(0,0,0,0.08)] sm:p-8 lg:rounded-[32px]">
                  <div className="mb-4 flex items-center gap-1 text-[#00cc99] sm:mb-6" role="img" aria-label="5 ดาว">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-4 flex-1 text-sm leading-6 text-[#1a1c1c] sm:text-base sm:leading-7 lg:text-lg">
                    "ใช้มา 3 เดือนแล้ว ได้เงินคืนเกือบ 5,000 บาท ดีมากๆ แนะนำเลย!"
                  </blockquote>
                  <footer className="flex items-center gap-3 border-t border-[#00cc99]/20 pt-4">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-[#006c4f] to-[#00cc99] sm:h-12 sm:w-12"></div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#1a1c1c] sm:text-base">คุณสมชาย</p>
                      <p className="text-xs text-[#5f5e5e] sm:text-sm">พนักงานออฟฟิศ</p>
                    </div>
                  </footer>
                </article>
              </AnimateOnScroll>

              {/* Testimonial 3 */}
              <AnimateOnScroll animation="fadeInUp" delay={600}>
                <article className="flex flex-col rounded-2xl bg-[#f3fbf5] p-6 shadow-[0px_8px_40px_0px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0px_12px_48px_0px_rgba(0,0,0,0.08)] sm:p-8 lg:rounded-[32px]">
                  <div className="mb-4 flex items-center gap-1 text-[#00cc99] sm:mb-6" role="img" aria-label="5 ดาว">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-4 flex-1 text-sm leading-6 text-[#1a1c1c] sm:text-base sm:leading-7 lg:text-lg">
                    "ง่ายมาก ไม่ต้องทำอะไรเยอะ แค่กดผ่าน GoGoCash แล้วช้อปตามปกติ ได้เงินคืนจริงๆ!"
                  </blockquote>
                  <footer className="flex items-center gap-3 border-t border-[#00cc99]/20 pt-4">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-[#006c4f] to-[#00cc99] sm:h-12 sm:w-12"></div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#1a1c1c] sm:text-base">คุณนิดา</p>
                      <p className="text-xs text-[#5f5e5e] sm:text-sm">แม่บ้าน</p>
                    </div>
                  </footer>
                </article>
              </AnimateOnScroll>

              {/* Testimonial 4 */}
              <AnimateOnScroll animation="fadeInUp" delay={800}>
                <article className="flex flex-col rounded-2xl bg-[#f3fbf5] p-6 shadow-[0px_8px_40px_0px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0px_12px_48px_0px_rgba(0,0,0,0.08)] sm:p-8 lg:rounded-[32px]">
                  <div className="mb-4 flex items-center gap-1 text-[#00cc99] sm:mb-6" role="img" aria-label="5 ดาว">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-4 flex-1 text-sm leading-6 text-[#1a1c1c] sm:text-base sm:leading-7 lg:text-lg">
                    "ตอนแรกไม่เชื่อว่าจริง แต่ลองใช้แล้วได้เงินคืนจริงๆ ดีใจมาก!"
                  </blockquote>
                  <footer className="flex items-center gap-3 border-t border-[#00cc99]/20 pt-4">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-[#006c4f] to-[#00cc99] sm:h-12 sm:w-12"></div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#1a1c1c] sm:text-base">คุณมานะ</p>
                      <p className="text-xs text-[#5f5e5e] sm:text-sm">ฟรีแลนซ์</p>
                    </div>
                  </footer>
                </article>
              </AnimateOnScroll>

              {/* Testimonial 5 */}
              <AnimateOnScroll animation="fadeInUp" delay={1000}>
                <article className="flex flex-col rounded-2xl bg-[#f3fbf5] p-6 shadow-[0px_8px_40px_0px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0px_12px_48px_0px_rgba(0,0,0,0.08)] sm:p-8 lg:rounded-[32px]">
                  <div className="mb-4 flex items-center gap-1 text-[#00cc99] sm:mb-6" role="img" aria-label="5 ดาว">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-4 flex-1 text-sm leading-6 text-[#1a1c1c] sm:text-base sm:leading-7 lg:text-lg">
                    "ใช้จ่ายเหมือนเดิม แต่ได้เงินคืนเพิ่มมา ดีมากเลย แนะนำให้เพื่อนๆ ทุกคนแล้ว"
                  </blockquote>
                  <footer className="flex items-center gap-3 border-t border-[#00cc99]/20 pt-4">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-[#006c4f] to-[#00cc99] sm:h-12 sm:w-12"></div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#1a1c1c] sm:text-base">คุณวิไล</p>
                      <p className="text-xs text-[#5f5e5e] sm:text-sm">สายเที่ยว</p>
                    </div>
                  </footer>
                </article>
              </AnimateOnScroll>

              {/* Testimonial 6 */}
              <AnimateOnScroll animation="fadeInUp" delay={1200}>
                <article className="flex flex-col rounded-2xl bg-[#f3fbf5] p-6 shadow-[0px_8px_40px_0px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0px_12px_48px_0px_rgba(0,0,0,0.08)] sm:p-8 lg:rounded-[32px]">
                  <div className="mb-4 flex items-center gap-1 text-[#00cc99] sm:mb-6" role="img" aria-label="5 ดาว">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-4 flex-1 text-sm leading-6 text-[#1a1c1c] sm:text-base sm:leading-7 lg:text-lg">
                    "ดีมากๆ ได้เงินคืนทุกครั้งที่ช้อป ไม่ต้องรอนาน ถอนได้เลย ใช้แล้วติดใจ!"
                  </blockquote>
                  <footer className="flex items-center gap-3 border-t border-[#00cc99]/20 pt-4">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-[#006c4f] to-[#00cc99] sm:h-12 sm:w-12"></div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#1a1c1c] sm:text-base">คุณปิยะ</p>
                      <p className="text-xs text-[#5f5e5e] sm:text-sm">นักศึกษา</p>
                    </div>
                  </footer>
                </article>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section 
          id="faq" 
          className="bg-white py-12 md:py-24 lg:py-32"
          aria-labelledby="faq-heading"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 xl:px-12">
            <AnimateOnScroll animation="fadeInUp" delay={0}>
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 id="faq-heading" className="text-2xl font-bold leading-[32px] text-[#006c4f] sm:text-3xl sm:leading-[40px] lg:text-[48px] lg:leading-[56px] lg:tracking-[-1.2px]">
                  คำถามที่พบบ่อย
                </h2>
                <p className="mt-4 text-base leading-6 text-[#52525b] sm:mt-6 sm:text-lg sm:leading-7 lg:text-xl lg:leading-[32.5px]">
                  ค้นหาคำตอบสำหรับคำถามที่คุณสงสัยเกี่ยวกับ GoGoCash
                </p>
              </div>
            </AnimateOnScroll>
            <FAQAccordion
              items={[
                {
                  question: "GoGoCash คืออะไร?",
                  answer: [
                    "GoGoCash เป็นแพลตฟอร์มรับเงินคืน (Cashback) ที่ช่วยให้คุณได้รับเงินคืนทุกครั้งที่ช้อปปิ้งออนไลน์ผ่านร้านค้าพันธมิตรกว่า 220+ แห่ง",
                    "คุณสามารถใช้ GoGoCash ผ่าน Line Mini App หรือ Telegram Bot โดยไม่ต้องดาวน์โหลดแอปเพิ่มเติม",
                  ],
                },
                {
                  question: "วิธีใช้งาน GoGoCash เป็นอย่างไร?",
                  answer: [
                    "1. เปิดใช้งาน GoGoCash ผ่าน Line Mini App หรือ Telegram Bot",
                    "2. เลือกร้านค้าพันธมิตรที่คุณต้องการช้อป (เช่น Shopee, Lazada, Agoda)",
                    "3. กดเข้าสู่ร้านผ่าน GoGoCash",
                    "4. ช้อปปิ้งตามปกติ และรับเงินคืนอัตโนมัติ",
                  ],
                },
                {
                  question: "เงินคืนจะได้รับเมื่อไหร่?",
                  answer: [
                    "เงินคืนจะถูกโอนเข้าบัญชี GoGoCash ของคุณทันทีหลังจากร้านค้าพันธมิตรยืนยันการสั่งซื้อ",
                    "ระยะเวลาอาจแตกต่างกันไปตามร้านค้า โดยทั่วไปจะใช้เวลา 1-7 วันทำการ",
                  ],
                },
                {
                  question: "มีค่าใช้จ่ายในการใช้งานหรือไม่?",
                  answer: [
                    "GoGoCash ใช้งานฟรี 100% ไม่มีค่าใช้จ่ายแอบแฝง",
                    "คุณไม่ต้องจ่ายค่าธรรมเนียมใดๆ ทั้งสิ้น แค่ช้อปผ่าน GoGoCash ก็รับเงินคืนได้เลย",
                  ],
                },
                {
                  question: "สามารถถอนเงินคืนได้หรือไม่?",
                  answer: [
                    "ได้ครับ คุณสามารถถอนเงินคืนที่สะสมไว้ได้ทุกเมื่อ",
                    "เงินจะถูกโอนเข้าบัญชีธนาคารหรือบัญชี PromptPay ที่คุณระบุ โดยไม่มีค่าธรรมเนียม",
                  ],
                },
                {
                  question: "ร้านค้าใดบ้างที่รองรับ?",
                  answer: [
                    "GoGoCash รองรับร้านค้าพันธมิตรกว่า 220+ แห่ง ครอบคลุมหลากหลายหมวดหมู่ เช่น:",
                    "• ช้อปปิ้งออนไลน์: Shopee, Lazada, JD Central",
                    "• ท่องเที่ยว: Agoda, Booking.com, Traveloka",
                    "• อาหารและเครื่องดื่ม: GrabFood, Foodpanda",
                    "• และอีกมากมาย",
                  ],
                },
                {
                  question: "ต้องสมัครสมาชิกหรือไม่?",
                  answer: [
                    "ใช่ครับ คุณต้องสมัครสมาชิกก่อนใช้งาน ซึ่งสามารถทำได้ง่ายๆ ผ่าน Line Mini App หรือ Telegram Bot",
                    "การสมัครใช้เวลาไม่กี่นาที และไม่ต้องกรอกข้อมูลซับซ้อน",
                  ],
                },
                {
                  question: "ข้อมูลส่วนตัวปลอดภัยหรือไม่?",
                  answer: [
                    "GoGoCash ให้ความสำคัญกับความปลอดภัยของข้อมูลส่วนตัวเป็นอย่างมาก",
                    "เราใช้เทคโนโลยีการเข้ารหัสข้อมูลมาตรฐาน และไม่เปิดเผยข้อมูลส่วนตัวของคุณให้กับบุคคลที่สาม",
                    "คุณสามารถอ่านรายละเอียดเพิ่มเติมได้ในนโยบายความเป็นส่วนตัว",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="mx-4 rounded-3xl bg-[#126d37] py-12 text-white sm:mx-6 sm:rounded-[48px] lg:mx-8 lg:py-scale-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 xl:px-12">
            <AnimateOnScroll animation="fadeInUp" delay={0}>
              <h2 className="text-xl font-bold leading-[28px] sm:text-2xl sm:leading-[32px] lg:text-[48px] lg:leading-[56px] lg:tracking-[-1.2px]">
                การช้อปครั้งถัดไปของคุณ...
                <br />
                จะเป็นครั้งแรกที่เงินไม่หายไปเฉย ๆ
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4 lg:mt-10">
                <a
                  href="https://miniapp.line.me/2008237918-mpplkp5Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="สมัครใช้งาน GoGoCash ผ่าน WhatsApp"
                  className="btn btn-outline inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[#0c9] bg-transparent px-5 py-3 text-sm font-bold text-[#0c9] sm:w-auto sm:px-6 sm:py-4 sm:text-base lg:rounded-full lg:px-8 lg:py-4 lg:text-lg"
                  style={{ minHeight: "48px", minWidth: "48px" }}
                >
                  <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" aria-hidden="true" />
                  สมัครผ่าน WhatsApp
                </a>
                <a
                  href="https://lin.ee/7om5sAr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ติดต่อ GoGoCash ผ่าน Telegram"
                  className="btn btn-outline inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-5 py-3 text-sm font-bold text-white backdrop-blur-sm sm:w-auto sm:px-6 sm:py-4 sm:text-base lg:rounded-full lg:px-8 lg:py-4 lg:text-lg"
                  style={{ minHeight: "48px", minWidth: "48px" }}
                >
                  <TelegramIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" aria-hidden="true" />
                  ติดต่อเรา
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </ErrorBoundary>
  );
}
