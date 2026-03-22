import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import { FirebaseAnalytics } from "@/components/firebase-analytics";
import PageTransition from "@/components/page-transition";
import SplashScreen from "@/components/splash-screen";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#10b981",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "GoGoCash - Save Cash on Every Spend",
  description:
    "GoGoCash helps you earn cashback effortlessly on the things you already shop for. Up to 30% back from 70+ top stores across Southeast Asia.",
  keywords: [
    "GoGoCash",
    "cashback",
    "shopping",
    "rewards",
    "save money",
    "earn cashback",
    "online shopping",
    "SEA",
  ],
  authors: [{ name: "GoGoCash" }],
  creator: "GoGoCash",
  metadataBase: metadataBaseUrl(),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gogocash.co",
    siteName: "GoGoCash",
    title: "GoGoCash - Save Cash on Every Spend",
    description:
      "Shop smarter with GoGoCash — leading SEA shopping-to-earn platform offering up to 30% cashback, personalized quests, and exclusive rewards.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GoGoCash - Save Cash on Every Spend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoGoCash - Save Cash on Every Spend",
    description:
      "Shop smarter with GoGoCash — leading SEA shopping-to-earn platform offering up to 30% cashback.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "GoGoCash",
              description:
                "Leading SEA shopping-to-earn platform offering up to 30% cashback, personalized quests, and exclusive rewards.",
              url: "https://gogocash.co",
              applicationCategory: "ShoppingApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-800">
        <FirebaseAnalytics />
        <SplashScreen>
          <PageTransition>{children}</PageTransition>
        </SplashScreen>
      </body>
    </html>
  );
}
