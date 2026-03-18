# GoGoCash Landing Page

**Static marketing site for [GoGoCash](https://gogocash.co/): save cash on every spend. Splash, hero, trust strip, value props, how-it-works, app download, features, insights, community, FAQ, and footer — with UX/UI patterns inspired by [Coins.co.th](https://www.coins.co.th/en-th).**

A clone of the official GoGoCash landing page, restructured for a Coins.co.th–style flow (trust strip, 4-card value section, app block, latest insights, community). Built with HTML, CSS, and vanilla JS; design tokens and animations documented.

## Structure

- **index.html** — Single-page layout (Coins.co.th–style flow: hero, trust strip, value cards, how to start, app download, features, insights, community, FAQ, footer)
- **css/style.css** — Base layout, tokens, components
- **css/coins-reference.css** — Coins.co.th–inspired sections (trust strip, 4-card value, app block, insights, community, footer CTA + grid)
- **js/main.js** — Splash, mobile menu, header scroll, smooth scroll, section in-view
- **gogocash-content.md** — All text content in markdown
- **CLONE-PLAN.md** — Tools and plan used for the clone
- **DESIGN-TOKENS.md** — Pixel-perfect spacing and type scale
- **assets/images/** — Add logo, icons, QR code, illustrations
- **assets/fonts/** — Optional custom fonts

## Run locally

```bash
# From this folder (Landing page)
npx serve .
# or
npx live-server
```

Then open **http://localhost:3000** (or the port shown).

## Links

- **Launch App** points to: https://app.gogocash.co/

Replace footer and nav links (Privacy Policy, Terms, etc.) with your real URLs when you have them.
