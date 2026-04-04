const LEARN_ARTICLE_CONTENT: Record<string, string> = {
  "how-cashback-works": `## What “cashback” means on GoGoCash

Cashback is a **cash reward** credited to your GoGoCash wallet after a partner brand **confirms** a qualifying purchase that started from GoGoCash. It is not instant magic at checkout — it is tied to tracking and merchant validation.

## The click path matters

Most missed cashback cases come from broken **attribution**. For GoGoCash to tie a session to your account, you should:

- Open the merchant from **GoGoCash** (link or mini app), not from a random tab you opened earlier.
- Complete the purchase in the **same browsing flow** when possible; jumping across devices or browsers can break tracking.
- Temporarily pause aggressive **ad blockers** or strict tracker blocking for the merchant checkout tab.

## What happens after you pay

After you pay, the merchant reports orders to their network. GoGoCash receives a status update (pending, confirmed, or cancelled). **Confirmed** orders are when cashback becomes withdrawable according to the rules shown in your wallet.

### Typical timelines

Many partners confirm within **1–3 business days**. During major sales, review queues can be longer. Travel bookings may confirm closer to the **stay** or **trip** date.

## Returns, cancellations, and partial refunds

If you return items or cancel a booking, the merchant usually **reverses** the commission. GoGoCash will align your cashback with that outcome, which can mean removing or reducing the reward.

## If tracking looks wrong

Collect your **order ID**, merchant name, purchase time, and proof of payment. Contact GoGoCash support — we can open an investigation with the partner when the session should have qualified.

## Related reading

See **Saving Plus** for how optional growth features relate to idle balances, and our **Thailand brands guide** for regional shopping patterns.
`,
  "saving-plus-explained": `## What Saving Plus is (in plain language)

**Saving Plus** is how GoGoCash may help you put **idle cashback balances** to work through simple, disclosed options — without turning cashback into a confusing points game.

## Not a bank account

Cashback in your wallet is a **platform balance** governed by GoGoCash rules and partner validations. Any optional yield or growth feature is **not** a government-insured deposit unless explicitly stated for a specific regulated product in your market.

## Why we offer it

Many users accumulate small amounts of cashback over time. Saving Plus is designed for people who want **low-friction** choices while staying in control — you should always see what you are opting into.

## Risk and transparency

If a feature involves investment-like exposure, we surface **risk summaries** and links to fuller disclosures. If you are unsure, keep balances in the standard wallet until you have read the details in-app.

## Fees and minimums

Some rails may include **third-party fees** (for example bank transfers). Minimums for withdrawal or participation are shown in the app and may vary by country or payout method.

## How this differs from “points”

Traditional points programs often hide value behind tiers and expiries. GoGoCash emphasizes **cashback you can track and withdraw**; Saving Plus is an optional layer for users who want more than a static balance.
`,
  "best-cashback-stores-thailand": `## How to think about “best” brands

Cashback **rates change** with campaigns, categories, and payment methods. The best brand for you is rarely a permanent leaderboard — it is the **highest confirmed rate** for the exact item or trip you are buying **today**.

## Categories Thai shoppers use often

### Marketplaces

Large regional marketplaces frequently run elevated rates during megasales. Compare **electronics**, **fashion**, and **groceries** separately — each vertical can carry different caps.

### Travel

Hotels and flights may track on **checkout** or **completion** of travel. Read the merchant note in GoGoCash before you book; long confirmation windows are normal.

### Electronics and appliances

Big-ticket items can produce meaningful cashback even when the **percentage** looks small. Watch for category exclusions like warranties or add-on services.

## Local payment habits

Promotions sometimes depend on eligible payment types (card vs wallet). If a rate does not track, verify you used an **eligible** method shown in the merchant’s terms.

## Safe shopping reminders

Start every trip from **GoGoCash**, avoid copy-paste links from unknown chats, and keep screenshots of order confirmations when order values are high.

## Check live rates in the app

This article is educational. For **current** numbers, open GoGoCash and browse the partner list — that is the source of truth for your session.
`,
  "withdraw-cashback-gogocash": `## What withdrawing means

Withdrawing moves **confirmed** cashback from your GoGoCash wallet to a **bank account** or **supported e-wallet**, subject to the minimum shown in the app.

## Steps

1. Open GoGoCash and go to your **wallet** or **withdraw** screen.
2. Check the **minimum withdrawal** for your country and payout method.
3. Choose an eligible **destination** (bank or e-wallet) and enter the amount.
4. Confirm; payouts usually complete within **1–3 business days** depending on the rail.

## Edge cases

- **Pending** cashback cannot be withdrawn until the merchant marks the order confirmed.
- **Returns or cancellations** may reverse pending rewards before you withdraw.
- Some rails may show **third-party fees** from banks or wallets — those are outside GoGoCash.

## Summary

You withdraw **after** you meet the in-app minimum on **confirmed** balance; timing depends on the payout method and partner validation.
`,
  "cashback-not-tracking-fixes": `## What “not tracking” usually means

**GoGoCash did not receive a valid referral signal** for that checkout — often because the session did not start from GoGoCash, or the merchant blocked cookies or scripts.

## Quick checklist

1. **Start from GoGoCash** every time (link, Telegram, or LINE mini app) before you browse or add to cart.
2. **Finish on the same browser/device** when possible; switching mid-session can break attribution.
3. **Pause strict ad blockers** and privacy extensions for the merchant checkout tab.
4. **Allow cookies** for the brand’s domain until the order is placed.
5. **Avoid extra tabs** opened from price-comparison sites that overwrite the referral chain.

## When delays are normal

Travel and large-ticket items may show **pending** for longer until the partner validates the booking or delivery.

## If it still fails

Gather your **order ID**, merchant name, time of purchase, and a payment screenshot, then contact **GoGoCash support** — we can escalate with the partner when the session should have qualified.

## Summary

Most tracking issues are fixed by **starting from GoGoCash once**, using a **clean merchant tab**, and avoiding **blockers** during checkout.
`,
  "minimum-withdrawal-payouts-sea": `## What minimum withdrawal is

**Minimum withdrawal** is the smallest confirmed balance you can move out of GoGoCash in one payout. The exact number **depends on your country and payout rail** and is always shown in the app.

## Why platforms use minimums

Minimums reduce **fraud and processing costs** on small transfers and keep payouts efficient across many countries and banking partners.

## How to see yours

Open **Wallet** → **Withdraw** (or the equivalent screen). The UI shows **eligible balance**, **minimum**, and **available methods** for your market.

## Country and rail differences

- **Bank transfer** and **e-wallet** may have **different** minimums or speeds.
- **Holidays and weekends** can add delay on top of the usual 1–3 business day window.
- **Currency and FX** follow your local wallet settings and partner rules.

## Summary

There is **no single global number** — trust the **in-app threshold** for your account, method, and country.
`,
};

export function learnArticleMarkdownBySlug(slug: string): string | null {
  return LEARN_ARTICLE_CONTENT[slug] ?? null;
}
