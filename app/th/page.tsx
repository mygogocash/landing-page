import type { Metadata } from "next";
import ThaiHomePage from "@/components/thai-home-page";
import { fetchPartnerBrands } from "@/lib/involve-asia";
import { HREFLANG_LANDING_ALTERNATES } from "@/lib/seo-constants";

export const metadata: Metadata = {
  title: "GoGoCash | ช้อปแล้วรับแคชแบ็กสูงสุด 30%",
  description:
    "เริ่มช้อปผ่าน GoGoCash กับ Shopee, Lazada, Agoda และร้านพาร์ตเนอร์กว่า 70 แบรนด์ทั่วเอเชียตะวันออกเฉียงใต้ รับแคชแบ็กจริง ใช้ฟรี และติดตามยอดได้ง่าย",
  alternates: { canonical: "/th", languages: HREFLANG_LANDING_ALTERNATES },
  openGraph: {
    locale: "th_TH",
    title: "GoGoCash | แคชแบ็กจริงจากร้านที่ช้อปอยู่แล้ว",
    description:
      "เริ่มจาก GoGoCash แล้วช้อปตามปกติ รับแคชแบ็กจากพาร์ตเนอร์กว่า 70 แบรนด์ เช่น Shopee, Lazada และ Agoda",
  },
};

/** Thai landing mirrors the English homepage structure; partners load at build time. */
export default async function ThaiLandingPage() {
  const partners = await fetchPartnerBrands();
  return <ThaiHomePage initialPartners={partners} />;
}
