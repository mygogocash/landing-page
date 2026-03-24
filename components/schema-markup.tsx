import { FAQ_ITEMS } from "@/lib/faq-data";
import { siteOrigin } from "@/lib/site";
import { SITE_FACTS, siteSeoOneLiner } from "@/lib/site-facts";

/** Server-only JSON-LD for SEO (no `use client`). */
export default function SchemaMarkup() {
  const origin = siteOrigin();

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_FACTS.brandName,
    url: origin,
    logo: `${origin}/images/gogocash-logo-mark.svg`,
    description: siteSeoOneLiner(),
    sameAs: [
      "https://t.me/GoGoCashOfficialChannel",
      "https://x.com/mygogocash",
      "https://www.linkedin.com/company/gogocash",
      "https://lin.ee/7om5sAr",
    ],
  };

  const financialService = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: SITE_FACTS.brandName,
    url: origin,
    logo: `${origin}/images/gogocash-logo-mark.svg`,
    description: siteSeoOneLiner(),
    areaServed: [...SITE_FACTS.countriesIso],
    sameAs: [
      "https://t.me/GoGoCashOfficialChannel",
      "https://x.com/mygogocash",
      "https://www.linkedin.com/company/gogocash",
      "https://lin.ee/7om5sAr",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: [
        "English",
        "Thai",
        "Indonesian",
        "Chinese (Traditional)",
        "Japanese",
      ],
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: origin,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${origin}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbHome = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${origin}/`,
      },
    ],
  };

  const mobileApp = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "GoGoCash",
    operatingSystem: "Android, iOS, Telegram, LINE",
    applicationCategory: "FinanceApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "6000000",
    },
  };

  const blocks: { id: string; data: object }[] = [
    { id: "organization", data: organization },
    { id: "financial-service", data: financialService },
    { id: "faq-page", data: faqPage },
    { id: "website", data: website },
    { id: "breadcrumb-home", data: breadcrumbHome },
    { id: "mobile-app", data: mobileApp },
  ];

  return (
    <>
      {blocks.map(({ id, data }) => (
        <script
          key={id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
