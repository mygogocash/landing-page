# Deploy to Firebase (GoGoCash landing)

This site is a **Next.js static export** (`output: "export"`). The build writes to **`out/`**, which Firebase Hosting serves. Optional **Cloud Functions** proxy PostHog at **`/w/**`**.

Framer → this repo on **`gogocash.co`**: **[`framer-to-next-migration.md`](./framer-to-next-migration.md)**.

| Item | Value |
|------|--------|
| Default Firebase project | `landing-page-4ae23` (`.firebaserc`) |
| Hosting site id | `landing-page-4ae23` (`firebase.json`; default site for project) |
| Static root | `out/` |
| PostHog proxy | `posthogProxy` → `/w/**` (requires **Blaze**) |

---

## Do **not** run `firebase init` for App Hosting here

This repo already has **`firebase.json`** for **classic Hosting** (static `out/`) + optional **Functions**. It does **not** use [Firebase App Hosting](https://firebase.google.com/docs/app-hosting) (the full-stack SSR product).

If you run **`firebase init`** and select **App Hosting** → *Link to an existing backend*, the CLI may call an API that returns **HTML** instead of JSON, which shows as:

`Unable to parse JSON: Unexpected token '<', "<!DOCTYPE "... is not valid JSON`

That path is **unnecessary** for this landing site. Skip `firebase init` and deploy with the commands in section 4.

---

## 1. One-time setup

1. **Firebase CLI** — use the **project** dependency (no global mismatch):

   ```bash
   npm exec -- firebase --version
   ```

2. **Login**

   ```bash
   npm exec -- firebase login
   ```

3. **Select project**

   ```bash
   npm exec -- firebase use landing-page-4ae23
   ```

4. **Billing**

   - **Hosting only:** Spark is OK.
   - **Hosting + Functions** (PostHog proxy): upgrade to **Blaze**.

5. **Functions dependencies** (whenever `functions/package.json` changes)

   ```bash
   cd functions && npm ci && cd ..
   ```

---

## 2. Production build environment

`NEXT_PUBLIC_*` variables are inlined at **`npm run build`**. Set them in **CI secrets** or **`.env.production.local`** (gitignored) before building—not only in the Firebase console.

| Variable | Notes |
|----------|--------|
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog browser key (`phc_…`) if using PostHog. |
| `NEXT_PUBLIC_POSTHOG_HOST` | `https://us.i.posthog.com`, a **managed proxy** subdomain, or **`https://<your-live-domain>/w`** with the Firebase function. |
| `NEXT_PUBLIC_POSTHOG_UI_HOST` | e.g. `https://us.posthog.com` when `POSTHOG_HOST` is not direct US/EU ingest. |
| `NEXT_PUBLIC_SITE_URL` | Public canonical URL for metadata. |

See also: [`.env.example`](../.env.example), [PostHog events & proxy](./posthog-events.md), [`functions/README.md`](../functions/README.md).

---

## 3. Pre-deploy (every release)

```bash
# After lockfile or dependency changes, a clean install avoids tooling bugs:
rm -rf node_modules && npm ci

npm run verify
```

Confirm **`out/`** exists after build and is not empty.

**Use repo-local CLI** — prefer `npm run deploy:firebase*` or `npm exec -- firebase` so version matches `package.json` (avoids `minimatch is not a function` and similar issues from an old global `firebase`).

---

## 4. Deploy commands

| Goal | Command |
|------|---------|
| **Hosting only** | `npm run deploy:firebase` — runs `next build` then `scripts/deploy-firebase-hosting.mjs` (supports `FIREBASE_HOSTING_SITES` / CLI args for multiple sites). |
| **Hosting + PostHog proxy** | `npm run deploy:firebase:full` — `next build` + `npm run functions:install` (`npm ci` under `functions/`, so `firebase-functions` is present) + `firebase deploy --only hosting,functions --non-interactive`. |

**PostHog `/w` proxy and Hosting:** Firebase **refuses to release** Hosting if `firebase.json` contains a rewrite to a function that **does not exist** in the project (e.g. `posthogProxy` never deployed). Default `firebase.json` in this repo ships **without** that rewrite so static Hosting can go live; after **`posthogProxy` deploys successfully**, add this block back inside `hosting` (sibling of `headers`), then redeploy hosting:

```json
    "rewrites": [
      {
        "source": "/w/**",
        "function": "posthogProxy"
      }
    ],
```

**Functions `node_modules`:** `functions/` is gitignored for `node_modules/`. **`npm run deploy:firebase:full` installs dependencies first.** If you run `firebase deploy --only functions` by hand, run `npm run functions:install` (or `cd functions && npm ci`) beforehand or the CLI will error (“Couldn't find firebase-functions package”).

**Custom project id** (e.g. CI):

```bash
FIREBASE_PROJECT_ID=your-project-id npm run deploy:firebase
```

(`deploy-firebase-hosting.mjs` reads `FIREBASE_PROJECT_ID`; default is `landing-page-4ae23`.)

---

## 5. Post-deploy checks

1. Open the live URL — homepage and main routes load; assets return 200.
2. **PostHog proxy** (if used):  
   `curl -sI "https://<your-domain>/w/flags?v=2"` — expect not 502/404.
3. **PostHog** — Live / Activity shows events if enabled.

---

## 6. Troubleshooting

| Issue | What to try |
|-------|-------------|
| Project / permission errors | `firebase use`, correct Google account, IAM on the project. |
| Functions deploy fails | Blaze enabled, APIs enabled, check **Functions** logs in Firebase console. |
| `Could not read source directory` + `minimatch is not a function` | Repo root `npm ci`; deploy with **`npm exec -- firebase`** or **`npm run deploy:firebase:full`**, not an outdated global CLI. |
| Wrong PostHog or URLs in prod | Fix `NEXT_PUBLIC_*`, run **`npm run build`** again, redeploy **hosting**. |
| Browser shows **Site Not Found** / 404 on `*.web.app` | No successful Hosting **release** yet (often: full deploy failed partway, or Hosting finalize failed because rewrite pointed at a missing function). Run **`npm exec -- firebase deploy --only hosting`** after a good `out/` build; fix **Cloud Build / Functions** IAM if finalize errors mention a missing Cloud Run function. |
| Finalize error: `Cloud Run service posthogProxy does not exist` | Remove the `/w/**` → `posthogProxy` rewrite until the function deploy succeeds, **or** fix IAM and deploy functions first, then redeploy hosting with the rewrite restored (see §4). |

---

## 7. CI (optional)

1. `npm ci` → `npm run verify`.
2. Build with production `NEXT_PUBLIC_*` from secrets.
3. Authenticate with a **CI token** or workload identity (never commit tokens).
4. `npm exec -- firebase deploy --only hosting,functions --non-interactive --project landing-page-4ae23`.

---

## 8. Rollback

- **Hosting:** Firebase console → Hosting → **rollback** to a previous release, or redeploy a known-good `out/` artifact.
- **Functions:** Redeploy a previous revision or temporarily remove the `/w/**` rewrite and redeploy hosting only (point PostHog back to direct ingest on the next build).
