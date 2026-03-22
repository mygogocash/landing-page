/** High-visibility callout for locale pages still in preview (e.g. TW / JA). */
export default function AlphaLocaleBanner({
  badge,
  message,
}: {
  badge: string;
  message: string;
}) {
  return (
    <div
      role="status"
      className="border-b border-amber-400/60 bg-gradient-to-r from-amber-200/90 via-amber-100 to-orange-100 px-4 py-3 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)]"
    >
      <p className="mx-auto max-w-3xl text-pretty text-sm font-medium leading-relaxed text-amber-950 md:text-[0.9375rem]">
        <span className="mr-2 inline-flex align-middle">
          <span className="inline-flex items-center rounded-md bg-amber-600 px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-white shadow-md ring-1 ring-amber-800/20">
            {badge}
          </span>
        </span>
        {message}
      </p>
    </div>
  );
}
