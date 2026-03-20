import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "ติดต่อเรา - GoGoCash",
  description: "ติดต่อ GoGoCash - เราพร้อมช่วยเหลือคุณในทุกคำถามเกี่ยวกับบริการรับเงินคืน",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f3fbf5]">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#006c4f] hover:text-[#00503a] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>กลับหน้าหลัก</span>
        </Link>

        <article className="rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:p-12">
          <h1 className="text-3xl font-bold text-[#161d1a] sm:text-4xl lg:text-5xl mb-6">
            ติดต่อเรา
          </h1>
          <p className="text-lg text-[#52525b] mb-8">
            เราพร้อมช่วยเหลือคุณในทุกคำถามเกี่ยวกับบริการ GoGoCash
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            <div className="rounded-xl border border-[#e8e8e8] bg-[#f3fbf5] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#006c4f]">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#161d1a]">อีเมล</h3>
              <p className="mb-4 text-sm text-[#52525b]">ส่งอีเมลหาเรา</p>
              <a
                href="mailto:contact@gogocash.com"
                className="text-[#006c4f] hover:underline font-medium"
              >
                contact@gogocash.com
              </a>
            </div>

            <div className="rounded-xl border border-[#e8e8e8] bg-[#f3fbf5] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00cc99]">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#161d1a]">Line Official</h3>
              <p className="mb-4 text-sm text-[#52525b]">แชทกับเราผ่าน Line</p>
              <a
                href="https://lin.ee/7om5sAr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#006c4f] hover:underline font-medium"
              >
                @gogocash
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-[#e8e8e8] bg-[#f3fbf5] p-6">
            <h2 className="mb-4 text-xl font-bold text-[#161d1a]">เวลาทำการ</h2>
            <p className="text-[#52525b]">
              เราพร้อมให้บริการคุณทุกวัน ตั้งแต่ 09:00 - 18:00 น.
              <br />
              เราจะตอบกลับคุณภายใน 24 ชั่วโมง
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
