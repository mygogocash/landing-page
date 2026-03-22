"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/animate-on-scroll";
import SectionBadge from "@/components/section-badge";
import { Users } from "@/components/icons";
import type { PartnerBrand } from "@/lib/involve-asia";

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
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-sm font-bold text-gray-600"
        aria-hidden
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <Image
      src={logoUrl}
      alt={altForName(name)}
      width={44}
      height={44}
      className="h-11 w-11 shrink-0 object-contain"
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}

type MerchantOffersStripProps = {
  partners: PartnerBrand[];
  /** Override badge label (e.g. Thai landing). */
  sectionBadgeLabel?: string;
  /** Override section heading. */
  heading?: string;
  /** Alt text for partner logos; default English SEO phrase. */
  partnerLogoAlt?: (name: string) => string;
};

const defaultPartnerLogoAlt = (name: string) =>
  `${name} cashback partner GoGoCash`;

export default function MerchantOffersStrip({
  partners,
  sectionBadgeLabel = "Our Brand Partners",
  heading = "Earn cashback with the brands you already love",
  partnerLogoAlt = defaultPartnerLogoAlt,
}: MerchantOffersStripProps) {
  return (
    <section
      id="partners"
      className="scroll-mt-28 border-y border-primary/10 bg-white/60 py-8 backdrop-blur-sm md:py-10"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-site px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-6 flex flex-col items-center text-center md:mb-8">
            <SectionBadge
              icon={<Users className="h-4 w-4" />}
              label={sectionBadgeLabel}
            />
            <h2
              id="partners-heading"
              className="mt-6 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl"
            >
              {heading}
            </h2>
          </div>
        </AnimateOnScroll>
        <div className="-mx-2 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pt-1 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:pb-0">
          {partners.map((p, i) => (
            <AnimateOnScroll
              key={p.id}
              delay={Math.min(i, 20) * 40}
            >
              <div className="flex w-[min(85vw,260px)] shrink-0 snap-center items-center gap-3 rounded-2xl border border-gray-100 bg-mint/80 px-4 py-3 shadow-sm md:w-auto md:min-w-[220px] md:shrink-0">
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
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
