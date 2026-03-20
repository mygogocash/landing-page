import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low py-scale-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Column 1: Logo & Contact */}
          <div>
            <h3 className="text-xl font-bold text-primary">GoGoCash</h3>
            <p className="mt-4 text-sm text-on-surface-variant">
              Your smart shopping companion
            </p>
          </div>

          {/* Column 2: Menu */}
          <div>
            <h4 className="text-sm font-semibold text-on-surface">Menu</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-sm text-on-surface-variant transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-sm text-on-surface-variant transition-colors hover:text-primary"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-on-surface-variant transition-colors hover:text-primary"
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service */}
          <div>
            <h4 className="text-sm font-semibold text-on-surface">Service</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#faq"
                  className="text-sm text-on-surface-variant transition-colors hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-on-surface-variant transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="text-sm font-semibold text-on-surface">Follow Us</h4>
            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-on-surface transition-colors hover:bg-surface-container-low"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-on-surface transition-colors hover:bg-surface-container-low"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-scale-16 flex flex-col items-center justify-between gap-4 border-t border-outline-variant/15 pt-8 md:flex-row">
          <p className="text-xs text-on-surface-variant">
            © 2024 GoGoCash. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-on-surface-variant hover:text-primary">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
