import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import LegalDocumentShell from "@/components/legal/legal-document-shell";
import { LegalMarkdown } from "@/components/legal/legal-markdown";

export const metadata: Metadata = {
  title: "Privacy Policy | GoGoCash",
  description:
    "GoGoCash Privacy Notice — how we collect, use, disclose, and protect your personal data on GoGoCash Platforms.",
};

export default function PrivacyPolicyPage() {
  const content = fs.readFileSync(
    path.join(process.cwd(), "content/legal/privacy-policy.md"),
    "utf8",
  );

  return (
    <LegalDocumentShell title="Privacy Policy" effectiveDate="February 1, 2025">
      <LegalMarkdown content={content} />
    </LegalDocumentShell>
  );
}
