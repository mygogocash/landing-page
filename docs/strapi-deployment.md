# Strapi + Learn: deploy and CI

The static site reads Strapi **only during `next build`**. Runtime hosting (Firebase, etc.) does not need Strapi credentials.

## Environment variables

| Variable | When |
|----------|------|
| `STRAPI_URL` | Build (and optional push script) — no trailing slash |
| `STRAPI_API_TOKEN` | Build if the REST API is not public (read token is enough) |
| `STRAPI_PUSH_TOKEN` | **Only** for `npm run learn:strapi-push` — needs create/update; never commit |

Set these in:

- **Local:** `.env.local` (not committed)
- **CI:** GitHub Actions **secrets** (see workflow below)
- **Firebase:** there is no “build env UI” for local `firebase deploy`; export vars in the shell or use a wrapper script before `npm run build`

Example local deploy with Strapi:

```bash
export STRAPI_URL="https://your-cms.example.com"
export STRAPI_API_TOKEN="..."   # if API is private
npm run build
firebase deploy --only hosting:...
```

## GitHub Actions

The workflow `.github/workflows/build-landing.yml` runs `npm ci` and `npm run build` on push/PR. Add repository secrets:

- `STRAPI_URL` (optional — omit to use file-based Learn only)
- `STRAPI_API_TOKEN` (optional — for private Strapi)

If secrets are empty, the build still passes using `content/learn` + `lib/learn-articles.ts`.

## Firebase Hosting

1. Ensure **build** runs with `STRAPI_*` set (local shell, CI artifact, or Cloud Build).
2. `firebase.json` serves the `out/` folder from `next build` — no Strapi changes needed there.

## Content workflow

1. Edit in Strapi admin (or run `npm run learn:strapi-push` once to seed from markdown).
2. **Rebuild** the landing app and **redeploy** so HTML updates.

## Optional: Strapi → rebuild automation

Strapi can call a webhook on publish. Typical pattern:

1. GitHub **repository_dispatch** workflow triggered by a small serverless function that verifies Strapi’s webhook secret, then calls the GitHub API.
2. Or **scheduled** GitHub Action (`cron`) that rebuilds nightly.

This repo does not include a webhook receiver; add one when you are ready.

## Related

- [strapi-learn-plan.md](./strapi-learn-plan.md) — full checklist
- `lib/strapi-learn.ts` — REST field mapping
- `scripts/push-learn-to-strapi.ts` — seed / sync from repo markdown
