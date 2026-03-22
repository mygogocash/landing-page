import { SITE_FACTS } from "@/lib/site-facts";
import type { LocaleHomeCopy } from "@/lib/locale-home-copy";

/** Taiwan (Traditional Chinese) landing — align numbers with `SITE_FACTS`. */
export const TW_HOME = {
  langNavEnglish: "English site",
  langNavLocal: "繁體中文（台灣）",
  breadcrumbNavAria: "語言",

  hero: {
    h1: "每次消費都能省",
    sub: "就用 GoGoCash",
    body: `在超過 ${SITE_FACTS.partnerCountLabel} 個品牌最高享 30% 現金回饋 — ${SITE_FACTS.keyMerchantsShort} 等，涵蓋東南亞各地。完成 App 內任務還可解鎖專屬獎勵。`,
    ctaLaunch: "開啟 App",
    ctaLine: "聯絡我們（LINE）",
    lineAria: "透過 LINE 聯絡 GoGoCash",
  },

  partners: {
    badge: "品牌夥伴",
    title: "在你熟悉的品牌賺現金回饋",
  },

  why: {
    badge: "為什麼選 GoGoCash",
    title: "為東南亞日常消費而設計",
    subtitle:
      "回饋清楚、商店熟悉、獎勵真的用得到 — 網頁與 Mini App 都能用。",
    cards: [
      {
        title: "真實現金回饋，不是點數",
        body: "錢直接進錢包 — 可花用，也可透過 Saving Plus 累積成長。",
      },
      {
        title: "值得信賴的商家",
        body: `在東南亞超過 ${SITE_FACTS.partnerCountLabel} 個知名品牌消費，買前先看清回饋比例。`,
      },
      {
        title: "為你量身打造的任務",
        body: "依你的購物習慣推出挑戰與檔期限定加碼。",
      },
      {
        title: "需要時就找得到支援",
        body: "追蹤或提領有疑問？團隊隨時協助。",
      },
    ],
  },

  features: {
    badge: "重點功能",
    title: "GoGoCash 有什麼不同",
    cards: [
      {
        title: "快速入帳的現金回饋",
        body: "商家核准訂單後即可獲得真實回饋 — 沒有複雜點數，確認後進入錢包。",
      },
      {
        title: "全天候客服",
        body: "有問題？團隊透過聊天與電子郵件隨時協助。",
      },
      {
        title: "個人化任務",
        body: "完成趣味購物挑戰，解鎖額外獎勵與專屬優惠。",
      },
    ],
    ctaCard: {
      title: "準備開始省錢了嗎？",
      bodyLine: "加入數百萬聰明消費者的行列",
      cta: "免費開始",
    },
  },

  howItWorks: {
    title: "開始使用 GoGoCash",
    intro: "在東南亞現金回饋怎麼運作？三個步驟就夠了。",
    steps: [
      {
        summary: "選商家",
        title: "從 GoGoCash 選擇並開啟商家",
        desc: `瀏覽超過 ${SITE_FACTS.partnerCountLabel} 個電商與旅遊夥伴，涵蓋 ${SITE_FACTS.regionLabel}。比較回饋後從 GoGoCash 開啟商家，讓系統能追蹤你的造訪。`,
        bullets: [
          "Lazada、Shopee、Agoda、Samsung、Trip.com 等",
          "消費前先看透明回饋比例",
        ],
      },
      {
        summary: "照常購物",
        title: "用你習慣的方式結帳",
        desc: "在商家網站或 App 加入購物車並付款，無需額外輸入優惠碼。",
        bullets: [
          "使用你原本的帳號與付款方式",
          "GoGoCash 在背景追蹤訂單",
        ],
      },
      {
        summary: "賺回饋",
        title: "商家確認後入帳",
        desc: "商家確認訂單後，現金回饋會進入 GoGoCash 錢包。在 App 追蹤，達門檻即可提領。",
        bullets: ["通常幾天內確認", "滿額可提領至銀行或電子錢包"],
      },
    ],
  },

  download: {
    badge: "開啟 App",
    title: "用你熟悉的 App 使用 GoGoCash",
    desc: "Telegram 或 LINE Mini App，或直接開網頁版 — 回饋相同，小螢幕也順手。",
    bullets: ["隨時查看優惠與任務", "回饋加碼時收到通知"],
    scanLabel: "掃描開啟",
    qrCaptionBefore: "開啟",
    qrCaptionLink: "GoGoCash LINE Mini App",
    qrCaptionAfter: " — 或使用左側 Telegram／網頁版",
    telegram: "Telegram Mini App",
    line: "LINE Mini App",
    web: "開啟網頁版",
    qrAria: "掃描開啟 GoGoCash LINE Mini App",
    qrAlt: "開啟 GoGoCash LINE Mini App 的 QR Code",
  },

  learn: {
    badge: "學習中心",
    title: "聰明省錢，簡單說明",
    readMore: "閱讀全文",
    teasers: [
      {
        title: "現金回饋如何追蹤",
        desc: "從點擊到商家確認，背後發生什麼事。",
        href: "/learn/how-cashback-works",
      },
      {
        title: "提領至銀行或電子錢包",
        desc: "門檻、時間與「已確認」餘額代表什麼。",
        href: "/learn/withdraw-cashback-gogocash",
      },
      {
        title: "回饋沒入帳？",
        desc: "聯絡客服前的簡短檢查清單。",
        href: "/learn/cashback-not-tracking-fixes",
      },
    ],
  },

  community: {
    badge: "社群",
    title: "加入 GoGoCash 社群",
    desc: "與團隊和其他用戶交流心得、優惠與支援 — 選擇你常用的頻道。",
  },

  faq: {
    badge: "常見問題",
    title: "關於 GoGoCash 的常見問題",
    subtitleEnHint: "更多英文詳情請見首頁或 Learn 文章",
  },

  finalCta: {
    title: "準備好每次消費都更聰明了嗎？",
    sub: `與超過 ${SITE_FACTS.shopperCommunityLabel} 位用戶一起輕鬆賺現金回饋`,
    cta: "開啟 App",
  },
} satisfies LocaleHomeCopy;

export const TW_ALPHA = {
  badge: "Alpha",
  message:
    "此頁面為搶先體驗版：介面與 FAQ 為繁體中文，部分連結內容仍為英文。",
} as const;
