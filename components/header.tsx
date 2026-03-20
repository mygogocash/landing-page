"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./logo";
import { WhatsAppIcon } from "./brand-icons";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const NAVIGATION_SECTIONS = ["home", "stores", "how-it-works", "testimonials", "faq"];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(NAVIGATION_SECTIONS, 150);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur-[12px] shadow-[0px_8px_32px_0px_rgba(26,28,28,0.04)]"
      role="navigation"
      aria-label="เมนูหลัก"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8 xl:px-12">
        <Logo variant="header" className="h-8 lg:h-10" aria-label="GoGoCash หน้าแรก" />

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-6 lg:flex xl:gap-8">
          <Link
            href="#home"
            aria-label="ไปยังส่วนหน้าแรก"
            className={`nav-link text-sm font-medium uppercase tracking-[0.35px] transition-colors ${
              activeSection === "home"
                ? "active border-b-2 border-[#10b981] pb-1.5 text-[#047857]"
                : "text-[#52525b]"
            }`}
          >
            หน้าแรก
          </Link>
          <Link
            href="#stores"
            aria-label="ไปยังส่วนร้านค้าพันธมิตร"
            className={`nav-link text-sm font-medium uppercase tracking-[0.35px] transition-colors ${
              activeSection === "stores"
                ? "active border-b-2 border-[#10b981] pb-1.5 text-[#047857]"
                : "text-[#52525b]"
            }`}
          >
            ร้านค้า
          </Link>
          <Link
            href="#how-it-works"
            aria-label="ไปยังส่วนวิธีใช้งาน"
            className={`nav-link text-sm font-medium uppercase tracking-[0.35px] transition-colors ${
              activeSection === "how-it-works"
                ? "active border-b-2 border-[#10b981] pb-1.5 text-[#047857]"
                : "text-[#52525b]"
            }`}
          >
            วิธีใช้งาน
          </Link>
          <Link
            href="#testimonials"
            aria-label="ไปยังส่วนรีวิวจากผู้ใช้งาน"
            className={`nav-link text-sm font-medium uppercase tracking-[0.35px] transition-colors ${
              activeSection === "testimonials"
                ? "active border-b-2 border-[#10b981] pb-1.5 text-[#047857]"
                : "text-[#52525b]"
            }`}
          >
            รีวิว
          </Link>
          <Link
            href="#faq"
            aria-label="ไปยังส่วนคำถามที่พบบ่อย"
            className={`nav-link text-sm font-medium uppercase tracking-[0.35px] transition-colors ${
              activeSection === "faq"
                ? "active border-b-2 border-[#10b981] pb-1.5 text-[#047857]"
                : "text-[#52525b]"
            }`}
          >
            คำถาม
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <a
          href="https://miniapp.line.me/2008237918-mpplkp5Q"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="เปิดใช้งาน GoGoCash ผ่าน Line Mini App"
          className="btn btn-primary hidden items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-bold text-white shadow-lg sm:px-6 sm:py-4 sm:text-base lg:inline-flex lg:rounded-full lg:px-8 lg:py-4 lg:text-lg"
          style={{ minHeight: "48px", minWidth: "48px" }}
        >
          <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" aria-hidden="true" />
          <span>เข้าใช้งาน</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          className="btn btn-ghost inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4f5] text-[#52525b] lg:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full z-50 border-t border-outline-variant/15 bg-white shadow-lg lg:hidden" role="menu">
          <div className="flex flex-col gap-3 px-6 py-4">
            <Link
              href="#home"
              role="menuitem"
              aria-label="ไปยังส่วนหน้าแรก"
              className={`mobile-nav-link text-sm font-medium transition-colors ${
                activeSection === "home" ? "active text-[#047857]" : "text-[#52525b]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              หน้าแรก
            </Link>
            <Link
              href="#stores"
              role="menuitem"
              aria-label="ไปยังส่วนร้านค้าพันธมิตร"
              className={`mobile-nav-link text-sm font-medium transition-colors ${
                activeSection === "stores" ? "active text-[#047857]" : "text-[#52525b]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              ร้านค้า
            </Link>
            <Link
              href="#how-it-works"
              role="menuitem"
              aria-label="ไปยังส่วนวิธีใช้งาน"
              className={`mobile-nav-link text-sm font-medium transition-colors ${
                activeSection === "how-it-works" ? "active text-[#047857]" : "text-[#52525b]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              วิธีใช้งาน
            </Link>
            <Link
              href="#testimonials"
              role="menuitem"
              aria-label="ไปยังส่วนรีวิวจากผู้ใช้งาน"
              className={`mobile-nav-link text-sm font-medium transition-colors ${
                activeSection === "testimonials" ? "active text-[#047857]" : "text-[#52525b]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              รีวิว
            </Link>
            <Link
              href="#faq"
              role="menuitem"
              aria-label="ไปยังส่วนคำถามที่พบบ่อย"
              className={`mobile-nav-link text-sm font-medium transition-colors ${
                activeSection === "faq" ? "active text-[#047857]" : "text-[#52525b]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              คำถาม
            </Link>
            <a
              href="https://miniapp.line.me/2008237918-mpplkp5Q"
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              aria-label="เปิดใช้งาน GoGoCash ผ่าน Line Mini App"
              className="btn btn-primary mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-bold text-white shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
              style={{ minHeight: "48px", minWidth: "48px" }}
            >
              <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
              <span>เข้าใช้งาน</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
