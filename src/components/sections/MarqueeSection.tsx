"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import Image from "@/components/common/Image";

const partners = [
  { name: "Partner 1", logo: "/images/logo1.jpeg" },
  { name: "Partner 2", logo: "/images/logo2.png" },
  { name: "Partner 3", logo: "/images/logo3.png" },
  { name: "Partner 4", logo: "/images/logo4.png" },
  { name: "Partner 5", logo: "/images/logo5.png" },
  { name: "Partner 6", logo: "/images/logo6.png" },
  { name: "Partner 7", logo: "/images/logo7.png" },
  { name: "Partner 8", logo: "/images/logo8.png" },
];

function LogoItem({ partner }: { partner: typeof partners[number] }) {
  return (
    <div className="flex shrink-0 items-center justify-center rounded-2xl bg-white px-6 py-4 lg:rounded-3xl lg:px-10 lg:py-6">
      <Image
        src={partner.logo}
        alt={partner.name}
        width={160}
        height={64}
        className="h-10 w-auto object-contain lg:h-14"
      />
    </div>
  );
}

export function MarqueeSection() {
  const t = useTranslations("partners");
  const doubled = [...partners, ...partners];

  return (
    <section className="px-3 py-10 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-[1600px]">
        <FadeIn>
          <h2 className="mb-6 font-display text-2xl font-semibold text-foreground lg:mb-8 lg:text-4xl">
            {t("label")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-[32px] bg-secondary px-4 py-5 lg:rounded-[64px] lg:px-8 lg:py-7">
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
