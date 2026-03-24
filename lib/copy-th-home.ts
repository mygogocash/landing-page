import { SITE_FACTS } from "@/lib/site-facts";
import type { LocaleHomeCopy } from "@/lib/locale-home-copy";

/** Thai landing page copy — keep numbers aligned with `SITE_FACTS`. */
export const TH_HOME = {
  langNavEnglish: "English site",
  langNavLocal: "ภาษาไทย",
  breadcrumbNavAria: "เลือกภาษา",

  hero: {
    h1: "ประหยัดทุกครั้งที่จ่าย",
    sub: "กับ GoGoCash",
    body: `รับแคชแบ็กสูงสุด 30% ที่ร้านค้ากว่า ${SITE_FACTS.partnerCountLabel} แบรนด์ — ${SITE_FACTS.keyMerchantsShort} และอื่น ๆ ทั่วเอเชียตะวันออกเฉียงใต้ เล่นเควสในแอปแล้วรับรางวัลพิเศษ`,
    ctaLaunch: "เปิดแอป",
    ctaLine: "ติดต่อทีม (LINE)",
    lineAria: "ติดต่อเราผ่าน LINE",
  },

  partners: {
    badge: "พันธมิตรแบรนด์",
    title: "รับแคชแบ็กกับแบรนด์ที่คุณช้อปอยู่แล้ว",
    description: `ค้นหาและเลือกร้านจากรายการแคชแบ็กกว่า ${SITE_FACTS.partnerCountLabel} แบรนด์ทั่ว${SITE_FACTS.regionLabel} — เปิดลิงก์จาก GoGoCash ก่อนช้อปเพื่อให้ระบบติดตามและยืนยันยอดได้`,
    searchLabel: "ค้นหาแบรนด์",
    searchPlaceholder: "พิมพ์ชื่อร้านหรือหมวดหมู่…",
    searchClear: "ล้าง",
    noResults: "ไม่พบแบรนด์ที่ตรงกับคำค้น — ลองคำอื่นดูครับ",
    brandsCountAll: "ทั้งหมด {count} แบรนด์",
    brandsCountFiltered: "แสดง {filtered} จาก {total} แบรนด์",
    loadMore: "โหลดแบรนด์เพิ่ม",
  },

  why: {
    badge: "ทำไมต้อง GoGoCash",
    title: "ออกแบบมาให้ช้อปประจำวันในเอเชียตะวันออกเฉียงใต้",
    subtitle:
      "คุ้มค่าชัดเจน ร้านคุ้นเคย และรางวัลที่ใช้ได้จริง — บนเว็บและมินิแอป",
    cards: [
      {
        title: "แคชแบ็กจริง ไม่ใช่แต้ม",
        body: "เงินคืนเข้ากระเป๋า — ใช้จ่ายหรือเติบโตกับ Saving Plus ตามที่คุณเลือก",
      },
      {
        title: "ร้านค้าไว้ใจได้",
        body: `ช้อปกว่า ${SITE_FACTS.partnerCountLabel} แบรนด์ใน SEA เห็นเรทชัดก่อนจ่าย`,
      },
      {
        title: "เควสที่เหมาะกับคุณ",
        body: "ภารกิจช้อปและโปรช่วงซีซันที่เข้ากับพฤติกรรมจริง",
      },
      {
        title: "ซัพพอร์ตเมื่อคุณต้องการ",
        body: "สงสัยเรื่องแทร็กหรือการถอน ทีมพร้อมช่วยตลอด",
      },
    ],
  },

  features: {
    badge: "ฟีเจอร์เด่น",
    title: "อะไรที่ทำให้ GoGoCash ต่าง",
    cards: [
      {
        title: "แคชแบ็กรวดเร็ว",
        body: "รับเงินคืนจริงทุกการสั่งซื้อที่ร้านอนุมัติ — ไม่มีแต้มซับซ้อน เข้ากระเป๋าเมื่อออเดอร์ผ่านการยืนยัน",
      },
      {
        title: "ซัพพอร์ต 24/7",
        body: "มีคำถาม? ทีมพร้อมช่วยทั้งแชทและอีเมล",
      },
      {
        title: "เควสเฉพาะคุณ",
        body: "ภารกิจช้อปสนุก ๆ ปลดล็อกโบนัสและดีลพิเศษ",
      },
    ],
    ctaCard: {
      title: "พร้อมเริ่มประหยัด?",
      bodyLine: "เข้าร่วมกับผู้ใช้หลายล้านคน",
      cta: "เริ่มใช้ฟรี",
    },
  },

  howItWorks: {
    title: "เริ่มต้นกับ GoGoCash",
    intro: "แคชแบ็กในเอเชียตะวันออกเฉียงใต้ทำงานยังไง? สามขั้นตอนนี้ช่วยคุณได้",
    steps: [
      {
        summary: "เลือกร้าน",
        title: "เลือกและเปิดร้านจาก GoGoCash",
        desc: `สำรวจพันธมิตรอีคอมเมิร์ซและท่องเที่ยวกว่า ${SITE_FACTS.partnerCountLabel} รายทั่ว ${SITE_FACTS.regionLabel} เปรียบเทียบเรทแล้วแตะเข้าร้านจาก GoGoCash เพื่อให้ระบบแทร็กเซสชัน`,
        bullets: [
          "Lazada, Shopee, Agoda, Samsung, Trip.com และอื่น ๆ",
          "เห็นเรทก่อนช้อปชัดเจน",
        ],
      },
      {
        summary: "ช้อปตามปกติ",
        title: "ช้อปแบบที่คุณเคย",
        desc: "ใส่ตะกร้าและชำระเงินที่เว็บหรือแอปร้านตามปกติ ไม่ต้องกรอกคูปองพิเศษ",
        bullets: [
          "ใช้บัญชีและวิธีชำระเงินเดิมของคุณ",
          "GoGoCash ติดตามคำสั่งซื้อเบื้องหลัง",
        ],
      },
      {
        summary: "รับแคชแบ็ก",
        title: "เงินคืนหลังร้านยืนยัน",
        desc: "เมื่อร้านยืนยันออเดอร์ แคชแบ็กเข้ากระเป๋า GoGoCash ติดตามในแอปแล้วถอนเมื่อถึงขั้นต่ำ",
        bullets: [
          "มักยืนยันภายในไม่กี่วัน",
          "ถอนเข้าธนาคารหรือ e-wallet เมื่อครบยอด",
        ],
      },
    ],
  },

  download: {
    badge: "เปิดแอป",
    title: "ใช้ GoGoCash ผ่านแอปที่คุณถนัด",
    desc: "Telegram หรือ LINE มินิแอป หรือเว็บแอป — แคชแบ็กเดียวกัน เล็กหน้าจอใช้งานสะดวก",
    bullets: [
      "ดูดีลและเควสได้ทุกที่",
      "แจ้งเตือนเมื่อเรทพุ่ง",
    ],
    scanLabel: "สแกนเพื่อเปิด",
    qrCaptionBefore: "เปิด",
    qrCaptionLink: "GoGoCash LINE Mini App",
    qrCaptionAfter: " — หรือใช้ Telegram / เว็บทางซ้าย",
    telegram: "Telegram Mini App",
    line: "LINE Mini App",
    web: "เปิดเว็บแอป",
    qrAria: "เปิด GoGoCash LINE Mini App (QR)",
    qrAlt: "QR เปิด GoGoCash LINE Mini App",
  },

  learn: {
    badge: "เรียนรู้",
    title: "ประหยัดฉลาด อธิบายแบบเข้าใจง่าย",
    readMore: "อ่านต่อ",
    teasers: [
      {
        title: "แคชแบ็กติดตามยังไง",
        desc: "จากคลิกจนถึงตอนร้านยืนยัน",
        href: "/learn/how-cashback-works",
      },
      {
        title: "ถอนแคชแบ็กเข้าบัญชี / วอลเล็ต",
        desc: "ขั้นต่ำ เวลา และยอดที่ยืนยันแล้ว",
        href: "/learn/withdraw-cashback-gogocash",
      },
      {
        title: "แคชแบ็กไม่ติด?",
        desc: "เช็กลิสต์สั้น ๆ ก่อนติดต่อซัพพอร์ต",
        href: "/learn/cashback-not-tracking-fixes",
      },
    ],
  },

  community: {
    badge: "ชุมชน",
    title: "เข้าร่วมชุมชน GoGoCash",
    desc: "เทียบทิป โปร และซัพพอร์ตจากทีมกับเพื่อนนักช้อป — เลือกช่องที่คุณใช้",
  },

  faq: {
    badge: "คำถามที่พบบ่อย",
    title: "คำถามที่พบบ่อยเกี่ยวกับ GoGoCash",
    subtitleEnHint:
      "รายละเอียดเพิ่มเติมภาษาอังกฤษที่หน้าหลักหรือบทความใน Learn",
  },

  finalCta: {
    title: "พร้อมประหยัดทุกครั้งที่จ่ายหรือยัง?",
    sub: `เข้าร่วมกับผู้ใช้กว่า ${SITE_FACTS.shopperCommunityLabel} คนที่รับแคชแบ็กแบบง่าย ๆ`,
    cta: "เปิดแอป",
  },
} satisfies LocaleHomeCopy;
