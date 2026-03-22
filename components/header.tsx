"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import GoGoCashLogo from "./gogocash-logo";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "features", "about"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <GoGoCashLogo className="h-8" variant="color" />
        </a>

        {/* Desktop Navigation - Pill */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white/90 px-2 py-1.5 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-[#6b7280] hover:text-[#1f2937]"
                }`}
              >
                {activeSection === item.href.slice(1) && (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                )}
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Get Started Button */}
        <a
          href="#"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "bg-surface-green text-primary"
                    : "text-[#6b7280] hover:bg-gray-50"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
