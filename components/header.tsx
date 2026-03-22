"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight, Menu, X } from "@/components/icons";
import { LINE_MINI_APP_HREF } from "@/components/social-data";
import GoGoCashLogo from "./gogocash-logo";
import LaunchAppLink from "@/components/launch-app-link";
import { LocaleDropdown } from "./locale-menu";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Brands", href: "#partners" },
  { label: "FAQ", href: "#faq" },
];

/** Document order (top → bottom) for scroll spy. Must match `id`s on the page. */
const NAV_SECTION_ORDER = [
  "home",
  "partners",
  "how-it-works",
  "faq",
] as const;

/** Viewport Y (px) used for “which section is active” — aligns ~`scroll-mt-28`. */
const SPY_Y = 120;

type SectionId = (typeof NAV_SECTION_ORDER)[number];

/** True when the horizontal “reading line” at viewport Y lies inside the section’s vertical span. */
function activationLineInSection(el: HTMLElement, y: number): boolean {
  const r = el.getBoundingClientRect();
  return r.top < y && r.bottom > y;
}

function computeActiveSectionFromScroll(): SectionId {
  for (let i = NAV_SECTION_ORDER.length - 1; i >= 0; i--) {
    const id = NAV_SECTION_ORDER[i];
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= SPY_Y) {
      return id;
    }
  }
  return "home";
}

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  /** After in-page nav click, keep highlight until the target section reaches the spy band (avoids wrong section flash while smooth-scrolling). */
  const navLockRef = useRef<SectionId | null>(null);

  const updateFromScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const locked = navLockRef.current;
    if (locked) {
      const target = document.getElementById(locked);
      if (target && activationLineInSection(target, SPY_Y)) {
        navLockRef.current = null;
      } else {
        setActiveSection(locked);
        return;
      }
    }

    setActiveSection(computeActiveSectionFromScroll());
  }, []);

  useEffect(() => {
    const onScrollEnd = () => {
      navLockRef.current = null;
      updateFromScroll();
    };

    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("scrollend", onScrollEnd);
    const raf = requestAnimationFrame(() => updateFromScroll());
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("scrollend", onScrollEnd);
    };
  }, [updateFromScroll]);

  const handleNavClick = (id: SectionId) => {
    navLockRef.current = id;
    setActiveSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 animate-header-enter motion-reduce:animate-none motion-reduce:opacity-100 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out ${
        scrolled
          ? "bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.05)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between gap-3 px-6 py-4 lg:px-8">
        <a
          href="#home"
          onClick={() => handleNavClick("home")}
          className="flex min-h-11 min-w-0 shrink items-center gap-2"
        >
          <GoGoCashLogo className="h-8" variant="color" />
        </a>

        <nav className="hidden items-center md:flex">
          <div className="flex items-center gap-0.5 rounded-full border border-gray-200 bg-white/90 px-1.5 py-1 backdrop-blur-sm lg:gap-1 lg:px-2">
            {NAV_ITEMS.map((item) => {
              const id = item.href.slice(1) as SectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(id)}
                  className={`relative flex min-h-10 items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 ease-out lg:px-4 ${
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
            })}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <LocaleDropdown />
          <LaunchAppLink className="min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl hover:scale-105 motion-reduce:transition-colors motion-reduce:hover:scale-100 sm:px-6 md:px-8 md:py-3.5">
            Launch App
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
            {NAV_ITEMS.map((item) => {
              const id = item.href.slice(1) as SectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    handleNavClick(id);
                    setMobileMenuOpen(false);
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
            })}
            <a
              href={LINE_MINI_APP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl hover:scale-105 motion-reduce:transition-colors motion-reduce:hover:scale-100"
            >
              Launch App
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
