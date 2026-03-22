import { SITE_FACTS } from "@/lib/site-facts";
import type { LocaleHomeCopy } from "@/lib/locale-home-copy";

/** Japanese landing — align numbers with `SITE_FACTS`. */
export const JA_HOME = {
  langNavEnglish: "English site",
  langNavLocal: "日本語",
  breadcrumbNavAria: "言語",

  hero: {
    h1: "毎回のお支払いでお得に",
    sub: "GoGoCash で",
    body: `${SITE_FACTS.partnerCountLabel} 以上のストアで最大 30% のキャッシュバック — ${SITE_FACTS.keyMerchantsShort} など、${SITE_FACTS.regionLabel} 各地で。アプリのクエストをクリアして特典も解放。`,
    ctaLaunch: "アプリを開く",
    ctaLine: "LINE で問い合わせ",
    lineAria: "LINE で GoGoCash に問い合わせる",
  },

  partners: {
    badge: "ブランドパートナー",
    title: "いつも使うブランドでキャッシュバック",
  },

  why: {
    badge: "GoGoCash を選ぶ理由",
    title: "東南アジアの日常買い物のために設計",
    subtitle:
      "還元がわかりやすく、馴染みの店舗で、実用的な特典 — Web とミニアプリの両方で。",
    cards: [
      {
        title: "本物のキャッシュバック（ポイントではない）",
        body: "ウォレットに現金が戻る — 使うも Saving Plus で育てるもあなた次第。",
      },
      {
        title: "信頼できる加盟店",
        body: `東南アジアの ${SITE_FACTS.partnerCountLabel} 以上の有名ブランドで、購入前に還元率を確認。`,
      },
      {
        title: "あなた向けのクエスト",
        body: "買い物の習慣に合わせたチャレンジとシーズン特典。",
      },
      {
        title: "必要なときのサポート",
        body: "トラッキングや出金で不明点があれば、チームがサポートします。",
      },
    ],
  },

  features: {
    badge: "主な機能",
    title: "GoGoCash の特長",
    cards: [
      {
        title: "スピーディなキャッシュバック",
        body: "店舗が注文を承認すると実際の還元が付与 — 複雑なポイント制度なし、確認後ウォレットに反映。",
      },
      {
        title: "24時間365日サポート",
        body: "ご質問は？ チャットとメールでいつでもサポートします。",
      },
      {
        title: "パーソナライズされたクエスト",
        body: "楽しいショッピングチャレンジでボーナスや限定ディールをアンロック。",
      },
    ],
    ctaCard: {
      title: "節約を始めますか？",
      bodyLine: "何百万人ものユーザーに参加",
      cta: "無料で始める",
    },
  },

  howItWorks: {
    title: "GoGoCash の始め方",
    intro: "東南アジアでのキャッシュバックの仕組みは？ 次の 3 ステップで完了です。",
    steps: [
      {
        summary: "店を選ぶ",
        title: "GoGoCash から店舗を開く",
        desc: `${SITE_FACTS.regionLabel} の ${SITE_FACTS.partnerCountLabel} 以上の EC・旅行パートナーを探索。還元率を比較し、GoGoCash から開いて訪問をトラッキング。`,
        bullets: [
          "Lazada、Shopee、Agoda、Samsung、Trip.com など",
          "購入前に還元率を明示",
        ],
      },
      {
        summary: "いつも通り買う",
        title: "普段どおりショッピング",
        desc: "店舗のサイトまたはアプリでカートに入れて決済。クーポン入力は不要です。",
        bullets: [
          "いつものアカウントと支払い方法を利用",
          "GoGoCash が購入をバックグラウンドで追跡",
        ],
      },
      {
        summary: "還元を受け取る",
        title: "店舗確認後に付与",
        desc: "注文が確認されるとキャッシュバックが GoGoCash ウォレットに。アプリで追跡し、条件を満たしたら出金。",
        bullets: ["通常数日以内に確認", "銀行または e ウォレットへ出金可能"],
      },
    ],
  },

  download: {
    badge: "アプリを開く",
    title: "お好みのアプリで GoGoCash",
    desc: "Telegram または LINE ミニアプリ、または Web アプリ — 還元は同じで、スマホ向けに最適化。",
    bullets: ["外出先でオファーやクエストをチェック", "還元率アップの通知"],
    scanLabel: "スキャンして開く",
    qrCaptionBefore: "開く：",
    qrCaptionLink: "GoGoCash LINE ミニアプリ",
    qrCaptionAfter: " — 左から Telegram / Web も利用可能",
    telegram: "Telegram ミニアプリ",
    line: "LINE ミニアプリ",
    web: "Web アプリを開く",
    qrAria: "GoGoCash LINE ミニアプリを開く（QR）",
    qrAlt: "GoGoCash LINE ミニアプリ用 QR コード",
  },

  learn: {
    badge: "学ぶ",
    title: "賢く貯める、わかりやすく解説",
    readMore: "続きを読む",
    teasers: [
      {
        title: "キャッシュバックの追跡の仕組み",
        desc: "クリックから店舗確認まで、裏側で何が起きるか。",
        href: "/learn/how-cashback-works",
      },
      {
        title: "銀行・e ウォレットへ出金",
        desc: "最低額、タイミング、「確定」残高の意味。",
        href: "/learn/withdraw-cashback-gogocash",
      },
      {
        title: "還元が付かない？",
        desc: "サポートに連絡する前の短いチェックリスト。",
        href: "/learn/cashback-not-tracking-fixes",
      },
    ],
  },

  community: {
    badge: "コミュニティ",
    title: "GoGoCash コミュニティに参加",
    desc: "チームや他のユーザーからヒント・情報・サポートを — よく使うチャンネルを選べます。",
  },

  faq: {
    badge: "よくある質問",
    title: "GoGoCash に関する FAQ",
    subtitleEnHint: "詳細は英語のトップページまたは Learn の記事をご覧ください",
  },

  finalCta: {
    title: "毎回のお買い物をお得にしませんか？",
    sub: `${SITE_FACTS.shopperCommunityLabel} 以上のユーザーと一緒に、かんたんキャッシュバック`,
    cta: "アプリを開く",
  },
} satisfies LocaleHomeCopy;

export const JA_ALPHA = {
  badge: "Alpha",
  message:
    "このページはアルファ版です。UI と FAQ は日本語ですが、一部のリンク先は英語のままです。",
} as const;
