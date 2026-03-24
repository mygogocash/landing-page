import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectId = process.env.FIREBASE_PROJECT_ID ?? "landing-page-4ae23";
const sites = process.argv.slice(2);
const targetSites =
  sites.length > 0
    ? sites
    : ["landing-page-4ae23-947ee", "landing-page-4ae23-514a9"];

const firebaseJsonPath = fileURLToPath(new URL("../firebase.json", import.meta.url));
const firebaseCliPath = fileURLToPath(
  new URL("../node_modules/firebase-tools/lib/bin/firebase.js", import.meta.url),
);
const baseConfig = JSON.parse(readFileSync(firebaseJsonPath, "utf8"));

if (!baseConfig.hosting || Array.isArray(baseConfig.hosting)) {
  throw new Error("firebase.json must define a single hosting config object");
}

const configDir = mkdtempSync(join(tmpdir(), "firebase-hosting-"));

for (const site of targetSites) {
  const siteConfig = structuredClone(baseConfig);
  siteConfig.hosting.public = resolve(process.cwd(), siteConfig.hosting.public);
  siteConfig.hosting.site = site;

  const siteConfigPath = join(configDir, `${site}.firebase.json`);
  writeFileSync(siteConfigPath, JSON.stringify(siteConfig));

  console.log(`Deploying Firebase Hosting site: ${site}`);

  const result = spawnSync(
    process.execPath,
    [
      firebaseCliPath,
      "deploy",
      "--project",
      projectId,
      "--config",
      siteConfigPath,
      "--only",
      "hosting",
      "--non-interactive",
    ],
    {
      env: process.env,
      stdio: "inherit",
    },
  );

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
