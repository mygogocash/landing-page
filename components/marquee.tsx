interface MarqueeProps {
  text: string;
  repeat?: number;
}

export default function Marquee({ text, repeat = 8 }: MarqueeProps) {
  const items = Array.from({ length: repeat }, (_, i) => i);

  return (
    <div className="overflow-hidden whitespace-nowrap py-6">
      <div className="animate-marquee inline-flex gap-8">
        {[...items, ...items].map((_, i) => (
          <span
            key={i}
            className="text-4xl font-bold tracking-tight text-[#f0f0f0] md:text-6xl lg:text-7xl"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
