import Header from "@/components/header";
import Footer from "@/components/footer";
import { Download, Play, TrendingDown, ShoppingBag, Clock, Store, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="home"
          className="relative overflow-hidden bg-surface py-scale-20"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left Column */}
              <div>
                <span className="inline-flex rounded-full bg-primary-container/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  Cashback Reimagined
                </span>
                <h1 className="mt-6 text-display-lg font-black text-on-background">
                  ช้อปครั้งหน้า…
                  <br />
                  <span className="text-primary">อย่าปล่อยให้เงิน</span>
                  <br />
                  <span className="text-primary">หายไปเฉย ๆ</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
                  รับเงินคืนทันทีจากร้านค้าชั้นนำกว่า 220+ แห่ง
                  เปลี่ยนทุกยอดจ่ายให้เป็นรายรับที่จับต้องได้จริง
                  ผ่านแอปที่คุณใช้อยู่ทุกวัน
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <button className="btn-primary-gradient inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-on-primary shadow-ambient transition-transform hover:-translate-y-0.5">
                    <Download className="h-5 w-5" />
                    Download App
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-outline-variant/15 bg-surface-container-lowest px-8 py-4 text-base font-semibold text-on-surface transition-colors hover:bg-surface-container">
                    <Play className="h-5 w-5" />
                    Watch Video
                  </button>
                </div>
              </div>

              {/* Right Column: Phone Mockup */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative h-[600px] w-[300px]">
                  <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary to-primary-container p-4 shadow-ambient">
                    <div className="h-full w-full rounded-[2.5rem] bg-surface-container-lowest p-6">
                      <div className="mb-4 rounded-xl bg-primary-container/10 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                            <CheckCircle2 className="h-6 w-6 text-on-primary" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-on-surface-variant">
                              CASHBACK
                            </p>
                            <p className="text-xl font-bold text-primary">
                              ฿450.00
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-on-primary">
                          Get Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Awareness Section */}
        <section className="bg-surface-container-low py-scale-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mx-auto max-w-3xl text-center text-headline font-bold text-on-background">
              ทุกการช้อปที่ผ่านมา…
              <br />
              คุณเสียเงินไปเฉย ๆ เท่าไหร่แล้ว?
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: TrendingDown,
                  title: "Invisible Loss",
                  description:
                    "เงินคืน 5-10% ที่ควรจะได้ แต่หายไปเพราะคุณไม่ได้กดผ่าน GoGoCash",
                },
                {
                  icon: ShoppingBag,
                  title: "Dead Money",
                  description:
                    "การช้อปแบบเดิมคือการจ่ายออกฝ่ายเดียว ไม่มีการหมุนเวียนเงินกลับเข้ากระเป๋า",
                },
                {
                  icon: Clock,
                  title: "Expired Perks",
                  description:
                    "โอกาสที่คุณจะได้รับโปรโมชั่นซ้อนโปรโมชั่นกำลังลดลงเรื่อยๆ ในทุกวินาที",
                },
              ].map((item, index) => (
                <article
                  key={index}
                  className="rounded-xl bg-surface-container-lowest p-8 shadow-ambient"
                >
                  <item.icon className="h-12 w-12 text-tertiary" />
                  <h3 className="mt-6 text-xl font-semibold text-on-surface">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="bg-surface py-scale-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-surface-container shadow-ambient">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary-container/20 to-primary/20">
                    <ShoppingBag className="h-32 w-32 text-primary/30" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 max-w-xs rounded-2xl border border-outline-variant/15 bg-surface-container-lowest/90 p-6 shadow-ambient backdrop-blur-sm">
                  <p className="text-sm font-semibold text-primary">
                    "เด้งจริง!"
                  </p>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    ผู้ใช้งานกว่า 1 ล้านคนสัมผัสความรู้สึกนี้แล้ว
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-headline font-bold text-on-background">
                  วินาทีที่เงินคืนเด้ง…
                  <br />
                  คุณจะไม่อยากช้อปแบบเก่าอีกเลย
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
                  ไม่ใช่แค่การประหยัด แต่มันคือความรู้สึกที่ได้รับชัยชนะทุกครั้งที่ใช้จ่าย
                  ปลดล็อกความคุ้มค่าที่คุณคู่ควรได้ตั้งแต่วันนี้
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Savings Comparison Section */}
        <section className="bg-surface-container-low py-scale-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-headline font-bold text-on-background">
                ถ้าคุณเคยช้อปแบบเดิมตลอดปีที่ผ่านมา...
                <br />
                คุณพลาดอะไรไปบ้าง?
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-on-surface-variant">
                สิ่งเดียวที่คุณต้องทำต่างออกไปวันนี้ คือเริ่มทุกการช้อปจาก GoGoCash
                แล้วให้เงินเริ่มไหลกลับมาหาคุณแทนที่จะหายไปเฉย ๆ
              </p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {[
                { category: "ท่องเที่ยว", store: "Agoda", cashback: "6.0%" },
                { category: "แฟชั่น", store: "Shopee", cashback: "1.2%" },
                { category: "อิเล็กทรอนิกส์", store: "Lazada", cashback: "1.1%" },
                { category: "อาหาร", store: "Foodpanda", cashback: "3.0%" },
                { category: "ความงาม", store: "Sephora", cashback: "4.0%" },
              ].map((item, index) => (
                <article
                  key={index}
                  className="flex flex-col rounded-xl bg-surface-container-lowest p-6 shadow-ambient"
                >
                  <Store className="h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold text-on-surface">
                    {item.category}
                  </h3>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    {item.store}
                  </p>
                  <span className="mt-4 inline-flex w-fit rounded-full bg-primary-container/20 px-3 py-1 text-xs font-semibold text-primary">
                    Cashback {item.cashback}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Stores Section */}
        <section id="partners" className="bg-surface py-scale-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-headline font-bold text-on-background">
              ช้อปจากร้านค้าชั้นนำกว่า 220+ แห่ง
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["ทั้งหมด", "แฟชั่น", "การเดินทาง", "อิเล็กทรอนิกส์"].map(
                (filter) => (
                  <button
                    key={filter}
                    className="rounded-full border border-outline-variant/15 bg-surface-container-lowest px-6 py-2 text-sm font-medium text-on-surface transition-colors hover:bg-surface-container"
                  >
                    {filter}
                  </button>
                )
              )}
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 md:grid-cols-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="flex aspect-square items-center justify-center rounded-xl bg-surface-container-low p-4 shadow-ambient"
                >
                  <Store className="h-8 w-8 text-primary/40" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-surface-container-low py-scale-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-headline font-bold text-on-background">
              3 ขั้นตอนเพื่อได้มากกว่าแค่การช้อป
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  number: "1",
                  title: "Download App",
                  description: "ดาวน์โหลดแอป GoGoCash ผ่าน Line หรือ Telegram",
                  variant: "primary" as const,
                },
                {
                  number: "2",
                  title: "Choose Store",
                  description: "เลือกร้านค้าที่คุณต้องการช้อป",
                  variant: "muted" as const,
                },
                {
                  number: "3",
                  title: "Get Cashback",
                  description: "รับเงินคืนทันทีหลังช้อปเสร็จ",
                  variant: "primary" as const,
                },
              ].map((step, index) => (
                <article
                  key={index}
                  className={`flex flex-col rounded-xl p-8 shadow-ambient ${
                    step.variant === "primary"
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-lowest text-on-surface"
                  }`}
                >
                  <div className="text-6xl font-black opacity-20">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed opacity-80">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-surface py-scale-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <blockquote className="text-center">
              <p className="text-2xl italic leading-relaxed text-on-background">
                "ทำไมฉันเพิ่งจะรู้จัก GoGoCash? เงินที่เสียไปอาจจะพาไปเที่ยวญี่ปุ่นได้แล้ว!"
              </p>
              <footer className="mt-8">
                <div className="flex items-center justify-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-surface-container" />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-on-surface">
                      คุณแพรว
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      นักช้อปตัวยง
                    </p>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-primary py-scale-20 text-on-primary">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-headline font-bold">
              การช้อปครั้งถัดไปของคุณ...
              <br />
              จะเป็นครั้งแรกที่เงินไม่หายไปเฉย ๆ
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-surface-container-lowest px-8 py-4 text-base font-semibold text-primary shadow-ambient transition-transform hover:-translate-y-0.5">
                <Download className="h-5 w-5" />
                Download via WhatsApp
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-outline-variant/30 bg-transparent px-8 py-4 text-base font-semibold text-on-primary backdrop-blur-sm transition-colors hover:bg-white/10">
                <Download className="h-5 w-5" />
                Download via Telegram
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
