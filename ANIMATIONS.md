# GoGoCash Clone — Transitions & Animations Reference

Every transition and animation applied to each element. Use this to audit or match behavior.

---

## Global

| Element / Variable | Type | Details |
|--------------------|------|--------|
| `:root` | CSS variables | `--transition`: 0.2s ease · `--transition-slow`: 0.4s ease · `--transition-fast`: 0.15s ease |
| `html` | Transition | `scroll-behavior: smooth` (anchor links) |
| `body.splash-visible` | — | `overflow: hidden` (no transition) |

---

## Splash Page

| Element | Type | Trigger | Details |
|---------|------|--------|--------|
| `.splash` | Transition | Class `.is-hidden` | `opacity`, `visibility` 0.5s ease |
| `.splash-logo` | Animation | On load | `splash-fade-in` 0.8s ease, delay 0s |
| `.splash-tagline` | Animation | On load | `splash-fade-in` 0.8s ease, delay 0.2s |
| `.splash-enter` | Animation + Transition | On load; hover | Fade-in 0.4s delay; hover: `scale(1.05)` |
| `.splash-loader` | Animation | On load | `splash-fade-in` 0.5s delay |
| `.splash-loader::after` | Animation | Continuous | `splash-load` 1.5s ease-in-out infinite |
| **Keyframes** | | | `splash-fade-in`: opacity 0→1, translateY(12px)→0 · `splash-load`: translateX -100%→250% |

---

## Header & Nav

| Element | Type | Trigger | Details |
|---------|------|--------|--------|
| `.header` | Transition | Scroll / class `.is-scrolled` | `box-shadow`, `border-color` 0.2s ease |
| `.logo` | Transition | Hover | `color`, `transform`, `opacity`; hover: color primary, `scale(1.02)` |
| `.nav-list a` | Transition | Hover | `color` 0.2s ease; hover: primary-dark |
| `.menu-toggle` | Transition | Hover | `opacity`; hover: 0.8 |
| `.menu-toggle span` | Transition | — | `transform`, `background` (for future hamburger→X) |
| `.nav-overlay` | Transition | Class `.is-open` | `opacity` 0.2s ease |
| `.mobile-nav` | Transition | Class `.is-open` | `transform` translateX(100%)→0 |
| `.mobile-nav-list a` | Transition | Hover | `color`, `padding-left`; hover: primary-dark, padding-left 8px |

---

## Buttons & Links

| Element | Type | Trigger | Details |
|---------|------|--------|--------|
| `.btn` | Transition | Hover | `background`, `transform`, `box-shadow` 0.2s ease; hover: translateY(-1px), shadow |
| `.link-explore` | Transition | Hover | `color`, `letter-spacing`, `opacity`; hover: primary, letter-spacing 0.08em |

---

## Hero

| Element | Type | Trigger | Details |
|---------|------|--------|--------|
| `.hero-line` | Transition | Class `.animate-in` on `.hero-inner` | opacity 0→1, translateY(20px)→0; delays 0.1s, 0.2s, 0.3s per line |
| `.hero-cta` | Transition | `.animate-in` | opacity, translateY(16px)→0; delay 0.4s |
| `.hero-subtitle` | Transition | `.animate-in` | opacity, translateY(12px)→0; delay 0.5s |
| `.hero-stats` | Transition | `.animate-in` | opacity, translateY(12px)→0; delay 0.6s |
| `.hero-trust` | Transition | `.animate-in` | opacity; delay 0.7s |
| `.stat` | Transition | Hover | `transform`; hover: `scale(1.05)` |

*`.animate-in` is added by JS when the splash is dismissed (Enter click or 3s timeout).*

---

## Sections (scroll-in)

| Element | Type | Trigger | Details |
|---------|------|--------|--------|
| `.section > .container` | Transition | Class `.in-view` on `.section` | opacity 0→1, translateY(24px)→0 (0.4s ease) |

*`.in-view` is added by IntersectionObserver when the section enters the viewport (rootMargin -80px, threshold 0.1).*

---

## Section typography

| Element | Type | Trigger | Details |
|---------|------|--------|--------|
| `.section-tag` | Transition | Hover | `color`, `letter-spacing`; hover: letter-spacing 0.08em |
| `.section-title` | Transition | — | `color` |
| `.section-lead` | Transition | — | `color` |
| `.section-subtitle` | Transition | — | `color` |

