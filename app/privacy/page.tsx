import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว - GoGoCash",
  description: "นโยบายความเป็นส่วนตัวของ GoGoCash - ข้อมูลเกี่ยวกับการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
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
            นโยบายความเป็นส่วนตัว
          </h1>
          <p className="text-sm text-[#71717a] mb-8">อัปเดตล่าสุด: 17 มีนาคม 2026</p>

          <div className="prose prose-sm sm:prose-base max-w-none text-[#52525b] space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#161d1a] mt-8 mb-4">1. ข้อมูลที่เรารวบรวม</h2>
              <p>
                GoGoCash รวบรวมข้อมูลที่จำเป็นเพื่อให้บริการรับเงินคืน (Cashback) แก่คุณ ข้อมูลที่เรารวบรวมรวมถึง:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>ข้อมูลส่วนบุคคล เช่น ชื่อ นามสกุล อีเมล หมายเลขโทรศัพท์</li>
                <li>ข้อมูลบัญชีธนาคารหรือ e-Wallet สำหรับการถอนเงินคืน</li>
                <li>ข้อมูลการใช้งาน เช่น ประวัติการช้อปปิ้งและเงินคืนที่ได้รับ</li>
                <li>ข้อมูลเทคนิค เช่น IP Address, Browser Type, Device Information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#161d1a] mt-8 mb-4">2. การใช้ข้อมูล</h2>
              <p>เราใช้ข้อมูลที่รวบรวมเพื่อ:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>ให้บริการรับเงินคืนและจัดการบัญชีของคุณ</li>
                <li>ประมวลผลการถอนเงินคืน</li>
                <li>ปรับปรุงและพัฒนาบริการของเรา</li>
                <li>ส่งข้อมูลสำคัญเกี่ยวกับบริการ</li>
                <li>ป้องกันการฉ้อโกงและรักษาความปลอดภัย</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#161d1a] mt-8 mb-4">3. การเปิดเผยข้อมูล</h2>
              <p>
                เราไม่ขายหรือให้เช่าข้อมูลส่วนบุคคลของคุณแก่บุคคลที่สาม เราเปิดเผยข้อมูลเฉพาะเมื่อจำเป็นเพื่อ:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>ให้บริการตามที่คุณร้องขอ</li>
                <li>ปฏิบัติตามกฎหมายหรือคำสั่งศาล</li>
                <li>ปกป้องสิทธิ์และความปลอดภัยของ GoGoCash และผู้ใช้งาน</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#161d1a] mt-8 mb-4">4. ความปลอดภัยของข้อมูล</h2>
              <p>
                เราใช้มาตรการรักษาความปลอดภัยที่เหมาะสมทั้งทางเทคนิคและการบริหารจัดการ เพื่อปกป้องข้อมูลส่วนบุคคลของคุณจากการเข้าถึง
                การใช้ การเปิดเผย การเปลี่ยนแปลง หรือการทำลายโดยไม่ได้รับอนุญาต
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#161d1a] mt-8 mb-4">5. สิทธิ์ของคุณ</h2>
              <p>คุณมีสิทธิ์:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>เข้าถึงและขอสำเนาข้อมูลส่วนบุคคลของคุณ</li>
                <li>แก้ไขข้อมูลส่วนบุคคลที่ไม่ถูกต้อง</li>
                <li>ขอให้ลบข้อมูลส่วนบุคคลของคุณ</li>
                <li>คัดค้านการประมวลผลข้อมูลส่วนบุคคลของคุณ</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#161d1a] mt-8 mb-4">6. ติดต่อเรา</h2>
              <p>
                หากคุณมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ กรุณาติดต่อเราได้ที่:
              </p>
              <ul className="list-none pl-0 space-y-2 mt-4">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@gogocash.com" className="text-[#006c4f] hover:underline">
                    privacy@gogocash.com
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
