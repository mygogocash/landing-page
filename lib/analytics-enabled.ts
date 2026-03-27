import { isMarketingAnalyticsEnabled } from "@/lib/app-config";

/**
 * Whether to inject gtag / third-party marketing analytics scripts.
 *
 * - Default: **off** in `next dev` (`NODE_ENV === "development"`), **on** in production builds.
 * - `NEXT_PUBLIC_ANALYTICS_ENABLED=true` — force on (e.g. test GA from dev).
 * - `NEXT_PUBLIC_ANALYTICS_ENABLED=false` — force off (e.g. `next start` on localhost).
 */
export function shouldLoadMarketingAnalyticsScripts(): boolean {
  return isMarketingAnalyticsEnabled();
}
