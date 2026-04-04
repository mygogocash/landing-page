# PostHog — marketing site, proxy, backend, app

Firebase deploy (hosting + `/w` proxy function): **[`docs/firebase-deploy.md`](./firebase-deploy.md)**.

Conventions follow [PostHog product analytics best practices](https://posthog.com/docs/product-analytics/best-practices).

## Custom events (landing)

| Event | When | Properties |
|-------|------|------------|
| `marketing:launch_app_cta_click` | Launch CTA (web / LINE) | `surface`, `event_schema_version` |
| `marketing:site_search_submit` | `/search` with `q` | `search_term`, `event_schema_version` |
| `marketing:locale_language_select` | Language pick | `language_code`, `event_schema_version` |
| `marketing:locale_region_select` | Region pick | `region_code`, `event_schema_version` |
| `marketing:brands_load_more_click` | Brands “See more” | `visible_count`, `total_brands`, `event_schema_version` |

Code: `lib/posthog-analytics.ts`. Firebase/GA: `lib/analytics-client.ts`.

---

## 1. Reverse proxy (more complete capture)

Ad blockers target known analytics hosts. Routing through **your** domain usually improves capture ([why proxy](https://posthog.com/docs/advanced/proxy)).

### Option A — PostHog managed proxy (recommended if eligible)

1. Open [organization proxy settings](https://app.posthog.com/settings/organization-proxy) and create a **managed** proxy.
2. Add the **CNAME** at your DNS provider (subdomain **without** words like `analytics`, `tracking`, `posthog` — see PostHog docs).
3. Set **gray cloud** on that record if you use Cloudflare (orange cloud can break managed SSL).
4. Production build env:
   - `NEXT_PUBLIC_POSTHOG_HOST=https://<your-subdomain>.<your-domain>`
   - `NEXT_PUBLIC_POSTHOG_UI_HOST=https://us.posthog.com` (EU: `https://eu.posthog.com`)
5. Rebuild the static site so `NEXT_PUBLIC_*` is inlined.

### Option B — Firebase Cloud Function (this repo)

1. `cd functions && npm install`
2. Deploy **`posthogProxy`** successfully (`npm run deploy:firebase:full` or `firebase deploy --only functions`; requires **Blaze** and working **Cloud Build** IAM).
3. Add the **`/w/**` → `posthogProxy` Hosting rewrite** to `firebase.json` (see [`docs/firebase-deploy.md`](./firebase-deploy.md) §4) and redeploy **hosting** if it was omitted so Hosting could publish without the function.
4. Production: `NEXT_PUBLIC_POSTHOG_HOST=https://<your-live-site>/w` (path **`/w`** matches that rewrite; pick another prefix only if you change `functions/index.js` and `firebase.json` together).

Details: `functions/README.md`.

### Option C — Cloudflare Worker

If DNS is on Cloudflare or you use Enterprise zone hold, use [Cloudflare proxy docs](https://posthog.com/docs/advanced/proxy/cloudflare) and set `NEXT_PUBLIC_POSTHOG_HOST` to the Worker route.

### SDK: `ui_host`

When `NEXT_PUBLIC_POSTHOG_HOST` is **not** `https://us.i.posthog.com` or `https://eu.i.posthog.com`, the app sets **`ui_host`** automatically (US vs EU inferred from ingest URL, or override with `NEXT_PUBLIC_POSTHOG_UI_HOST`). See [proxy + init](https://posthog.com/docs/advanced/proxy).

---

## 2. Backend capture (truth events)

The landing uses **`output: "export"`** — there is **no Next.js server** in production. Reliable events (signup, payment, subscription) should be sent from **your API** with **`posthog-node`** (or the HTTP API) and a **server secret**, not from the static bundle.

| Event examples | Where to fire |
|----------------|---------------|
| `product:user_signed_up` | App/API after account is created |
| `product:subscription_started` | Billing webhook / API |
| `product:order_confirmed` | Order service |

Use the **same PostHog project** and the same **`distinct_id`** as the browser when known (e.g. internal user id). Never put the **project API key** for server use in `NEXT_PUBLIC_*`.

Future: if you add a **waitlist** or form POST to Cloud Functions, capture `marketing:lead_submitted` (or `product:lead_created`) **in the function** after validation.

---

## 3. App team: `identify` and `product:*`

Use **one PostHog project** for site + app ([same project](https://posthog.com/docs/product-analytics/best-practices)).

| Area | Convention |
|------|------------|
| Marketing | `marketing:*` + `event_schema_version` |
| Product / app | `product:*` + `event_schema_version`, snake_case properties |
| Identity | After login/signup, `posthog.identify(<stable_id>, { … })` per privacy policy |
| Journeys | Align `distinct_id` with backend; use PostHog docs for anonymous → identified flow |

Filter internal traffic: PostHog project filters, exclude `localhost` / staging hosts, and/or `NEXT_PUBLIC_POSTHOG_ENABLED=false` locally.

---

## Verify

1. Network tab: requests go to your **proxy URL** (managed subdomain, `/w/...`, or Worker).
2. Response **200** on ingest calls.
3. Events appear in PostHog **Live** / **Activity**.
