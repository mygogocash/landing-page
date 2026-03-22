import SectionBadge from "@/components/section-badge";
import AnimateOnScroll from "@/components/animate-on-scroll";
import { LINE_MINI_APP_HREF, WEB_APP_HREF } from "@/components/social-data";
import { ArrowUpRight } from "@/components/icons";

export default function AppDownloadSection() {
  return (
    <section
      id="download-app"
      className="scroll-mt-28 bg-cream py-16 md:py-24"
    >
      <div className="mx-auto max-w-site px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimateOnScroll>
            <div>
              <SectionBadge label="Launch App" />
              <h2 className="mt-6 text-3xl font-bold text-gray-800 md:text-4xl">
                Start GoGoCash on with your favorite App
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Use Telegram or LINE mini apps, or open the web app — same
                cashback, optimized for small screens.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Track offers and quests on the go
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Get notified when rates spike
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://t.me/GoGoCashAppBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#229ED9] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Telegram Mini App
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={LINE_MINI_APP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  LINE Mini App
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={WEB_APP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-primary bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-surface-green"
                >
                  Open web app
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="mx-auto flex max-w-sm flex-col items-center rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm lg:mx-0 lg:max-w-none">
              <p className="text-sm font-medium text-gray-500">Scan to open</p>
              <div
                className="mt-4 flex aspect-square w-48 items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 text-xs text-gray-400 md:w-56"
                role="img"
                aria-label="QR code placeholder — replace with production QR linking to app or mini app"
              >
                QR placeholder
              </div>
              <p className="mt-4 text-xs text-gray-400">
                Replace with a QR to your primary download or deep link.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
