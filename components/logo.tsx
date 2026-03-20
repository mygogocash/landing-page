"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: "default" | "footer" | "header";
}

export default function Logo({ 
  className = "", 
  width, 
  height, 
  variant = "default" 
}: LogoProps) {
  const [imgError, setImgError] = useState(false);
  
  // Default dimensions based on variant
  const defaultWidth = variant === "footer" ? 120 : variant === "header" ? 140 : 160;
  const defaultHeight = variant === "footer" ? 40 : variant === "header" ? 45 : 50;
  
  const logoWidth = width || defaultWidth;
  const logoHeight = height || defaultHeight;

  // Try to load logo, fallback to text if not found
  if (imgError) {
    return (
      <Link href="/" className={`inline-block ${className}`} aria-label="GoGoCash หน้าแรก">
        <span className="text-xl font-bold text-[#064e3b] tracking-[-1.2px] lg:text-2xl">
          GoGoCash
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" className={`inline-block ${className}`} aria-label="GoGoCash หน้าแรก">
      <Image
        src="/logos/gogocash-logo.svg"
        alt="GoGoCash - ช้อปฉลาด รับเงินคืนทันที"
        width={logoWidth}
        height={logoHeight}
        priority
        className="h-auto w-auto object-contain"
        onError={() => setImgError(true)}
        onLoadingComplete={(result) => {
          if (result.naturalWidth === 0) {
            setImgError(true);
          }
        }}
      />
    </Link>
  );
}
