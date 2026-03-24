import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { fetchPartnerBrands } from "@/lib/involve-asia";
import { HREFLANG_LANDING_ALTERNATES } from "@/lib/seo-constants";
import { siteSeoOneLiner } from "@/lib/site-facts";

/** Same content as `/`; canonical points home to avoid duplicate English URLs in search. */
export const metadata: Metadata = {
  title: "GoGoCash — Earn Up to 30% Cashback | Shop Smarter in SEA",
  description: `${siteSeoOneLiner()} Free to join.`,
  alternates: { canonical: "/", languages: HREFLANG_LANDING_ALTERNATES },
  openGraph: {
    locale: "en_US",
    title: "GoGoCash — Earn Up to 30% Cashback | Shop Smarter in SEA",
    description: `${siteSeoOneLiner()} Free to join.`,
  },
};

export default async function EnglishPage() {
  const partners = await fetchPartnerBrands();
  return <HomePage initialPartners={partners} />;
}
