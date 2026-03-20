"use client";

import Link from "next/link";
import { Home, History, Wallet, User } from "lucide-react";

export default function MobileNav() {
  return (
      <nav className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-outline-variant/15 md:hidden">
        <div className="grid grid-cols-4 h-16">
          <Link
            href="#home"
            className="mobile-nav-link active flex flex-col items-center justify-center gap-1 text-[#00c853]"
          >
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">หน้าแรก</span>
          </Link>
          <Link
            href="#history"
            className="mobile-nav-link flex flex-col items-center justify-center gap-1 text-[#52525b]"
          >
            <History className="h-5 w-5" />
            <span className="text-xs font-medium">ประวัติ</span>
          </Link>
          <Link
            href="#wallet"
            className="mobile-nav-link flex flex-col items-center justify-center gap-1 text-[#52525b]"
          >
            <Wallet className="h-5 w-5" />
            <span className="text-xs font-medium">กระเป๋า</span>
          </Link>
          <Link
            href="#profile"
            className="mobile-nav-link flex flex-col items-center justify-center gap-1 text-[#52525b]"
          >
            <User className="h-5 w-5" />
            <span className="text-xs font-medium">โปรไฟล์</span>
          </Link>
        </div>
      </nav>
  );
}