---

## Feature cards

| Element | Type | Trigger | Details |
|---------|------|--------|--------|
| `.feature-card` | Transition | Hover | `box-shadow`, `transform`; hover: translateY(-2px), shadow-hover |
| `.feature-title` | Transition | Parent hover | `color`; hover: primary |
| `.feature-desc` | Transition | Parent hover | `color`; hover: text |

---

## More feature cards

| Element | Type | Trigger | Details |
|---------|------|--------|--------|
| `.more-feature-card` | Transition | Hover | `border-color`, `box-shadow`; hover: primary-light border, shadow |
| `.more-feature-card h3` | Transition | Parent hover | `color`; hover: primary-dark |
| `.more-feature-card p` | Transition | Parent hover | `color`; hover: text |

---

## Benefit cards

| Element | Type | Trigger | Details |
|---------|------|--------|--------|
| `.benefit-card` | Transition | Hover | `transform`, `box-shadow`, `border-color`, `background`; hover: translateY(-4px), shadow, primary-light border |
| `.benefit-category` | Transition | Parent hover | `color`, `letter-spacing`; hover: letter-spacing 0.05em |
| `.benefit-title` | Transition | Parent hover | `color`; hover: primary-dark |

---

## How it works (steps)

| Element | Type | Trigger | Details |
|---------|------|--------|--------|
| `.step` | Transition | Hover | `transform`, `box-shadow`, `background`; hover: translateY(-4px), shadow-hover |
| `.step-num` | Transition | Parent hover | `transform`, `background`; hover: scale(1.1), primary-dark |

---

## FAQ

| Element | Type | Trigger | Details |
|---------|------|--------|--------|
| `.faq-question` | Transition | Hover | `color`; hover: primary-dark |
| `.faq-question::after` | Transition | Toggle open | `transform`, `color`; open: rotate(45deg) |
| `.faq-answer` | Transition | — | `opacity` 0.15s |
| `.faq-item` | Transition | Toggle open | `background`; open: light green tint |

---

## Footer

| Element | Type | Trigger | Details |
|---------|------|--------|--------|
| `.footer a` | Transition | Hover | `color`; hover: white |
| `.footer-col a` | Transition | Hover | `transform`, `color`; hover: translateX(4px) |
| `.footer-cta` (btn) | Same as `.btn` | Hover | Same as primary button |

---

## JavaScript-driven behavior

| What | When | Effect |
|------|------|--------|
| Splash hide | Enter click or 3s timeout | Add `.is-hidden` to splash, remove `splash-visible` from body, add `.animate-in` to `.hero-inner` |
| Hero entrance | After `.animate-in` on `.hero-inner` | CSS transitions on hero lines, CTA, subtitle, stats, trust (staggered delays) |
| Section in-view | IntersectionObserver | When section enters viewport, add `.in-view` to `.section` → container fades in and moves up |
| Smooth scroll | Anchor link click | `scrollIntoView({ behavior: 'smooth' })` (plus `html { scroll-behavior: smooth }`) |
| Mobile menu | Menu button / overlay click | Toggle `.is-open` on `.mobile-nav` and `.nav-overlay` (CSS transition on transform / opacity) |
| Header scrolled | `scroll` | Add `.is-scrolled` to `.header` when scrollY > 20 (CSS transition on box-shadow) |

---

## Summary checklist

- [x] Splash: container, logo, tagline, button, loader (fade-in + loader animation)
- [x] Header: shadow, logo hover, nav links, menu toggle, overlay, mobile nav
- [x] Buttons: hover (background, transform, shadow)
- [x] Link explore: hover (color, letter-spacing)
- [x] Hero: staggered entrance (lines, CTA, subtitle, stats, trust), stat hover
- [x] Sections: scroll-in (container opacity + translateY)
- [x] Section tags/titles: hover or color transition
- [x] Feature cards: card hover (lift + shadow), title/desc color
- [x] More feature cards: card hover (border + shadow), h3/p color
- [x] Benefit cards: card hover (lift + shadow + border), category/title transition
- [x] Steps: step hover (lift + shadow), step-num scale + background
- [x] FAQ: question hover, plus icon rotate, answer/item transition
- [x] Footer: link color, footer-col link translateX
- [x] Scroll behavior: smooth (html + JS fallback)
- [x] Section in-view: IntersectionObserver
