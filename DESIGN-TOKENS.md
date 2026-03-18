# GoGoCash Clone — Pixel-Perfect Design Tokens

All spacing, type, and layout use this scale so the UI is consistent and pixel-perfect.

---

## Spacing (4px base grid)

| Token | Value | Use |
|-------|--------|-----|
| `--space-1` | 4px | Tiny gaps, focus offset |
| `--space-2` | 8px | Inline spacing, icon gaps |
| `--space-3` | 12px | Tight padding, small margins |
| `--space-4` | 16px | Default padding/margin unit |
| `--space-5` | 20px | Card internal, FAQ padding |
| `--space-6` | 24px | Section element spacing, container padding |
| `--space-8` | 32px | Between blocks, value-cta gap |
| `--space-10` | 40px | Section sub-margins, benefits top |
| `--space-12` | 48px | Hero stats gap, feature grid gap |
| `--space-16` | 64px | Hero top offset, section padding (mobile) |
| `--space-20` | 80px | Section padding (desktop), hero bottom |
| `--space-24` | 96px | Large section spacing |

---

## Typography

| Token | Size | Line-height | Use |
|-------|------|-------------|-----|
| `--text-xs` | 12px | — | Section tags, footer labels |
| `--text-sm` | 14px | — | Body small, labels, feature desc |
| `--text-base` | 16px | — | Body, buttons, FAQ |
| `--text-lg` | 18px | — | Hero subtitle, section lead, feature title |
| `--text-xl` | 20px | — | Benefit title, section subtitle |
| `--text-2xl` | 24px | — | Step number, FAQ icon |
| `--text-3xl` | 32px | — | Stat value |
| `--text-4xl` | 40px | — | Section title (clamp max) |
| `--text-5xl` | 48px | — | Hero (clamp max) |

**Line heights:** `--leading-tight` (1.2), `--leading-snug` (1.375), `--leading-normal` (1.5), `--leading-relaxed` (1.6).

**Fixed sizes used in layout:**
- Logo: **22px**
- Hero title: clamp(**40px**, 6vw, **64px**)
- Section title: clamp(**28px**, 4vw, **40px**)
- Section-why title: **22px**

---

## Layout

| Token | Value | Use |
|-------|--------|-----|
| `--max-width` | 1200px | Container max width |
| `--header-height` | 72px | Fixed header height |
| `--container-padding` | 24px | Horizontal padding (desktop) |
| `--container-padding-sm` | 16px | Horizontal padding (≤480px) |

---

## Radii

| Token | Value |
|-------|--------|
| `--radius-sm` | 8px |
| `--radius` | 12px |
| `--radius-lg` | 20px |
| `--radius-full` | 9999px (circles) |

---

## Breakpoints

| Breakpoint | Width | Changes |
|------------|--------|---------|
| Desktop | >1024px | Full footer grid, nav visible |
| Tablet | 769px–1024px | Footer 2-col, same section padding |
| Mobile | 481px–768px | Mobile nav, section 56px padding, hero 40px top, container 24px |
| Small | ≤480px | Container 16px, footer links 1-col |

---

## Colors (unchanged)

- Primary: `#00c853` / dark `#00a843` / light `#69f0ae`
- Background: `#fafafa` / alt `#f0fdf4` / surface `#ffffff`
- Text: `#1a1a1a` / muted `#64748b`
- Border: `#e2e8f0`

---

## Rules for pixel-perfect consistency

1. Use only tokens for spacing (no raw `20px`, `28px`, etc.).
2. Use only `--text-*` and `--leading-*` for type; use px in clamp() where needed.
3. Use only `--radius`, `--radius-lg`, `--radius-full` for corners.
4. Keep breakpoints at **480px**, **768px**, **1024px**.
5. Container padding: **24px** (16px below 480px).
