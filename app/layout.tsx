import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#006c4f",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: {
    default: "GoGoCash - ช้อปฉลาด รับเงินคืนทันที",
    template: "%s | GoGoCash",
  },
  description:
    "รวมร้านค้ากว่า 220+ แห่ง เปลี่ยนทุกการจ่ายให้เป็นรายได้กลับคืนมาแบบง่ายที่สุด รับเงินคืนทุกครั้งที่ช้อปผ่าน GoGoCash",
  keywords: [
    "GoGoCash",
    "เงินคืน",
    "Cashback",
    "ช้อปปิ้งออนไลน์",
    "รับเงินคืน",
    "ร้านค้าพันธมิตร",
    "Line Mini App",
    "Telegram Bot",
  ],
  authors: [{ name: "GoGoCash" }],
  creator: "GoGoCash",
  publisher: "GoGoCash",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gogocash.com"),
  alternates: {
    canonical: "/",
    languages: {
      "th-TH": "/th",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://gogocash.com",
    siteName: "GoGoCash",
    title: "GoGoCash - ช้อปฉลาด รับเงินคืนทันที",
    description:
      "GoGoCash - ช้อปฉลาด รับเงินคืนทันที รวมร้านค้ากว่า 220+ แห่ง เปลี่ยนทุกการจ่ายให้เป็นรายได้กลับคืนมาแบบง่ายที่สุด",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GoGoCash - รับเงินคืนทุกครั้งที่ช้อป",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoGoCash - ช้อปฉลาด รับเงินคืนทันที",
    description:
      "GoGoCash - ช้อปฉลาด รับเงินคืนทันที รวมร้านค้ากว่า 220+ แห่ง เปลี่ยนทุกการจ่ายให้เป็นรายได้กลับคืนมาแบบง่ายที่สุด",
    images: ["/twitter-image"],
    creator: "@gogocash",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#006c4f" />
        <meta name="color-scheme" content="light" />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "GoGoCash",
              description:
                "GoGoCash - ช้อปฉลาด รับเงินคืนทันที แพลตฟอร์มรับเงินคืน (Cashback) ที่ช่วยให้คุณได้รับเงินคืนทุกครั้งที่ช้อปปิ้งออนไลน์ผ่านร้านค้าพันธมิตรกว่า 220+ แห่ง",
              url: "https://gogocash.com",
              applicationCategory: "ShoppingApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "THB",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1250",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#006c4f] focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00cc99] focus:ring-offset-2"
        >
          ข้ามไปยังเนื้อหาหลัก
        </a>
        {/* Defer non-essential scripts for better TBT */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Defer analytics and tracking scripts
              window.addEventListener('load', function() {
                // Analytics scripts can be loaded here after page load
              });
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
