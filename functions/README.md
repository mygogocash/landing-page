# Firebase — PostHog reverse proxy

Full Firebase hosting + deploy flow: **[`docs/firebase-deploy.md`](../docs/firebase-deploy.md)**.

Forwards `https://<your-hosting-domain>/w/*` to PostHog US ingest (`us.i.posthog.com`) and static assets (`us-assets.i.posthog.com`), following the [Node proxy pattern](https://posthog.com/docs/advanced/proxy/node).

## Prerequisites

- Firebase **Blaze** plan (Cloud Functions).
- Node **22** (matches `engines` in `package.json`; required for current Cloud Functions runtime support).
- **Hosting rewrite:** do not add the `/w/**` → `posthogProxy` entry in `firebase.json` until this function has deployed at least once; otherwise Hosting **finalize** fails with a missing Cloud Run service error (see [`docs/firebase-deploy.md`](../docs/firebase-deploy.md) §4).

## One-time setup

```bash
cd functions
npm install
cd ..
```

## Deploy with the static site

From the **repo root** (after `npm run build` so `out/` exists):

```bash
firebase deploy --only hosting,functions --project landing-page-4ae23
```

Or use `npm run deploy:firebase:full` from the landing repo root.

## Frontend env (production build)

Set the ingest base to your **live site** origin + `/w` (no trailing slash):

```bash
NEXT_PUBLIC_POSTHOG_HOST=https://gogocash.co/w
# Optional if defaults are wrong:
# NEXT_PUBLIC_POSTHOG_UI_HOST=https://us.posthog.com
```

Rebuild the Next export so `NEXT_PUBLIC_*` is inlined into `out/`.

## EU projects

Edit `API_HOST` / `ASSET_HOST` in `index.js` to `eu.i.posthog.com` and `eu-assets.i.posthog.com`, and set `NEXT_PUBLIC_POSTHOG_UI_HOST=https://eu.posthog.com`.

## Alternative: PostHog managed proxy

No Functions cost: use [managed reverse proxy](https://posthog.com/docs/advanced/proxy) (DNS CNAME). Then set `NEXT_PUBLIC_POSTHOG_HOST` to that subdomain and keep `NEXT_PUBLIC_POSTHOG_UI_HOST` as `https://us.posthog.com` (or EU equivalent).
