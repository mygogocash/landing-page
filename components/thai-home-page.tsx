import LocaleHomePage from "@/components/locale-home-page";
import type { PartnerBrand } from "@/lib/involve-asia";
import { TH_HOME } from "@/lib/copy-th-home";
import { THAI_FAQ_ITEMS } from "@/lib/faq-data-th";

type ThaiHomePageProps = {
  initialPartners: PartnerBrand[];
};

export default function ThaiHomePage({ initialPartners }: ThaiHomePageProps) {
  return (
    <LocaleHomePage
      initialPartners={initialPartners}
      copy={TH_HOME}
      faqItems={THAI_FAQ_ITEMS}
      documentLang="th"
      partnerLogoAltTemplate="{name} พันธมิตรแคชแบ็ก GoGoCash"
    />
  );
}
