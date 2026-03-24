import { SITE_FACTS } from "@/lib/site-facts";
import type { LocaleHomeCopy } from "@/lib/locale-home-copy";

/**
 * Thai landing page copy.
 * Voice guide: short, benefit-first, warm, neutral-friendly, and natural in Thai.
 * Keep product facts aligned with `SITE_FACTS`.
 */
export const TH_HOME = {
  langNavEnglish: "หน้าภาษาอังกฤษ",
  langNavLocal: "ภาษาไทย",
  breadcrumbNavAria: "สลับภาษา",

  hero: {
    h1: "ช้อปเหมือนเดิม ได้เงินคืนเพิ่ม",
    sub: "กับ GoGoCash",
    body: `รับแคชแบ็กสูงสุด 30% จากร้านดังมากกว่า ${SITE_FACTS.partnerCountLabel} แบรนด์ เช่น ${SITE_FACTS.keyMerchantsShort} และอีกมากมายทั่วเอเชียตะวันออกเฉียงใต้ เริ่มจาก GoGoCash แล้วช้อปตามปกติ ยังมีเควสในแอปให้รับรางวัลเพิ่มอีก`,
    ctaLaunch: "เปิดแอป",
    ctaLine: "ติดต่อทีม (LINE)",
    lineAria: "ติดต่อเราผ่าน LINE",
  },

  partners: {
    badge: "แบรนด์พาร์ตเนอร์",
    title: "หาร้านที่ช้อปประจำ แล้วรับแคชแบ็กกลับมา",
    description: `มีพาร์ตเนอร์มากกว่า ${SITE_FACTS.partnerCountLabel} แบรนด์ทั่วเอเชียตะวันออกเฉียงใต้ แค่เปิดร้านผ่าน GoGoCash ก่อนช้อป ระบบก็จะติดตามออเดอร์และยืนยันแคชแบ็กให้`,
    searchLabel: "ค้นหาร้าน",
    searchPlaceholder: "พิมพ์ชื่อแบรนด์หรือหมวดหมู่",
    searchClear: "ล้าง",
    noResults: "ยังไม่พบแบรนด์นี้ ลองค้นหาด้วยคำอื่น",
    brandsCountAll: "ทั้งหมด {count} แบรนด์",
    brandsCountFiltered: "แสดง {filtered} จาก {total} แบรนด์",
    loadMore: "ดูแบรนด์เพิ่ม",
  },

  why: {
    badge: "ทำไมคนถึงใช้ GoGoCash",
    title: "คุ้ม เข้าใจง่าย และใช้กับร้านที่ช้อปอยู่แล้ว",
    subtitle:
      "ได้เงินคืนจริงจากการช้อปประจำวัน พร้อมดีลและรางวัลที่ช่วยให้ทุกออเดอร์คุ้มขึ้น",
    cards: [
      {
        title: "ได้เงินคืนจริง ไม่ใช่แต้ม",
        body: "เมื่อร้านยืนยันออเดอร์ แคชแบ็กจะเข้ากระเป๋า GoGoCash ของคุณ จะถอนออกหรือเก็บต่อกับ Saving Plus ก็ได้",
      },
      {
        title: "ร้านดังที่คุ้นเคย",
        body: `ช้อปกับพาร์ตเนอร์มากกว่า ${SITE_FACTS.partnerCountLabel} แบรนด์ และเห็นอัตราแคชแบ็กก่อนตัดสินใจทุกครั้ง`,
      },
      {
        title: "มีเควสและโบนัสให้ลุ้นเพิ่ม",
        body: "ทำภารกิจในแอป ปลดล็อกรางวัล และเก็บดีลที่เข้ากับจังหวะช้อปของคุณ",
      },
      {
        title: "มีทีมช่วยเมื่อเจอปัญหา",
        body: "ถ้าแคชแบ็กไม่ติด อยากเช็กสถานะ หรือมีคำถามเรื่องการถอน ทีมพร้อมช่วยดูให้",
      },
    ],
  },

  features: {
    badge: "จุดเด่น",
    title: "GoGoCash ทำให้การรับแคชแบ็กง่ายขึ้น",
    cards: [
      {
        title: "เห็นสถานะแคชแบ็กชัด",
        body: "เริ่มจาก GoGoCash แล้วช้อปตามปกติ จากนั้นคอยดูสถานะติดตาม ยืนยัน และยอดที่พร้อมถอนได้ในแอป",
      },
      {
        title: "มีทีมคอยช่วย",
        body: "ถ้ามีคำถามเรื่องการติดตามยอด การยืนยัน หรือการถอน ติดต่อทีมได้ง่ายผ่านช่องทางที่สะดวก",
      },
      {
        title: "เควสที่คุ้มกับการช้อป",
        body: "เจอภารกิจและโบนัสพิเศษที่ช่วยให้แต่ละออเดอร์คุ้มกว่าเดิม",
      },
    ],
    ctaCard: {
      title: "พร้อมเริ่มรับแคชแบ็กแล้วหรือยัง",
      bodyLine: "เข้าร่วมกับผู้ใช้หลายล้านคน",
      cta: "เริ่มใช้ฟรี",
    },
  },

  howItWorks: {
    title: "เริ่มยังไงก็ง่าย",
    intro: "แค่สามขั้นตอนก็เริ่มรับแคชแบ็กกับ GoGoCash ได้",
    steps: [
      {
        summary: "เปิดร้าน",
        title: "เลือกร้านจาก GoGoCash ก่อนช้อป",
        desc: `เลือกพาร์ตเนอร์มากกว่า ${SITE_FACTS.partnerCountLabel} แบรนด์ทั่วเอเชียตะวันออกเฉียงใต้ แล้วแตะเข้าไปที่ร้านผ่าน GoGoCash เพื่อให้ระบบเริ่มติดตามออเดอร์`,
        bullets: [
          "ดูเรทแคชแบ็กก่อนช้อปได้ทันที",
          "มีทั้ง Shopee, Lazada, Agoda, Trip.com, Samsung และอีกมากมาย",
        ],
      },
      {
        summary: "ช้อป",
        title: "ช้อปเหมือนที่เคย",
        desc: "เลือกสินค้า ใส่ตะกร้า และจ่ายเงินบนเว็บหรือแอปของร้านได้ตามปกติ ไม่ต้องทำขั้นตอนเพิ่มให้ยุ่งยาก",
        bullets: [
          "ใช้บัญชีร้านและวิธีจ่ายเงินเดิมได้",
          "ระบบติดตามจะทำงานอยู่เบื้องหลัง",
        ],
      },
      {
        summary: "รับเงินคืน",
        title: "รอร้านยืนยัน แล้วรับแคชแบ็ก",
        desc: "เมื่อร้านยืนยันคำสั่งซื้อ แคชแบ็กจะเข้าในกระเป๋า GoGoCash ของคุณ จากนั้นติดตามสถานะต่อและถอนเมื่อยอดถึงขั้นต่ำ",
        bullets: [
          "ส่วนใหญ่ยืนยันภายในไม่กี่วัน",
          "ถอนเข้าธนาคารหรือ e-wallet ที่รองรับได้",
        ],
      },
    ],
  },

  download: {
    badge: "เข้าใช้งาน",
    title: "เปิด GoGoCash ในช่องทางที่สะดวกที่สุด",
    desc: "จะใช้ผ่าน Telegram, LINE Mini App หรือเว็บแอปก็ได้ รับแคชแบ็กเหมือนกัน และสลับใช้งานได้ตามที่คุณสะดวก",
    bullets: [
      "เช็กดีลและเควสได้ทุกที่",
      "ดูสถานะออเดอร์และยอดแคชแบ็กได้ง่าย",
    ],
    scanLabel: "สแกนเพื่อเปิดแอป",
    qrCaptionBefore: "สแกนเพื่อเปิด",
    qrCaptionLink: "GoGoCash LINE Mini App",
    qrCaptionAfter: " หรือเลือก Telegram / เว็บแอปทางซ้าย",
    telegram: "เปิดใน Telegram",
    line: "เปิดใน LINE Mini App",
    web: "เปิดเว็บแอป",
    qrAria: "เปิด GoGoCash LINE Mini App (QR)",
    qrAlt: "QR เปิด GoGoCash LINE Mini App",
  },

  learn: {
    badge: "คู่มือสั้น ๆ",
    title: "เรื่องแคชแบ็ก อ่านแล้วเข้าใจทันที",
    readMore: "อ่านต่อ",
    teasers: [
      {
        title: "แคชแบ็กติดตามยังไง",
        desc: "ดูตั้งแต่คลิกเข้าไปจนร้านยืนยันยอด",
        href: "/learn/how-cashback-works",
      },
      {
        title: "ถอนแคชแบ็กเข้าบัญชีหรือวอลเล็ต",
        desc: "เช็กขั้นต่ำ ระยะเวลา และยอดที่ถอนออกได้",
        href: "/learn/withdraw-cashback-gogocash",
      },
      {
        title: "แคชแบ็กไม่เข้า ต้องเช็กอะไรบ้าง",
        desc: "เช็กลิสต์สั้น ๆ ก่อนติดต่อทีมซัพพอร์ต",
        href: "/learn/cashback-not-tracking-fixes",
      },
    ],
  },

  community: {
    badge: "ชุมชน",
    title: "คุยกับทีมและนักช้อป GoGoCash",
    desc: "ตามโปรใหม่ แชร์ทิปการช้อป และขอความช่วยเหลือได้ในช่องทางที่คุณใช้อยู่ประจำ",
  },

  faq: {
    badge: "คำถามที่พบบ่อย",
    title: "คำถามที่คนถามบ่อยก่อนเริ่มใช้ GoGoCash",
    subtitleEnHint: "ถ้าอยากดูรายละเอียดเพิ่มเติม เข้าไปที่",
  },

  finalCta: {
    title: "เริ่มช้อปแล้วรับเงินคืนกับ GoGoCash",
    sub: `เข้าร่วมกับผู้ใช้กว่า ${SITE_FACTS.shopperCommunityLabel} คนที่ทำให้ทุกการจ่ายคุ้มขึ้น`,
    cta: "เปิดแอป",
  },
} satisfies LocaleHomeCopy;
