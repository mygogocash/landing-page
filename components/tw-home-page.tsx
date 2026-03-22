"use client";

import LocaleHomePage from "@/components/locale-home-page";
import type { PartnerBrand } from "@/lib/involve-asia";
import { TW_ALPHA, TW_HOME } from "@/lib/copy-tw-home";
import { TAIWAN_FAQ_ITEMS } from "@/lib/faq-data-tw";

type TwHomePageProps = {
  initialPartners: PartnerBrand[];
};

export default function TwHomePage({ initialPartners }: TwHomePageProps) {
  return (
    <LocaleHomePage
      initialPartners={initialPartners}
      copy={TW_HOME}
      faqItems={TAIWAN_FAQ_ITEMS}
      documentLang="zh-TW"
      partnerLogoAlt={(name) => `${name} GoGoCash 現金回饋合作夥伴`}
      alpha={{ badge: TW_ALPHA.badge, message: TW_ALPHA.message }}
    />
  );
}
