# Lighthouse & Core Web Vitals — local runbook

Run **mobile** checks before major releases; track **LCP, CLS, INP** on `/`, `/learn/how-cashback-works`, `/id`, and `/th`.

## Prerequisite

1. Start the app: `npm run dev` (default `http://localhost:3000`).
2. Or test the static export: `npm run build` then serve `out/` (e.g. `npx serve out`).

## One-off report (HTML)

From the project root, with the dev server running:

```bash
npx --yes lighthouse http://127.0.0.1:3000/ \
  --only-categories=performance,accessibility,best-practices,seo \
  --preset=mobile \
  --output=html \
  --output-path=./lighthouse-home-mobile.html
```

Repeat for other URLs by changing the URL.

## NPM script

Use the shortcut (requires dev server on port 3000):

```bash
npm run lh:mobile
```

This writes `lighthouse-home-mobile.html` in the project root (gitignored recommended).

## What to fix first

- **Performance:** LCP image weight, font loading, avoid large CLS on hero.
- **Accessibility:** Tap targets, contrast, accordion keyboard use, landmark labels.
- **SEO (category):** Meta length, crawlable links, `lang` on localized pages.
- **Best practices:** HTTPS in production, security headers on Firebase Hosting.

## CI

For automated regression, add Lighthouse CI or a Playwright trace against production previews; keep a **budget** file aligned with this runbook.
