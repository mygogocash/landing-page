"use client";

import { useEffect, useState } from "react";

interface ImageSkeletonProps {
  className?: string;
  aspectRatio?: string;
}

export default function ImageSkeleton({
  className = "",
  aspectRatio = "aspect-square",
}: ImageSkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-gradient-to-r from-[#e8e8e8] via-[#f4f4f5] to-[#e8e8e8] ${aspectRatio} ${className}`}
      role="status"
      aria-label="กำลังโหลดรูปภาพ"
    >
      <span className="sr-only">กำลังโหลด...</span>
    </div>
  );
}
