import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import { BrowserLocaleBootstrap } from "@/components/browser-locale-bootstrap";
import { FirebaseAnalytics } from "@/components/firebase-analytics";
import PageTransition from "@/components/page-transition";
import LoadingScreen from "@/components/loading-screen";
import SchemaMarkup from "@/components/schema-markup";
import { siteOrigin } from "@/lib/site";
import { siteSeoOneLiner } from "@/lib/site-facts";
import "./globals.css";

function metadataBaseUrl(): URL {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : undefined,
    "https://gogocash.co",
  ];
  for (const raw of candidates) {
    if (!raw) continue;
    try {
      return new URL(raw);
    } catch {
      /* try next candidate */
    }
  }
  return new URL("https://gogocash.co");
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ogImagePath = "/images/og-cashback-30pct.webp";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#10b981",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "GoGoCash — Earn Up to 30% Cashback | Shop Smarter in SEA",
  description: `${siteSeoOneLiner()} Free to join.`,
  keywords: [
    "GoGoCash",
    "cashback",
    "Shopee",
    "Lazada",
    "Agoda",
    "Southeast Asia",
    "shopping rewards",
  ],
  authors: [{ name: "GoGoCash" }],
  creator: "GoGoCash",
  metadataBase: metadataBaseUrl(),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      id: "/id",
      th: "/th",
      "zh-TW": "/tw",
      ja: "/ja",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteOrigin(),
    siteName: "GoGoCash",
    title: "GoGoCash — Earn Up to 30% Cashback | Shop Smarter in SEA",
    description: `${siteSeoOneLiner()} Free to join.`,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "GoGoCash — earn cashback across Southeast Asia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoGoCash — Earn Up to 30% Cashback",
    description: `${siteSeoOneLiner()} Free to join.`,
    images: [ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="preload"
          href={`${siteOrigin()}${ogImagePath}`}
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <SchemaMarkup />
      </head>
      <body className="font-sans antialiased bg-white text-gray-800">
        <BrowserLocaleBootstrap />
        <FirebaseAnalytics />
        <LoadingScreen>
          <PageTransition>{children}</PageTransition>
        </LoadingScreen>
      </body>
    </html>
  );
}
