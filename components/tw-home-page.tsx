import LocaleHomePage from "@/components/locale-home-page";
import type { PartnerBrand } from "@/lib/involve-asia";
import { faqItemsForLocale } from "@/lib/locale-faq";
import {
  localeHomeAlpha,
  localeHomeCopy,
} from "@/lib/locale-home-registry";

type TwHomePageProps = {
  initialPartners: PartnerBrand[];
};

export default function TwHomePage({ initialPartners }: TwHomePageProps) {
  const alphaBanner = localeHomeAlpha("tw");
  return (
    <LocaleHomePage
      initialPartners={initialPartners}
      copy={localeHomeCopy("tw")}
      faqItems={faqItemsForLocale("tw")}
      documentLang="zh-TW"
      partnerLogoAltTemplate="{name} GoGoCash 現金回饋合作夥伴"
      alpha={
        alphaBanner
          ? { badge: alphaBanner.badge, message: alphaBanner.message }
          : undefined
      }
    />
  );
}
