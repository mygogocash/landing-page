import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "ข้อกำหนดการใช้งาน - GoGoCash",
  description: "ข้อกำหนดและเงื่อนไขการใช้งานบริการ GoGoCash - รับเงินคืนทุกครั้งที่ช้อป",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
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
            ข้อกำหนดการใช้งาน
          </h1>
          <p className="text-sm text-[#71717a] mb-8">อัปเดตล่าสุด: 17 มีนาคม 2026</p>

          <div className="prose prose-sm sm:prose-base max-w-none text-[#52525b] space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#161d1a] mt-8 mb-4">1. การยอมรับข้อกำหนด</h2>
              <p>
                โดยการใช้งานบริการ GoGoCash คุณยอมรับและตกลงที่จะปฏิบัติตามข้อกำหนดและเงื่อนไขเหล่านี้
                หากคุณไม่เห็นด้วยกับข้อกำหนดใดๆ กรุณาอย่าใช้บริการของเรา
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#161d1a] mt-8 mb-4">2. บริการของเรา</h2>
              <p>
                GoGoCash ให้บริการรับเงินคืน (Cashback) เมื่อคุณช้อปปิ้งผ่านร้านค้าพันธมิตรของเรา
                เงินคืนจะถูกคำนวณตามอัตราที่ระบุไว้สำหรับแต่ละร้านค้า
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#161d1a] mt-8 mb-4">3. การสมัครสมาชิก</h2>
              <p>เพื่อใช้บริการ คุณต้อง:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>มีอายุ 18 ปีขึ้นไป</li>
                <li>ให้ข้อมูลที่ถูกต้องและครบถ้วน</li>
                <li>รักษาความปลอดภัยของบัญชีของคุณ</li>
                <li>รับผิดชอบต่อกิจกรรมทั้งหมดที่เกิดขึ้นภายใต้บัญชีของคุณ</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#161d1a] mt-8 mb-4">4. การรับเงินคืน</h2>
              <p>
                เงินคืนจะถูกคำนวณและโอนเข้าบัญชีของคุณตามเงื่อนไขที่ระบุไว้สำหรับแต่ละร้านค้า
                เราไม่รับผิดชอบต่อการเปลี่ยนแปลงอัตราเงินคืนโดยร้านค้าพันธมิตร
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#161d1a] mt-8 mb-4">5. การถอนเงิน</h2>
              <p>
                คุณสามารถถอนเงินคืนที่สะสมไว้ได้เมื่อถึงจำนวนขั้นต่ำที่กำหนด
                การถอนเงินจะถูกโอนเข้าบัญชีธนาคารหรือ e-Wallet ที่คุณระบุ
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#161d1a] mt-8 mb-4">6. ข้อจำกัดความรับผิดชอบ</h2>
              <p>
                GoGoCash ไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดจากการใช้งานบริการ
                รวมถึงแต่ไม่จำกัดเพียงความเสียหายทางตรง ทางอ้อม หรือความเสียหายที่ตามมา
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#161d1a] mt-8 mb-4">7. การเปลี่ยนแปลงข้อกำหนด</h2>
              <p>
                เราขอสงวนสิทธิ์ในการแก้ไข เปลี่ยนแปลง หรืออัปเดตข้อกำหนดเหล่านี้ได้ทุกเมื่อ
                โดยจะแจ้งให้คุณทราบผ่านช่องทางที่เหมาะสม
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#161d1a] mt-8 mb-4">8. ติดต่อเรา</h2>
              <p>
                หากคุณมีคำถามเกี่ยวกับข้อกำหนดการใช้งานนี้ กรุณาติดต่อเราได้ที่:
              </p>
              <ul className="list-none pl-0 space-y-2 mt-4">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:legal@gogocash.com" className="text-[#006c4f] hover:underline">
                    legal@gogocash.com
                  </a>
                </li>
                <li>
                  <strong>Line:</strong>{" "}
                  <a href="https://lin.ee/7om5sAr" target="_blank" rel="noopener noreferrer" className="text-[#006c4f] hover:underline">
                    @gogocash
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
