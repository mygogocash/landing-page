import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  DEFAULT_LOCALE,
  getSectionedLandingBasePath,
  isSectionedLandingPath,
  resolveAutoRedirectPath,
  resolveLanguageSelection,
  resolveLocaleForPathname,
} from "./locale-routing";

describe("locale-routing", () => {
  it("recognizes sectioned landing paths", () => {
    assert.equal(isSectionedLandingPath("/"), true);
    assert.equal(isSectionedLandingPath("/th"), true);
    assert.equal(isSectionedLandingPath("/ja/offers"), true);
    assert.equal(isSectionedLandingPath("/learn"), false);
    assert.equal(isSectionedLandingPath("/id"), false);
  });

  it("returns the base path for sectioned landing routes", () => {
    assert.equal(getSectionedLandingBasePath("/"), "/");
    assert.equal(getSectionedLandingBasePath("/tw"), "/tw");
    assert.equal(getSectionedLandingBasePath("/ja/anything"), "/ja");
    assert.equal(getSectionedLandingBasePath("/learn"), "/");
  });

  it("resolves locale from known pathnames", () => {
    assert.deepEqual(resolveLocaleForPathname("/"), DEFAULT_LOCALE);
    assert.deepEqual(resolveLocaleForPathname("/th"), {
      lang: "th",
      region: "TH",
    });
    assert.deepEqual(resolveLocaleForPathname("/id"), {
      lang: "en",
      region: "ID",
    });
    assert.equal(resolveLocaleForPathname("/learn"), null);
  });

  it("maps language selection to route and locale", () => {
    assert.deepEqual(resolveLanguageSelection("en", "SG"), {
      path: "/",
      locale: { lang: "en", region: "SG" },
    });
    assert.deepEqual(resolveLanguageSelection("zh-TW", "TH"), {
      path: "/tw",
      locale: { lang: "zh-TW", region: "TW" },
    });
  });

  it("maps browser languages to auto-redirect paths", () => {
    assert.equal(resolveAutoRedirectPath("th"), "/th");
    assert.equal(resolveAutoRedirectPath("id"), "/id");
    assert.equal(resolveAutoRedirectPath("ja"), null);
  });
});
