# GoGoCash landing page — content strategy (SEO, AEO, SEM, GEO, Lighthouse, Google Ads)

This document aligns **content** and **technical** work so the landing site performs well for organic search, answer/AI surfaces, paid search, generative and geographic discovery, Core Web Vitals / Lighthouse, and Google Ads landing page experience.

There is no single published “full score” across all of these; success is measured with the **proxy metrics** below and a repeatable review cadence.

---

## 1. North-star outcomes

| Area | What “good” looks like |
|------|-------------------------|
| **SEO** | Growth in impressions/clicks for target queries; valid rich results (e.g. FAQ); clean index coverage; canonicals correct; CWV pass |
| **AEO** | Clear entity + FAQ answers; crawlable facts; consistent numbers and claims for snippets and AI overviews |
| **SEM** | Strong **ad relevance**, **landing page experience**, and **expected CTR** (Quality Score levers); tight message match |
| **GEO (generative)** | First-party, citable explanations; structured data + About / disclosures aligned with visible copy |
| **GEO (geographic)** | Locale routes (`/id`, future `/th`), hreflang where live, local examples and language-appropriate meta |
| **Lighthouse** | Mobile performance ≥90 where realistic for static export; accessibility, best practices, and SEO categories healthy; no regressions in release checks |
| **Google Ads** | Policy-safe claims; fast LCP; obvious CTA; privacy/legal paths clear; conversion path measurable |

---

## 2. Content pillars

1. **Commercial intent** — H1/subhead/supporting copy map to money keywords (cashback, SEA, key merchants) without stuffing.
2. **Trust & policy** — Privacy, terms, “how we make money”; no misleading earnings promises.
3. **Education (`/learn`)** — Guides for long-tail queries (tracking, withdrawals, regional shopping).
4. **Locales** — English default; Indonesian (`/id`); Thai (planned) with Thai meta and FAQ where needed.
5. **Paid LPs (`/lp/*`)** — **noindex**, built for ad message match; omit from sitemap.

---

## 3. SEO content strategy

- **Keyword map** — Group by intent: brand, generic cashback, merchant+cashback, how-to, country. Assign **one primary intent per URL**.
- **On-page** — Unique `<title>` and meta description per route; single clear H1; logical H2/H3; internal links: home → learn → legal.
- **Technical** — Sitemap lists only **indexable** URLs; `robots.txt` allows Googlebot; canonical on each template; long term reduce duplicate legal bodies (e.g. Terms of Use vs Terms of Service) if SEO dilution appears.
- **Freshness** — “Last updated” on learn/legal when process or positioning changes; quarterly content audit.

---

## 4. AEO (answer / AI optimization)

- **FAQ** — Phrase questions like real searches; **lead with one direct sentence**, then supporting detail.
- **JSON-LD** — Keep `FAQPage`, organization/service, `WebSite` + `SearchAction`, breadcrumbs in sync with **visible** FAQ and nav.
- **Consistency** — One source of truth for numbers (partner count, regions, “up to X%”) across hero, FAQ, schema, and ads.
- **E-E-A-T** — Strong About page; clear how the product works; contact/support paths; financial disclosures where applicable.

---

## 5. SEM (paid search) alignment

- **Message match** — Ad headline and landing H1/subhead aligned per ad group; use `/lp/*` for narrow variants.
- **Extensions** — Sitelinks to Learn, Privacy, How we make money, app entry points; wording family matches ads.
- **Claims** — Avoid unprovable superlatives; use “up to” only when accurate and defensible; align with legal.
- **Post-click** — Fast LCP on hero; primary CTA above the fold; mobile-first layout.

---

## 6. GEO — generative and geographic

- **Generative** — Learn articles use pattern: definition → steps → edge cases; short summary paragraphs models can quote.
- **Geographic** — Expand `/id`; add `/th` with Thai titles/descriptions and FAQ; maintain hreflang for each **live** locale; use region-relevant examples in copy.

---

## 7. Lighthouse and Core Web Vitals

- **Performance** — Size and priority for LCP image; avoid large unnecessary JS; explicit image dimensions where possible; limit layout shift.
- **Accessibility** — Semantic landmarks (`main`, `header`, `footer`), labeled navigation, keyboard-friendly accordions, sufficient contrast, meaningful `alt` text.
- **Best practices** — HTTPS, no mixed content, security headers on hosting (e.g. Firebase).
- **SEO (Lighthouse)** — Valid `lang`, crawlable links, meta description length, tap target size.

**Process** — Run Lighthouse **mobile** before major releases; track LCP, CLS, and INP on `/`, key `/learn/*`, and `/id`.

---

## 8. Google Ads–specific checks

- **Policy** — Transparent business identity; functional destination; no cloaking or misleading UX.
- **Misrepresentation** — Cashback mechanics explained; no “guaranteed” income language.
- **Privacy / consent** — If advertising in regions requiring CMP (e.g. EEA/UK), implement Consent Mode and policy as required.
- **LP experience** — Clear next step (app / LINE / Telegram); low friction path; measurable events in analytics.

---

## 9. 90-day roadmap (suggested)

| Phase | Focus |
|-------|--------|
| **0–30 days** | Finalize keyword map; align hero, FAQ, and schema numbers; tune `/lp/*` copy per ad group; Lighthouse baseline + top fixes |
| **30–60 days** | Publish 4–6 learn articles (long-tail); Thai landing/meta if prioritized; strengthen internal linking; begin light digital PR / partnerships |
| **60–90 days** | Refresh FAQ from support themes; SEM A/B on H1/hero; expand locale content; review Search Console + Ads LP reports |

---

## 10. Measurement

- **Google Search Console** — Queries, pages, CTR, enhancements / rich results.
- **GA4 or Firebase Analytics** — Engagement on landing, CTA clicks, scroll depth to FAQ.
- **Google Ads** — Quality Score inputs, landing page experience, conversions by campaign/ad group.
- **Lighthouse / RUM** — Scores and Web Vitals on critical URLs.

---

## 11. Ownership & cadence

- **Monthly** — GSC top queries/pages, broken links, schema vs on-page drift, Ads LP report.
- **Quarterly** — Full keyword map refresh, legal/learn updates, competitor SERP snapshot, Lighthouse budget review.

---

## 12. Implementation artifacts (repo)

| Artifact | Purpose |
|----------|---------|
| [`lib/site-facts.ts`](../lib/site-facts.ts) | Single source of truth for partner count, region, cashback phrasing (SEO / AEO consistency) |
| [`lib/learn-articles.ts`](../lib/learn-articles.ts) | Learn hub + sitemap + `[slug]` article metadata |
| [`docs/keyword-url-matrix.md`](keyword-url-matrix.md) | Intent → URL map for SEO / SEM |
| [`docs/lighthouse-runbook.md`](lighthouse-runbook.md) | Local Lighthouse + CWV checks |
| `npm run lh:mobile` | Generate mobile Lighthouse HTML for `/` (dev server must be running) |

---

*Last updated: 2026-03-22*
