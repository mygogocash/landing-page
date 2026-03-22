import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LegalDocumentShell from "@/components/legal/legal-document-shell";
import { LegalMarkdown } from "@/components/legal/legal-markdown";
import {
  getLearnArticlePageData,
  getLearnArticles,
} from "@/lib/learn-data";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const articles = await getLearnArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getLearnArticlePageData(slug);
  if (!data) return {};
  const { meta } = data;
  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
    alternates: { canonical: `/learn/${slug}` },
  };
}

export default async function LearnArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getLearnArticlePageData(slug);
  if (!data) notFound();

  const { meta, markdown } = data;

  return (
    <LegalDocumentShell
      title={meta.title}
      effectiveDate={meta.updated}
      dateLabel="Last updated"
    >
      <p className="mb-8 text-sm text-gray-600">
        <Link href="/learn" className="font-medium text-primary hover:underline">
          ← All Learn articles
        </Link>
      </p>
      <LegalMarkdown content={markdown} />
    </LegalDocumentShell>
  );
}
