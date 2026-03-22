# GoGoCash landing — UX/UI plan (Coins.co.th–inspired structure)

Reference for information hierarchy and trust patterns: [Coins.co.th (Thai)](https://www.coins.co.th/th-th). **Adapt structure and UX patterns only** — do not copy branding, imagery, or proprietary visuals. All UI stays **GoGoCash**-branded (e.g. green primary, cashback/shopping narrative).

---

## 1. Goals & positioning

| Dimension | Coins.co.th (reference) | GoGoCash |
|-----------|-------------------------|----------|
| Primary job | Start trading crypto; trust & regulation | Start earning cashback; trust merchants & payouts |
| Proof | SEC Thailand, fees, “start with 100 THB” | Partner stores, payout clarity, “free to use” |
| User journey | Sign up → KYC → deposit → trade | Browse → shop via link → track → withdraw |

**Design intent:** Same **clarity hierarchy** (hero → proof → how it works → app → FAQ → risk/legal), different **content and CTAs**.

---

## 2. Information architecture (page sections)

1. **Sticky header** — Logo, primary nav (How it works, Partners, About, FAQ), **CTA** (“Get the app” / “Start saving”).
2. **Hero** — One headline, one subline, **primary CTA + secondary** (e.g. “See partners”), optional **trust strip** (badges / “Used across SEA”).
3. **Value strip** — Coins uses live prices; GoGoCash: **rotating merchant offers**, “Up to X% this week,” or **social proof** (users, stores, countries) — same **visual weight** as a price/market block.
4. **Why us / benefits** — 3–4 cards: trust, speed of cashback, low friction, localized payouts — parallel to licensed + fast + low fees + trusted.
5. **How it works** — 3 numbered steps (discover → shop → earn / withdraw).
6. **App download** — QR + store badges; short copy — parallel to Coins’ app section.
7. **Education / content** (optional) — Blog or guides teaser row.
8. **Community** — Line, X, Telegram, etc. — real GoGoCash URLs only.
9. **FAQ** — Accordion, 6–8 questions.
10. **Final CTA band** — Repeat primary CTA + reassurance line.
11. **Footer** — Legal, privacy, terms, support; **risk disclaimer** if claims are financial/investment-adjacent.

---

## 3. UX patterns to borrow (not clone)

- **Progressive disclosure:** Minimal hero; detail on scroll.
- **Numeric proof early:** Scannable **merchants / rates / stats** soon after hero.
- **Stepper** for onboarding mental model.
- **FAQ** before footer to handle objections.
- **Localization:** If Thailand is primary, plan **TH / EN** and longer string lengths in nav and buttons.

---

## 4. UI / visual system (GoGoCash)

- Keep **GoGoCash** colors and voice; do not reuse Coins’ crypto-specific palette.
- **Typography:** Clear H1 → H2 → body rhythm; readable body on small screens.
- **Components to spec:** Sticky nav + mobile sheet, hero, merchant/rate strip, feature cards, numbered steps, app block (QR + badges), FAQ accordion, footer + legal strip.

---

## 5. Content & compliance

- Cashback-specific claims only (tracking time, minimum withdrawal, supported methods).
- **Fees:** Clear, like “no platform fee” if true.
- **Regulatory:** Claim “licensed/regulated” only if accurate.
- **Risk:** Short disclaimer if investment-like features are mentioned.

---

## 6. Mobile responsiveness — core principles

- **Mobile-first:** Design and build for **320–390px** first, then **tablet** and **desktop**. Avoid desktop layouts squeezed onto phone.
- **Breakpoints (Tailwind-aligned):** `base` → `sm` (640px) → `md` (768px) → `lg` (1024px) → `xl` (1280px). Document where layout **switches** (e.g. hero stacks until `lg`).
- **Touch:** Minimum **44×44px** effective tap targets for CTAs, nav, FAQ, carousels; enough **spacing** between tappable controls.
- **Navigation:** Compact **sticky header**; **hamburger + sheet/drawer** on small screens; keep **one primary CTA** visible when possible.
- **Typography:** Hero must not overflow narrow widths; body **≥ 16px** on mobile where possible.
- **Media:** `max-width: 100%`, `height: auto`; consider **lighter hero** on mobile for **LCP**.
- **Horizontal overflow:** No accidental horizontal scroll; intentional horizontal areas use **scroll-snap** + clear affordance.
- **Forms:** Full-width fields, visible focus states (accessibility).

---

## 7. Section-by-section (responsive behavior)

| Section | Mobile | Tablet+ |
|---------|--------|---------|
| **Header** | Logo + menu + CTA; drawer for links | Full horizontal nav |
| **Hero** | Single column: headline → copy → CTA → visual | Optional two columns at `lg` |
| **Merchant / rate strip** | Scroll-snap row or 2-col grid | Wider grid / more columns |
| **Benefit cards** | 1 column | 2 cols `md`, 3–4 `lg` |
| **How it works** | Vertical numbered steps | 3-column from `md` if desired |
| **App download** | QR + badges stacked, centered | Side-by-side when space allows |
| **FAQ** | Full-width accordion, large taps | Max-width container centered |
| **Footer** | Stacked / collapsible groups | Multi-column |

---

## 8. Development phases

| Phase | Deliverable | Mobile notes |
|-------|-------------|--------------|
| **P0 — Audit** | Current page vs IA above | Log overflow, tap targets, nav |
| **P1 — Wireframes** | **375px first**, then tablet/desktop | Breakpoint annotations |
| **P2 — UI kit** | Components; **default = mobile** specs | Touch + focus states |
| **P3 — Hi-fi** | 375 / 768 / 1440 | Spacing redlines per breakpoint |
| **P4 — Build** | Tailwind responsive utilities | Real device + emulator checks |
| **P5 — QA** | Lighthouse **mobile**, a11y | CLS/LCP on mobile |

---

## 9. Mobile QA checklist

- [ ] No horizontal scroll at **320px**
- [ ] Interactive targets ≥ **44px** (or padding to equivalent hit area)
- [ ] Primary CTA visible **above the fold** on common phones (allowing browser UI)
- [ ] FAQ and footer usable with **thumb reach**
- [ ] Safe areas considered for **WebView / PWA** later

---

## 10. Success metrics (post-launch)

- **Primary:** CTA clicks, scroll depth to FAQ, time on page.
- **Secondary:** Bounce from hero, mobile vs desktop conversion.

---

## 11. Do not

- Copy Coins **logo, photos, or pixel-perfect layout**.
- Promise **crypto exchange** features unless GoGoCash ships them.

---

*Last updated: aligned with Next.js landing in this repo (`components/home-page.tsx`, `app/page.tsx`).*
