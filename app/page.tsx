import HomePage from "@/components/home-page";
import { fetchPartnerBrands } from "@/lib/involve-asia";

/** Partners are fetched at build time (static export for Firebase Hosting). Re-run build + deploy to refresh. */

export default async function Page() {
  const partners = await fetchPartnerBrands();
  return <HomePage initialPartners={partners} />;
}
