import Link from "next/link";
import { WhatsAppIcon, TelegramIcon } from "@/components/brand-icons";
import Logo from "./logo";
import SocialIcon from "./social-icon";

export default function Footer() {
  return (
    <footer
      className="bg-[#fafafa] border-t border-[rgba(228,228,231,0.5)] rounded-t-3xl pt-10 pb-20 sm:rounded-t-[48px] sm:pt-12 lg:pb-8 lg:pt-16"
      role="contentinfo"
      aria-label="ส่วนท้ายหน้า"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Column 1: Logo & Copyright */}
          <div className="flex flex-col gap-4">
            <Logo variant="footer" className="h-10 w-auto" />
            <p className="max-w-[320px] text-sm leading-[22.75px] text-[#71717a]">
              © 2024 GoGoCash - อิสระภาพทางการเงินในมือ
              <br />
              คุณ ช้อปฉลาด รับเงินคืนทันที
            </p>
            <div className="mt-4 flex flex-col gap-2 text-xs text-[#71717a]">
              <p>
                <strong>ติดต่อเรา:</strong>
              </p>
              <p>
                Email: <a href="mailto:contact@gogocash.com" className="text-[#006c4f] hover:underline">contact@gogocash.com</a>
              </p>
              <p>
                Line: <a href="https://lin.ee/7om5sAr" target="_blank" rel="noopener noreferrer" className="text-[#006c4f] hover:underline">@gogocash</a>
              </p>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-[#18181b]">เมนู</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#stores"
                  className="nav-link text-sm text-[#71717a]"
                  aria-label="ไปยังส่วนร้านค้าพันธมิตร"
                >
                  ร้านค้าพันธมิตร
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="nav-link text-sm text-[#71717a]"
                  aria-label="ไปยังส่วนขั้นตอนการรับเงินคืน"
                >
                  ขั้นตอนการรับเงินคืน
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="nav-link text-sm text-[#71717a]"
                  aria-label="ไปยังส่วนคำถามที่พบบ่อย"
                >
                  ศูนย์ช่วยเหลือ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col gap-4 pb-7">
            <h4 className="text-base font-bold text-[#18181b]">กฎหมาย</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/privacy"
                  className="nav-link text-sm text-[#71717a]"
                  aria-label="อ่านนโยบายความเป็นส่วนตัว"
                >
                  นโยบายความเป็นส่วนตัว
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="nav-link text-sm text-[#71717a]"
                  aria-label="อ่านข้อกำหนดการใช้งาน"
                >
                  ข้อกำหนดการใช้งาน
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="nav-link text-sm text-[#71717a]"
                  aria-label="ติดต่อเรา"
                >
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 4: Follow Us (Full Width Below) */}
        <div className="mt-12 flex flex-col gap-6">
          <h4 className="text-base font-bold text-[#18181b]">ติดตามเรา</h4>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.facebook.com/gogocash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ติดตาม GoGoCash บน Facebook (เปิดในแท็บใหม่)"
              className="btn btn-ghost inline-flex w-fit items-center gap-3 rounded-full bg-[rgba(24,119,242,0.1)] px-4 py-2 text-sm font-bold text-[#1877f2]"
            >
              <SocialIcon platform="facebook" size={20} />
              Facebook
            </a>
            <a
              href="https://lin.ee/7om5sAr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ติดตาม GoGoCash บน Line Official (เปิดในแท็บใหม่)"
              className="btn btn-ghost inline-flex w-fit items-center gap-3 rounded-full bg-[rgba(6,199,85,0.1)] px-4 py-2 text-sm font-bold text-[#06c755]"
            >
              <SocialIcon platform="line" size={20} />
              Line Official
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {[
              { name: "Facebook", platform: "facebook" as const, url: "https://www.facebook.com/gogocash" },
              { name: "Instagram", platform: "instagram" as const, url: "https://www.instagram.com/gogocash" },
              { name: "Twitter", platform: "twitter" as const, url: "https://twitter.com/gogocash" },
              { name: "YouTube", platform: "youtube" as const, url: "https://www.youtube.com/@gogocash" },
              { name: "TikTok", platform: "instagram" as const, url: "https://www.tiktok.com/@gogocash" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#e8e8e8] hover:bg-[#f3fbf5] hover:border-[#00cc99] hover:shadow-md"
                aria-label={`ติดตาม GoGoCash บน ${social.name} (เปิดในแท็บใหม่)`}
              >
                <SocialIcon platform={social.platform} size={22} className="text-[#52525b]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
