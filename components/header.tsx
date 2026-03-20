import Link from "next/link";
import { Download } from "lucide-react";

export default function Header() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 glass border-b border-outline-variant/15">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-primary">
          GoGoCash
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#home"
            className="text-sm font-medium text-on-surface transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-on-surface transition-colors hover:text-primary"
          >
            How it works
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-on-surface transition-colors hover:text-primary"
          >
            About us
          </Link>
        </div>

        <button className="btn-primary-gradient inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-on-primary shadow-ambient transition-transform hover:-translate-y-0.5">
          <Download className="h-4 w-4" />
          Download App
        </button>
      </div>
    </nav>
  );
}
