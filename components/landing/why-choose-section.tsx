import SectionBadge from "@/components/section-badge";
import AnimateOnScroll from "@/components/animate-on-scroll";
import { Sparkles, Shield, Coins, Headphones } from "@/components/icons";
import { SITE_FACTS } from "@/lib/site-facts";

const CARDS = [
  {
    icon: Coins,
    title: "Cashback you can feel in your wallet",
    body: "Balance goes up after the store confirms — spend it or grow it with Saving Plus.",
    bg: "bg-mint",
  },
  {
    icon: Shield,
    title: "Brands you already trust",
    body: `Earn at ${SITE_FACTS.partnerCountLabel} partners across SEA with rates shown before you checkout.`,
    bg: "bg-cream",
  },
  {
    icon: Sparkles,
    title: "Quests that match how you shop",
    body: "Seasonal challenges and boosts so everyday spends stack faster.",
    bg: "bg-cream",
  },
  {
    icon: Headphones,
    title: "Humans when something's unclear",
    body: "Tracking, timing, or withdrawals — chat or email us any time.",
    bg: "bg-mint",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-gogocash" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto min-w-0 max-w-site px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="flex flex-col items-center text-center">
            <SectionBadge
              icon={<Sparkles className="h-4 w-4" />}
              label="Why GoGoCash"
            />
            <h2 className="mt-6 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
              Why shoppers stick with GoGoCash
            </h2>
            <p className="mt-4 max-w-2xl text-base text-gray-500">
              Real money back on familiar stores, clear timing, and rewards you
              can withdraw — on web and in our mini apps.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <AnimateOnScroll key={card.title} delay={i * 100}>
                <div
                  className={`rounded-3xl p-8 lg:p-10 ${card.bg} min-h-[220px]`}
                >
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-xl font-bold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {card.body}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
