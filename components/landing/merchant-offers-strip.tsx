"use client";

import { useId, useMemo, useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/animate-on-scroll";
import SectionBadge from "@/components/section-badge";
import { Search, Users } from "@/components/icons";
import { encodePublicPath } from "@/lib/encode-public-path";
import { SITE_FACTS } from "@/lib/site-facts";
import type { PartnerBrand } from "@/lib/involve-asia";

/** Initial visible cards; more load on demand to limit scroll animations / layout work. */
const BRANDS_INITIAL_VISIBLE = 48;
const BRANDS_LOAD_MORE_STEP = 48;
/** Only the first N cards use scroll-in animation (IntersectionObserver per item). */
const BRANDS_ANIMATED_CAP = 24;

function fillTemplate(
  template: string,
  vars: Record<string, string | number>,
): string {
  let out = template;
  for (const [key, value] of Object.entries(vars)) {
    out = out.split(`{${key}}`).join(String(value));
  }
  return out;
}

function PartnerLogo({
  name,
  logoUrl,
  altForName,
}: {
  name: string;
  logoUrl: string | null;
  altForName: (name: string) => string;
}) {
  const [failed, setFailed] = useState(!logoUrl);

  if (!logoUrl || failed) {
    return (
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[5px] bg-gray-100 text-sm font-bold text-gray-600"
        aria-hidden
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  const src = encodePublicPath(logoUrl);

  return (
    <Image
      src={src}
      alt={altForName(name)}
      width={44}
      height={44}
      className="h-11 w-11 shrink-0 rounded-[5px] object-contain"
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}

const DEFAULT_DESCRIPTION = `Browse and search ${SITE_FACTS.partnerCountLabel} cashback brands across ${SITE_FACTS.regionLabel}. Open each store from ${SITE_FACTS.brandName} before you checkout so your visit can be tracked and cashback confirmed after the merchant validates your order.`;

const DEFAULT_SEARCH_LABEL = "Search brands";
const DEFAULT_SEARCH_PLACEHOLDER = "Search by brand name or category";
const DEFAULT_SEARCH_CLEAR = "Clear";
const DEFAULT_NO_RESULTS =
  "No brands match your search. Try a different keyword.";
const DEFAULT_COUNT_ALL = "{count} brands";
const DEFAULT_COUNT_FILTERED = "{filtered} of {total} brands";
const DEFAULT_LOAD_MORE = "Load more brands";

type MerchantOffersStripProps = {
  partners: PartnerBrand[];
  /** Override badge label (e.g. Thai landing). */
  sectionBadgeLabel?: string;
  /** Override section heading. */
  heading?: string;
  /** Intro copy under the heading. */
  description?: string;
  searchLabel?: string;
  searchPlaceholder?: string;
  searchClearLabel?: string;
  noResultsMessage?: string;
  /** Replace `{count}` with total brands. */
  brandsCountAll?: string;
  /** Replace `{filtered}` and `{total}` when filtering. */
  brandsCountFiltered?: string;
  loadMoreLabel?: string;
  /** Alt text for partner logos; default English SEO phrase. */
  partnerLogoAlt?: (name: string) => string;
};

const defaultPartnerLogoAlt = (name: string) =>
  `${name} cashback partner GoGoCash`;

type MerchantBrandsGridProps = {
  filtered: PartnerBrand[];
  noResultsMessage: string;
  loadMoreLabel: string;
  loadMoreId: string;
  partnerLogoAlt: (name: string) => string;
};

/** Keyed by search + partner count so visible cap resets without a reset effect. */
function MerchantBrandsGrid({
  filtered,
  noResultsMessage,
  loadMoreLabel,
  loadMoreId,
  partnerLogoAlt,
}: MerchantBrandsGridProps) {
  const [visibleCap, setVisibleCap] = useState(BRANDS_INITIAL_VISIBLE);

  const visibleSlice = useMemo(
    () => filtered.slice(0, visibleCap),
    [filtered, visibleCap],
  );

  const hasMore = filtered.length > visibleSlice.length;

  return (
    <>
      <div
        id="brands-grid"
        className="-mx-2 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pt-1 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:pb-0"
        role="list"
      >
        {filtered.length === 0 ? (
          <p
            className="w-full py-8 text-center text-sm text-gray-500 md:text-base"
            role="status"
            aria-live="polite"
          >
            {noResultsMessage}
          </p>
        ) : (
          visibleSlice.map((p, i) => {
            const card = (
              <div
                role="listitem"
                className="flex w-[min(85vw,260px)] shrink-0 snap-center items-center gap-3 rounded-2xl border border-gray-100 bg-mint/80 px-4 py-3 shadow-sm md:w-auto md:min-w-[220px] md:shrink-0"
              >
                <PartnerLogo
                  name={p.name}
                  logoUrl={p.logoUrl}
                  altForName={partnerLogoAlt}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-base font-bold text-gray-800">{p.name}</p>
                  <p className="text-xs font-medium text-gray-500">
                    {p.category}
                  </p>
                </div>
              </div>
            );
            if (i < BRANDS_ANIMATED_CAP) {
              return (
                <AnimateOnScroll
                  key={p.id}
                  delay={Math.min(i, 20) * 40}
                >
                  {card}
                </AnimateOnScroll>
              );
            }
            return <div key={p.id}>{card}</div>;
          })
        )}
      </div>

      {hasMore ? (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            id={loadMoreId}
            className="rounded-full border border-primary/30 bg-white px-6 py-2.5 text-sm font-semibold text-primary shadow-sm transition hover:bg-surface-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={() =>
              setVisibleCap((c) =>
                Math.min(c + BRANDS_LOAD_MORE_STEP, filtered.length),
              )
            }
          >
            {loadMoreLabel}
          </button>
        </div>
      ) : null}
    </>
  );
}

export default function MerchantOffersStrip({
  partners,
  sectionBadgeLabel = "Our Brand Partners",
  heading = "Earn cashback with the brands you already love",
  description = DEFAULT_DESCRIPTION,
  searchLabel = DEFAULT_SEARCH_LABEL,
  searchPlaceholder = DEFAULT_SEARCH_PLACEHOLDER,
  searchClearLabel = DEFAULT_SEARCH_CLEAR,
  noResultsMessage = DEFAULT_NO_RESULTS,
  brandsCountAll = DEFAULT_COUNT_ALL,
  brandsCountFiltered = DEFAULT_COUNT_FILTERED,
  loadMoreLabel = DEFAULT_LOAD_MORE,
  partnerLogoAlt = defaultPartnerLogoAlt,
}: MerchantOffersStripProps) {
  const sectionDescId = useId();
  const searchId = useId();
  const resultsStatusId = useId();
  const loadMoreId = useId();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return partners;
    return partners.filter((p) => {
      const name = p.name.toLowerCase();
      const cat = p.category.toLowerCase();
      return name.includes(q) || cat.includes(q);
    });
  }, [partners, query]);

  const total = partners.length;
  const filteredCount = filtered.length;
  const isFiltered = query.trim().length > 0;

  const countLine = fillTemplate(
    isFiltered ? brandsCountFiltered : brandsCountAll,
    isFiltered
      ? { filtered: filteredCount, total }
      : { count: total },
  );

  return (
    <section
      id="brands"
      className="scroll-mt-28 border-y border-primary/10 bg-white/60 py-8 backdrop-blur-sm md:py-10"
      aria-labelledby="brands-heading"
      aria-describedby={description ? sectionDescId : undefined}
    >
      <div className="mx-auto max-w-site px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-6 flex flex-col items-center text-center md:mb-8">
            <SectionBadge
              icon={<Users className="h-4 w-4" />}
              label={sectionBadgeLabel}
            />
            <h2
              id="brands-heading"
              className="mt-6 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl"
            >
              {heading}
            </h2>
            {description ? (
              <p
                id={sectionDescId}
                className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-gray-600 md:text-lg"
              >
                {description}
              </p>
            ) : null}
          </div>
        </AnimateOnScroll>

        <div className="mx-auto mb-6 w-full max-w-md md:max-w-lg">
          <label htmlFor={searchId} className="sr-only">
            {searchLabel}
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              aria-hidden
            />
            <input
              id={searchId}
              type="search"
              name="brand-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchPlaceholder}
              autoComplete="off"
              spellCheck={false}
              className={`w-full rounded-full border border-gray-200 bg-white py-3 pl-11 text-sm text-gray-900 shadow-sm outline-none ring-primary/20 transition placeholder:text-gray-400 focus:border-primary focus:ring-2 md:text-base ${query ? "pr-[4.25rem]" : "pr-4"}`}
              aria-controls="brands-grid"
              aria-describedby={resultsStatusId}
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label={searchClearLabel}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-2 py-1 text-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                {searchClearLabel}
              </button>
            ) : null}
          </div>
          <p
            id={resultsStatusId}
            className="mt-2 text-center text-sm text-gray-500"
            aria-live="polite"
          >
            {countLine}
          </p>
        </div>

        <MerchantBrandsGrid
          key={`${query}:${partners.length}`}
          filtered={filtered}
          noResultsMessage={noResultsMessage}
          loadMoreLabel={loadMoreLabel}
          loadMoreId={loadMoreId}
          partnerLogoAlt={partnerLogoAlt}
        />
      </div>
    </section>
  );
}
