"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "@/components/icons";
import { LINE_MINI_APP_HREF } from "@/components/social-data";
import GoGoCashLogo from "./gogocash-logo";
import LaunchAppLink from "@/components/launch-app-link";
import { LocaleDropdown } from "./locale-menu";
import {
  getSectionedLandingBasePath,
  isSectionedLandingPath,
} from "@/lib/locale-routing";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const NAV_HASH_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Brands", href: "#brands" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
] as const;

/** Document order (top → bottom) for scroll spy. Must match `id`s on the page. */
const NAV_SECTION_ORDER = [
  "home",
  "brands",
  "how-it-works",
  "faq",
] as const;

/** Viewport Y (px) used for “which section is active” — aligns ~`scroll-mt-28`. */
const SPY_Y = 120;

type SectionId = (typeof NAV_SECTION_ORDER)[number];

export default function Header() {
  const pathname = usePathname();
  const onHomePage = useMemo(() => isSectionedLandingPath(pathname), [pathname]);
  const homeBase = useMemo(
    () => getSectionedLandingBasePath(pathname),
    [pathname],
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    activeSection,
    scrolled,
    lockActiveSection,
  } = useScrollSpy<SectionId>({
    enabled: onHomePage,
    sectionIds: NAV_SECTION_ORDER,
    spyY: SPY_Y,
  });

  const handleNavClick = (id: SectionId) => {
    lockActiveSection(id);
  };

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 animate-header-enter motion-reduce:animate-none motion-reduce:opacity-100 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out ${
        scrolled
          ? "bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.05)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between gap-3 px-6 py-4 lg:px-8">
        {onHomePage ? (
          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            className="flex min-h-11 min-w-0 shrink items-center gap-2"
          >
            <GoGoCashLogo className="h-8" variant="color" />
          </a>
        ) : (
          <Link
            href={`${homeBase}#home`}
            className="flex min-h-11 min-w-0 shrink items-center gap-2"
          >
            <GoGoCashLogo className="h-8" variant="color" />
          </Link>
        )}

        <nav
          className="hidden items-center md:flex"
          aria-label="Main navigation"
        >
          <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white/90 px-1.5 py-1 backdrop-blur-sm lg:gap-1.5 lg:px-2">
            <div className="flex items-center gap-0.5 lg:gap-1">
              {NAV_HASH_ITEMS.map((item) => {
                const id = item.href.slice(1) as SectionId;
                const sectionHref = onHomePage
                  ? item.href
                  : `${homeBase}${item.href}`;
                const navItemClass =
                  "relative flex min-h-10 items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 ease-out lg:px-4";
                if (onHomePage) {
                  return (
                    <a
                      key={item.href}
                      href={sectionHref}
                      onClick={() => handleNavClick(id)}
                      className={`${navItemClass} ${
                        activeSection === id
                          ? "text-primary"
                          : "text-[#6b7280] hover:text-[#1f2937]"
                      }`}
                      aria-current={activeSection === id ? "location" : undefined}
                    >
                      {activeSection === id && (
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary transition-opacity duration-300 ease-out" />
                      )}
                      {item.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={sectionHref}
                    className={`${navItemClass} text-[#6b7280] hover:text-[#1f2937]`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <Link
              href="/learn"
              className="flex min-h-10 items-center rounded-full px-3 py-2 text-sm font-medium text-[#6b7280] transition-colors hover:text-[#1f2937] lg:px-4"
            >
              Learn
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <LocaleDropdown />
          <LaunchAppLink className="min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl hover:scale-105 motion-reduce:transition-colors motion-reduce:hover:scale-100 sm:px-6 md:px-8 md:py-3.5">
            Start earning
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </LaunchAppLink>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="animate-header-mobile-drawer border-t border-gray-100 bg-white px-6 py-4 motion-reduce:animate-none md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_HASH_ITEMS.map((item) => {
              const id = item.href.slice(1) as SectionId;
              const sectionHref = onHomePage
                ? item.href
                : `${homeBase}${item.href}`;
              const close = () => setMobileMenuOpen(false);
              if (onHomePage) {
                return (
                  <a
                    key={item.href}
                    href={sectionHref}
                    onClick={() => {
                      handleNavClick(id);
                      close();
                    }}
                    className={`min-h-11 rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-300 ease-out ${
                      activeSection === id
                        ? "bg-surface-green text-primary"
                        : "text-[#6b7280] hover:bg-gray-50"
                    }`}
                    aria-current={activeSection === id ? "location" : undefined}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={sectionHref}
                  onClick={close}
                  className="min-h-11 rounded-lg px-4 py-3 text-sm font-medium text-[#6b7280] transition-colors duration-300 ease-out hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/learn"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-11 rounded-lg px-4 py-3 text-sm font-medium text-[#6b7280] hover:bg-gray-50"
            >
              Learn
            </Link>
            <a
              href={LINE_MINI_APP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl hover:scale-105 motion-reduce:transition-colors motion-reduce:hover:scale-100"
            >
              Start earning
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
