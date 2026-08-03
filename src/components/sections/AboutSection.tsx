"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import Image from "@/components/common/Image";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="bg-background px-3 py-10 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="h-full">
            <div className="h-full rounded-3xl bg-card p-6 shadow-sm lg:rounded-[48px] lg:p-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {t("label")}
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-foreground lg:text-4xl">
                {t("heading")}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
                {t("body1")}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
                {t("body2")}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} direction="up" className="h-full">
            <div className="relative h-full overflow-hidden rounded-3xl bg-card shadow-sm lg:rounded-[48px]">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                alt="Construction team at work"
                fill
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
