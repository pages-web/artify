"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

const partners = [
  "TESO Group",
  "UB Group",
  "Mongolia Mining",
  "Barilga.mn",
  "Tech Invent",
  "Block Academy",
  "Build Mongol",
  "Eco Construct",
];

export function MarqueeSection() {
  const t = useTranslations("partners");

  return (
    <section className="px-3 py-10 lg:px-6 lg:py-16">
      <FadeIn>
        <div className="overflow-hidden rounded-full bg-card px-6 py-5 shadow-sm lg:px-12 lg:py-6">
          <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
            {[...partners, ...partners].map((partner, index) => (
              <span
                key={`${partner}-${index}`}
                className="text-base font-medium text-muted-foreground lg:text-lg"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
