# Keyword ↔ URL matrix (GoGoCash landing)

Assign **one primary intent per URL**. Use this when writing ads, meta, and internal links. Update quarterly (see `content-strategy-seo-aeo-sem-geo.md`).

| Primary intent | Example queries / themes | Canonical URL | Notes |
|----------------|---------------------------|---------------|--------|
| Brand + cashback | “gogocash”, “gogocash app” | `/` | Hero + FAQ; schema `WebSite`, `Organization` |
| Generic cashback SEA | “cashback southeast asia”, “shopping cashback app” | `/` | Supporting line uses `lib/site-facts.ts` |
| Merchant + cashback (paid) | “shopee cashback”, “lazada cashback”, “agoda cashback” | `/lp/shopee-cashback`, `/lp/lazada-cashback`, `/lp/agoda-travel-cashback` | **noindex**; message match to ad copy |
| How tracking works | “how does cashback track”, “affiliate cashback explained” | `/learn/how-cashback-works` | Definition → steps → edge cases |
| Withdraw / payout | “withdraw gogocash”, “cashback payout” | `/learn/withdraw-cashback-gogocash` | Linked from home teaser |
| Tracking failures | “cashback not showing”, “order not tracked” | `/learn/cashback-not-tracking-fixes` | Checklist + support path |
| Minimum withdrawal | “minimum withdraw gogocash” | `/learn/minimum-withdrawal-payouts-sea` | Country/rail nuance |
| Saving product | “saving plus gogocash” | `/learn/saving-plus-explained` | Risk disclosure tone |
| Thailand shopping | “cashback thailand shopee lazada” | `/learn/best-cashback-stores-thailand`, `/th` | Geo page + guide |
| Indonesia | “gogocash indonesia”, “cashback indonesia” | `/id` | Bahasa meta; hreflang |
| Thailand (Thai UI page) | Thai brand + cashback | `/th` | Thai meta; hreflang `th` |
| Trust / policy | “gogocash privacy”, terms | `/privacy-policy`, `/term-of-use`, `/terms-of-service` | Terms of Service mirrors Terms of Use URL for ads/compliance |
| Business model | “how does gogocash make money” | `/how-gogocash-makes-money` | Transparency for Ads / E-E-A-T |
| About / entity | “what is gogocash” | `/about` | E-E-A-T; contact via LINE OA |
| Site search (structured) | — | `/search` | `SearchAction` in JSON-LD |

**Consistency rule:** Partner count, max cashback phrase, and region list must match `lib/site-facts.ts` anywhere they appear in copy or schema.
