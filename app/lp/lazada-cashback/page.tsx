import type { Metadata } from "next";
import PartnerLpTemplate from "@/components/landing/partner-lp-template";

export const metadata: Metadata = {
  title: "Lazada Cashback — GoGoCash | Marketplace SEA",
  description:
    "Lazada cashback with GoGoCash: one continuous session from our link to Lazada checkout helps qualifying orders track.",
  robots: { index: false, follow: false },
};

export default function LazadaCashbackLpPage() {
  return (
    <PartnerLpTemplate
      partnerName="Lazada"
      headline="Lazada cashback — keep one session from GoGoCash"
      description="SEM landing: launch GoGoCash, open Lazada from our merchant tile, then pay on the same device and browser when possible."
      bullets={[
        "Category-level rates can differ — electronics vs fashion vs groceries.",
        "Vouchers from other channels may change eligibility; read the merchant note.",
        "Traveling? Start the trip from GoGoCash on the device you will pay with.",
      ]}
    />
  );
}
