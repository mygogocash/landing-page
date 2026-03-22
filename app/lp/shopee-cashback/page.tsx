import type { Metadata } from "next";
import PartnerLpTemplate from "@/components/landing/partner-lp-template";

export const metadata: Metadata = {
  title: "Shopee Cashback — Start on GoGoCash | SEA",
  description:
    "Shopee cashback via GoGoCash: start your session here, then checkout on Shopee so eligible orders track across Southeast Asia.",
  robots: { index: false, follow: false },
};

export default function ShopeeCashbackLpPage() {
  return (
    <PartnerLpTemplate
      partnerName="Shopee"
      headline="Shopee cashback — start your trip on GoGoCash"
      description="Match your ad click to this page: open GoGoCash first, tap Shopee, then shop megasales and daily deals so your session attributes correctly."
      bullets={[
        "Launch GoGoCash before you add items to cart when possible.",
        "Rates and caps change during campaigns; check the live merchant tile first.",
        "If tracking fails, keep your order ID and contact support with screenshots.",
      ]}
    />
  );
}
