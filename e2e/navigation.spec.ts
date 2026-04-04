import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("locale menu: choosing Thai goes to /th", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/", { waitUntil: "load", timeout: 90_000 });
    await page.getByRole("button", { name: "Language and region" }).click();
    const panel = page.getByRole("dialog", {
      name: "Choose language and region",
    });
    await expect(panel).toBeVisible();
    await panel.getByRole("button", { name: /ไทย/ }).click();
    await expect(page).toHaveURL(/\/th\/?(\?.*)?$/);
    await expect(page.getByRole("main")).toBeVisible({ timeout: 30_000 });
  });

  test("header Learn link (desktop) opens learn hub", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("/", { waitUntil: "load", timeout: 90_000 });
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Learn" })
      .click();
    await expect(page).toHaveURL(/\/learn\/?(\?.*)?$/);
    await expect(page.getByRole("main")).toBeVisible({ timeout: 30_000 });
  });
});
