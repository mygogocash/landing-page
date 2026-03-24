import Image from "next/image";

interface GoGoCashLogoProps {
  className?: string;
  variant?: "color" | "white";
}

/** Matches previous inline mark: ~53×32px at `h-8` (viewBox 40×24 scaled). */
const MARK_BOX = "h-8 w-[53px] shrink-0";

export default function GoGoCashLogo({
  className = "h-8",
  variant = "color",
}: GoGoCashLogoProps) {
  const textColor = variant === "white" ? "#ffffff" : "#1f2937";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/images/gogocash-logo-mark.svg"
        alt=""
        width={53}
        height={32}
        className={`${MARK_BOX} rounded-[5px] object-contain object-left select-none`}
        aria-hidden
        priority
      />
      <span
        className="text-xl font-bold tracking-tight"
        style={{ color: textColor }}
      >
        GoGoCash
      </span>
    </div>
  );
}
