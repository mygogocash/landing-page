import posthog from "posthog-js";
import { publicPostHogKey, shouldLoadPostHog } from "@/lib/app-config";

/**
 * Bump when payloads or semantics change in a breaking way; keep dashboards
 * aware via filters or new event names for larger rewrites.
 * @see https://posthog.com/docs/product-analytics/best-practices
 */
export const POSTHOG_MARKETING_SCHEMA_VERSION = 1 as const;

/** Stable names: `category:object_action`, lowercase, snake_case segments. */
export const PostHogMarketingEvents = {
  launchAppCtaClick: "marketing:launch_app_cta_click",
  siteSearchSubmit: "marketing:site_search_submit",
  localeLanguageSelect: "marketing:locale_language_select",
  localeRegionSelect: "marketing:locale_region_select",
  brandsLoadMoreClick: "marketing:brands_load_more_click",
} as const;

function captureMarketing(
  event: string,
  properties: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;
  if (!shouldLoadPostHog() || !publicPostHogKey()) return;
  try {
    posthog.capture(event, {
      event_schema_version: POSTHOG_MARKETING_SCHEMA_VERSION,
      ...properties,
    });
  } catch {
    /* SDK not ready */
  }
}

export type LaunchAppSurface = "web_desktop" | "line_mobile";

export function phLaunchAppCtaClick(surface: LaunchAppSurface): void {
  captureMarketing(PostHogMarketingEvents.launchAppCtaClick, { surface });
}

export function phSiteSearchSubmit(search_term: string): void {
  const term = search_term.trim();
  if (!term) return;
  captureMarketing(PostHogMarketingEvents.siteSearchSubmit, { search_term: term });
}

export function phLocaleLanguageSelect(language_code: string): void {
  captureMarketing(PostHogMarketingEvents.localeLanguageSelect, {
    language_code,
  });
}

export function phLocaleRegionSelect(region_code: string): void {
  captureMarketing(PostHogMarketingEvents.localeRegionSelect, { region_code });
}

export function phBrandsLoadMoreClick(
  visible_count: number,
  total_brands: number,
): void {
  captureMarketing(PostHogMarketingEvents.brandsLoadMoreClick, {
    visible_count,
    total_brands,
  });
}
