import SectionBadge from "@/components/section-badge";
import AnimateOnScroll from "@/components/animate-on-scroll";
import { SOCIAL_ICONS } from "@/components/social-data";
import SocialIcon from "@/components/social-icon";

export default function CommunitySection() {
  return (
    <section id="community" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-site px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="flex flex-col items-center text-center">
            <SectionBadge label="Community" />
            <h2 className="mt-6 text-3xl font-bold text-gray-800 md:text-4xl">
              Join the GoGoCash community
            </h2>
            <p className="mt-4 max-w-xl text-base text-gray-500">
              Tips, drops, and support from the team and other savers — pick
              your channel.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {SOCIAL_ICONS.map((social, i) => (
            <AnimateOnScroll key={social.label} delay={i * 60}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-primary/30 hover:text-primary"
              >
                <SocialIcon name={social.icon} />
                <span className="hidden sm:inline">{social.label}</span>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
