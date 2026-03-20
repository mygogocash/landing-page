"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { WhatsAppIcon } from "./brand-icons";

interface SocialIconProps {
  platform: "facebook" | "line" | "instagram" | "twitter" | "youtube" | "tiktok";
  className?: string;
  size?: number;
}

const SocialIcons = {
  facebook: Facebook,
  line: WhatsAppIcon, // Line uses similar icon
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  tiktok: Instagram, // Using Instagram icon as fallback for TikTok
};

export default function SocialIcon({ 
  platform, 
  className = "",
  size = 20 
}: SocialIconProps) {
  const [useFallback, setUseFallback] = useState(false);
  const IconComponent = SocialIcons[platform];

  useEffect(() => {
    // Try to preload the image to check if it exists
    const img = new window.Image();
    img.onerror = () => setUseFallback(true);
    img.onload = () => setUseFallback(false);
    img.src = `/logos/social/${platform}.svg`;
  }, [platform]);

  // Use fallback icon if image doesn't exist
  if (useFallback) {
    return <IconComponent className={className} size={size} aria-hidden="true" />;
  }

  return (
    <Image
      src={`/logos/social/${platform}.svg`}
      alt={`${platform} icon`}
      width={size}
      height={size}
      className={className}
      onError={() => setUseFallback(true)}
      loading="lazy"
    />
  );
}
