import type { Metadata } from "next";
import PartnerLpTemplate from "@/components/landing/partner-lp-template";

export const metadata: Metadata = {
  title: "Agoda Cashback — Hotels & Stays | GoGoCash",
  description:
    "Agoda travel cashback: start from GoGoCash, complete your booking on Agoda, and track rewards when the stay or trip confirms.",
  robots: { index: false, follow: false },
};

export default function AgodaTravelCashbackLpPage() {
  return (
    <PartnerLpTemplate
      partnerName="Agoda"
      headline="Agoda cashback for hotels — start on GoGoCash"
      description="Paid traffic landing: begin on GoGoCash, book on Agoda as usual. Travel often confirms later than retail; your wallet updates when the partner validates."
      bullets={[
        "Read whether cashback tracks on booking date or after stay.",
        "Cancellations usually reverse pending rewards automatically.",
        "Keep confirmation emails until cashback shows as confirmed.",
      ]}
    />
  );
}
