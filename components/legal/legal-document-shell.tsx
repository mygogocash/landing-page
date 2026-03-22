import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function LegalDocumentShell({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] bg-white">
        <div className="mx-auto max-w-site px-6 pb-24 pt-28 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/"
              className="text-sm font-medium text-primary transition-colors duration-200 ease-out hover:text-primary-dark"
            >
              ← Back to home
            </Link>
          </nav>
          <article className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-sm font-medium text-gray-500">
              Effective Date: {effectiveDate}
            </p>
            <div className="mt-10">{children}</div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
