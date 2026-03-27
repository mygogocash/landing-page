import LocaleHomePage from "@/components/locale-home-page";
import type { PartnerBrand } from "@/lib/involve-asia";
import { JA_ALPHA, JA_HOME } from "@/lib/copy-ja-home";
import { JAPAN_FAQ_ITEMS } from "@/lib/faq-data-ja";

type JaHomePageProps = {
  initialPartners: PartnerBrand[];
};

export default function JaHomePage({ initialPartners }: JaHomePageProps) {
  return (
    <LocaleHomePage
      initialPartners={initialPartners}
      copy={JA_HOME}
      faqItems={JAPAN_FAQ_ITEMS}
      documentLang="ja"
      partnerLogoAltTemplate="{name} GoGoCash キャッシュバックパートナー"
      alpha={{ badge: JA_ALPHA.badge, message: JA_ALPHA.message }}
    />
  );
}
