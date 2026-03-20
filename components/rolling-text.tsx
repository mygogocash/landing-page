"use client";

import { useEffect, useRef, useState } from "react";

interface RollingTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function RollingText({ text, className = "", delay = 0 }: RollingTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={`rolling-text-container ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`rolling-text-char ${isVisible ? "rolling-text-visible" : ""}`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
