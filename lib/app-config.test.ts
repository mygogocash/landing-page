import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import {
  involveAsiaConfig,
  isMarketingAnalyticsEnabled,
  marketingSiteOrigin,
  marketingSiteUrl,
  postHogApiHost,
  postHogNeedsUiHost,
  postHogUiHost,
  publicFirebaseConfig,
  publicFirebaseMeasurementId,
  publicLineTagId,
  publicPostHogKey,
  shouldLoadPostHog,
  strapiBaseUrl,
} from "./app-config";

const ORIGINAL_ENV = { ...process.env };

afterEach(() => {
  process.env = { ...ORIGINAL_ENV };
});

describe("app-config", () => {
  it("prefers NEXT_PUBLIC_SITE_URL over VERCEL_URL", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com";
    process.env.VERCEL_URL = "preview.vercel.app";

    assert.equal(marketingSiteUrl(), "https://example.com/");
    assert.equal(marketingSiteOrigin(), "https://example.com");
  });

  it("falls back to VERCEL_URL when the public site url is missing", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    process.env.VERCEL_URL = "landing-preview.vercel.app";

    assert.equal(marketingSiteUrl(), "https://landing-preview.vercel.app/");
  });

  it("uses production as the default analytics mode", () => {
    delete process.env.NEXT_PUBLIC_ANALYTICS_ENABLED;
    process.env = { ...process.env, NODE_ENV: "production" };
    assert.equal(isMarketingAnalyticsEnabled(), true);

    process.env = { ...process.env, NODE_ENV: "development" };
    assert.equal(isMarketingAnalyticsEnabled(), false);
  });

  it("honors analytics overrides", () => {
    process.env.NEXT_PUBLIC_ANALYTICS_ENABLED = "true";
    process.env = { ...process.env, NODE_ENV: "development" };
    assert.equal(isMarketingAnalyticsEnabled(), true);

    process.env.NEXT_PUBLIC_ANALYTICS_ENABLED = "false";
    process.env = { ...process.env, NODE_ENV: "production" };
    assert.equal(isMarketingAnalyticsEnabled(), false);
  });

  it("exposes LINE Tag id by default and allows disabling with empty env", () => {
    delete process.env.NEXT_PUBLIC_LINE_TAG_ID;
    assert.match(publicLineTagId() ?? "", /^[0-9a-f-]{36}$/i);

    process.env.NEXT_PUBLIC_LINE_TAG_ID = "";
    assert.equal(publicLineTagId(), null);
    delete process.env.NEXT_PUBLIC_LINE_TAG_ID;
  });

  it("returns the default public firebase config with overrides applied", () => {
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID = "custom-project";
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = "G-CUSTOM";

    const config = publicFirebaseConfig();
    assert.ok(config);
    assert.equal(config?.projectId, "custom-project");
    assert.equal(publicFirebaseMeasurementId(), "G-CUSTOM");
  });

  it("loads PostHog only when a key is set and rules allow", () => {
    delete process.env.NEXT_PUBLIC_POSTHOG_KEY;
    delete process.env.NEXT_PUBLIC_POSTHOG_ENABLED;
    assert.equal(publicPostHogKey(), null);
    assert.equal(shouldLoadPostHog(), false);

    process.env.NEXT_PUBLIC_POSTHOG_KEY = "phc_test";
    process.env = { ...process.env, NODE_ENV: "development" };
    delete process.env.NEXT_PUBLIC_ANALYTICS_ENABLED;
    assert.equal(shouldLoadPostHog(), false);

    process.env.NEXT_PUBLIC_POSTHOG_ENABLED = "true";
    assert.equal(shouldLoadPostHog(), true);

    process.env.NEXT_PUBLIC_POSTHOG_ENABLED = "false";
    process.env = { ...process.env, NODE_ENV: "production" };
    assert.equal(shouldLoadPostHog(), false);
  });

  it("normalizes PostHog API host and falls back to US cloud", () => {
    delete process.env.NEXT_PUBLIC_POSTHOG_HOST;
    assert.match(postHogApiHost(), /^https:\/\/us\.i\.posthog\.com$/);

    process.env.NEXT_PUBLIC_POSTHOG_HOST = "https://eu.i.posthog.com/";
    assert.equal(postHogApiHost(), "https://eu.i.posthog.com");
  });

  it("sets ui_host when using a proxy ingest URL", () => {
    delete process.env.NEXT_PUBLIC_POSTHOG_UI_HOST;
    delete process.env.NEXT_PUBLIC_POSTHOG_HOST;
    assert.equal(postHogNeedsUiHost(), false);
    assert.equal(postHogUiHost(), "https://us.posthog.com");

    process.env.NEXT_PUBLIC_POSTHOG_HOST = "https://gogocash.co/w";
    assert.equal(postHogNeedsUiHost(), true);
    assert.equal(postHogUiHost(), "https://us.posthog.com");

    process.env.NEXT_PUBLIC_POSTHOG_UI_HOST = "https://eu.posthog.com";
    assert.equal(postHogUiHost(), "https://eu.posthog.com");
  });

  it("normalizes strapi base url and involve asia pagination bounds", () => {
    process.env.STRAPI_URL = "https://cms.example.com/";
    process.env.INVOLVE_ASIA_MAX_OFFER_PAGES = "100";

    assert.equal(strapiBaseUrl(), "https://cms.example.com");
    assert.equal(involveAsiaConfig().maxOfferPages, 50);

    process.env.INVOLVE_ASIA_MAX_OFFER_PAGES = "0";
    assert.equal(involveAsiaConfig().maxOfferPages, 5);
  });
});
