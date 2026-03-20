"use client";

import Image from "next/image";
import { Store } from "lucide-react";
import { useState } from "react";

interface StoreLogoProps {
  storeName: string;
  logoUrl?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function StoreLogo({ 
  storeName, 
  logoUrl, 
  className = "",
  size = "md" 
}: StoreLogoProps) {
  const [imgError, setImgError] = useState(false);
  
  const sizeClasses = {
    sm: "h-8 w-8 sm:h-10 sm:w-10",
    md: "h-12 w-12 sm:h-16 sm:w-16",
    lg: "h-16 w-16 sm:h-20 sm:w-20"
  };

  // Try to load store logo, fallback to icon if not found
  if (imgError || !logoUrl) {
    return (
      <div 
        className={`flex items-center justify-center ${sizeClasses[size]} ${className}`}
        role="img"
        aria-label={`โลโก้ร้าน ${storeName}`}
      >
        <Store className="h-full w-full text-primary/40" aria-hidden="true" />
      </div>
    );
  }

  // Calculate explicit dimensions for CLS prevention
  const dimensions = {
    sm: { width: 40, height: 40 },
    md: { width: 64, height: 64 },
    lg: { width: 80, height: 80 }
  };
  const { width, height } = dimensions[size];

  return (
    <div className={`relative flex items-center justify-center ${sizeClasses[size]} ${className}`} style={{ width, height }}>
      <Image
        src={logoUrl}
        alt={`โลโก้ร้าน ${storeName}`}
        width={width}
        height={height}
        className="object-contain"
        onError={() => setImgError(true)}
        sizes="(max-width: 640px) 48px, 64px"
        loading="lazy"
      />
    </div>
  );
}
