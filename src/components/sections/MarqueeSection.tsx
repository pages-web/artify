"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

const partners = [
  { name: "Artify", logo: "/images/artify.logo.png" },
  { name: "Remax Platinum", logo: "/images/remax.logo1.png" },
  { name: "Tech Invent", logo: "/images/Tech.logo.png", size: "small" },
  { name: "Zehnder", logo: "/images/zehnder.logo.png" },
  { name: "erxes", logo: "/images/erxes.logo.png", size: "small" },
  { name: "Block MN", logo: "/images/logo2.png" },
  { name: "IDART", logo: "/images/logo5.png" },
];

function LogoItem({ partner }: { partner: typeof partners[number] }) {
  const sizeClasses = {
    small: "h-10 lg:h-14",
    large: "h-16 lg:h-24",
    default: "h-14 lg:h-20",
  };

  const heightClass = partner.size ? sizeClasses[partner.size as keyof typeof sizeClasses] : sizeClasses.default;

  return (
    <div className="flex shrink-0 items-center justify-center px-6 py-4 lg:px-10 lg:py-6">
      <img
        src={partner.logo}
        alt={partner.name}
        className={`w-auto max-w-[200px] object-contain lg:max-w-[280px] ${heightClass}`}
      />
    </div>
  );
}

export function MarqueeSection() {
  const t = useTranslations("partners");
  const doubled = [...partners, ...partners];

  return (
    <section className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 px-3 py-10 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-[1600px]">
        <FadeIn>
          <h2 className="mb-6 text-center font-display text-2xl font-semibold text-foreground lg:mb-8 lg:text-4xl">
            {t("label")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-[32px] bg-white/80 backdrop-blur px-4 py-5 shadow-sm lg:rounded-[64px] lg:px-8 lg:py-7">
            <div className="flex animate-marquee items-center gap-4 lg:gap-6">
              {doubled.map((partner, index) => (
                <LogoItem key={`${partner.name}-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
