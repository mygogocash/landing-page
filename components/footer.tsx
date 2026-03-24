import Link from "next/link";
import GoGoCashLogo from "./gogocash-logo";
import {
  LINE_MINI_APP_HREF,
  LINE_OFFICIAL_ACCOUNT_HREF,
  SOCIAL_ICONS,
  WEB_APP_HREF,
} from "@/components/social-data";
import SocialIcon from "@/components/social-icon";

const FOOTER_LINKS = {
  "Live on Platform": [
    { label: "Website", href: WEB_APP_HREF },
    { label: "Telegram Mini App", href: "https://t.me/GoGoCashAppBot" },
    {
      label: "Line Mini App",
      href: LINE_MINI_APP_HREF,
    },
  ],
  Products: [
    {
      label: "Business Inquiries",
      href: LINE_OFFICIAL_ACCOUNT_HREF,
    },
    {
      label: "Careers",
      href: LINE_OFFICIAL_ACCOUNT_HREF,
    },
  ],
  Resources: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/term-of-use" },
    { label: "Terms of Service", href: "/terms-of-service" },
    {
      label: "How GoGoCash Makes Money",
      href: "/how-gogocash-makes-money",
    },
    { label: "Learn", href: "/learn" },
    {
      label: "System Status",
      href: "https://status.gogocash.co/",
    },
    { label: "Cookie Settings", href: "/privacy-policy" },
  ],
};

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-white pt-20 pb-8">
      <div className="mx-auto max-w-site px-6 lg:px-8">
        {/* Top section */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Left: Logo */}
          <div className="max-w-sm">
            <Link
              href="/#home"
              className="inline-flex min-w-0 shrink-0 rounded-lg outline-none ring-primary/40 transition-opacity hover:opacity-90 focus-visible:ring-2"
              aria-label="GoGoCash — back to home"
            >
              <GoGoCashLogo className="h-8" variant="color" />
            </Link>
          </div>

          {/* Right: Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-[#1f2937]">
                  {title}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {links.map((link) => {
                    const external = link.href.startsWith("http");
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-[#6b7280] transition-colors hover:text-[#1f2937]"
                          {...(external
                            ? {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              }
                            : {})}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <nav
          aria-label="Legal links"
          className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-gray-100 pt-8 text-sm"
        >
          <a
            href="/privacy-policy"
            className="text-[#6b7280] underline-offset-2 hover:text-[#1f2937] hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-[#6b7280] underline-offset-2 hover:text-[#1f2937] hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="/how-gogocash-makes-money"
            className="text-[#6b7280] underline-offset-2 hover:text-[#1f2937] hover:underline"
          >
            How GoGoCash Makes Money
          </a>
        </nav>

        <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-[#6b7280]">
            &copy; 2026 Copyright - Made with{" "}
            <span className="text-primary">💚</span> by GoGoCash
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {SOCIAL_ICONS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-[#6b7280] transition-colors hover:bg-gray-50 hover:text-[#1f2937]"
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Risk disclaimer — below copyright / social */}
        <p className="mt-8 text-xs leading-relaxed text-[#9ca3af]">
          Cashback rates, merchant availability, and product features may
          change. GoGoCash does not provide financial, investment, or tax
          advice. Saving Plus and related offerings involve risk; read terms
          before participating. Past performance is not indicative of future
          results.
        </p>
      </div>
    </footer>
  );
}
