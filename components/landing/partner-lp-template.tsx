import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LaunchAppLink from "@/components/launch-app-link";
import { ArrowUpRight } from "@/components/icons";

export type PartnerLpTemplateProps = {
  partnerName: string;
  headline: string;
  description: string;
  bullets: readonly string[];
};

export default function PartnerLpTemplate({
  partnerName,
  headline,
  description,
  bullets,
}: PartnerLpTemplateProps) {
  return (
    <>
      <Header />
      <main
        role="main"
        className="min-h-[60vh] bg-gradient-to-b from-mint/40 via-white to-cream/30"
      >
        <div className="mx-auto max-w-site px-6 pb-24 pt-28 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Partner landing
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            {headline}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
            {description}
          </p>
          <ul className="mt-8 max-w-2xl space-y-3 text-sm text-gray-700">
            {bullets.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LaunchAppLink className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-primary-dark">
              Open GoGoCash for {partnerName}
              <ArrowUpRight className="h-5 w-5 shrink-0" />
            </LaunchAppLink>
            <Link
              href="/#partners"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              Browse all partners
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
