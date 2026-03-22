interface GoGoCashLogoProps {
  className?: string;
  variant?: "color" | "white";
}

export default function GoGoCashLogo({
  className = "h-8",
  variant = "color",
}: GoGoCashLogoProps) {
  const iconColor = variant === "white" ? "#ffffff" : "#10b981";
  const textColor = variant === "white" ? "#ffffff" : "#1f2937";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* GO icon */}
      <svg
        viewBox="0 0 40 24"
        fill="none"
        className="h-full"
        aria-hidden="true"
      >
        {/* G shape */}
        <path
          d="M8 4C4.686 4 2 6.686 2 10s2.686 6 6 6c2.21 0 4.157-1.194 5.196-2.971L10 10h4c0 4.418-3.582 8-8 8S-2 14.418-2 10 1.582 2 6 2c1.657 0 3.157.504 4.414 1.366"
          fill={iconColor}
          transform="translate(2, 2) scale(0.9)"
        />
        {/* O shape (infinity-like) */}
        <path
          d="M28 12c0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6 6-2.686 6-6zm-2 0c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"
          fill={iconColor}
        />
      </svg>
      {/* GoGoCash text */}
      <span
        className="text-xl font-bold tracking-tight"
        style={{ color: textColor }}
      >
        GoGoCash
      </span>
    </div>
  );
}
