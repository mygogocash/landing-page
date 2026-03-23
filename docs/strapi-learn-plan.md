# Plan: Strapi + Learn on GoGoCash landing

This repo loads Learn articles at **build time** from [Strapi](https://github.com/strapi/strapi) when `STRAPI_URL` is set. See `lib/strapi-learn.ts` for API details and `.env.example` for env vars.

## Implemented in this repo

- [x] Build-time fetch + fallback: `lib/strapi-learn.ts`, `lib/learn-data.ts`, `app/learn/*`, `app/sitemap.ts`
- [x] Seed / sync markdown → Strapi: `npm run learn:strapi-push` → `scripts/push-learn-to-strapi.ts` (needs `STRAPI_PUSH_TOKEN` or full-access `STRAPI_API_TOKEN`)
- [x] CI: `.github/workflows/build-landing.yml` (optional secrets `STRAPI_URL`, `STRAPI_API_TOKEN`)
- [x] Deploy notes: [strapi-deployment.md](./strapi-deployment.md)
- [x] GCP (project `gogocash-cms`): Strapi app `strapi-learn-cms` — `Dockerfile`, `cloudbuild.yaml`, Postgres + Cloud SQL socket in `config/database.ts`, `learn-articles` schema in code — see [strapi-gcp-runbook.md](./strapi-gcp-runbook.md)

Phases 1–4 (run Strapi, content type, permissions, typing content in admin) remain manual in your Strapi project.

## Phase 1 — Strapi running

1. **Choose hosting:** local dev first, then Strapi Cloud or your own Node host with HTTPS.
2. **Create project** (e.g. `npx create-strapi@latest`) and confirm admin login works.
3. **Note the public URL** you will use for builds (e.g. `https://cms.yourdomain.com`).

## Phase 2 — Content model

1. **Collection type** with plural API ID **`learn-articles`** (REST path `/api/learn-articles`).
2. **Fields:** `slug` (UID), `title`, `metaTitle`, `metaDescription`, `hubDesc`, `content` (long text, Markdown).
3. Save and restart if Strapi prompts.

## Phase 3 — Access control

1. **Option A — Public read:** Settings → Users & Permissions → **Public** → enable **find** + **findOne** on `learn-articles`.
2. **Option B — Private API:** Create a **read-only API token**; use `STRAPI_API_TOKEN` on the landing build only (never `NEXT_PUBLIC_*`).

## Phase 4 — Content

1. **Publish** at least one article with a real `slug` and full `content`.
2. **Migration:** copy from existing `content/learn/*.md` into Strapi, or keep using files until Strapi is ready (omit `STRAPI_URL` = current fallback behavior).

## Phase 5 — Landing repo

1. Add to `.env.local` and CI secrets: `STRAPI_URL`, and if needed `STRAPI_API_TOKEN`.
2. Run `npm run build` locally; verify `/learn` and `/learn/<slug>`.
3. Ensure **Firebase / static deploy** provides the same env vars **at build time** (`output: "export"` reads Strapi only during build).

## Phase 6 — Ship and maintain

1. Deploy after a successful build.
2. **Workflow:** Strapi content change → **rebuild + redeploy** the landing site.
3. **Optional:** webhook on Strapi publish → trigger CI build.

## Success criteria

- Build succeeds with `STRAPI_URL` set.
- `/learn` lists Strapi entries; article pages render Markdown like file-based articles.
- With `STRAPI_URL` unset, the site still builds from `content/learn` + `lib/learn-articles.ts`.

## Related code

- `lib/strapi-learn.ts` — REST client and field mapping
- `lib/learn-data.ts` — Strapi vs local fallback
- `app/learn/page.tsx`, `app/learn/[slug]/page.tsx` — Learn hub and articles
- `scripts/push-learn-to-strapi.ts` — upsert from `LEARN_ARTICLES` + `content/learn/*.md`
- `docs/strapi-deployment.md` — Firebase / CI env and rebuild workflow
