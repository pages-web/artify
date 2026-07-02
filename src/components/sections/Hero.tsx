"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FadeIn } from "@/components/motion/FadeIn";
import Image from "@/components/common/Image";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-20 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative z-10">
            <FadeIn>
              <div className="mb-8 flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  {t("label")}
                </span>
                <span className="h-px w-16 bg-primary" />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-5xl font-light leading-[1.05] tracking-tight text-foreground lg:text-7xl">
                {t("line1")}
                <br />
                {t("line2")}
                <br />
                {t("line3")}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg">
                {t("body")}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex h-12 items-center justify-center bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {t("ctaPrimary")}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center border border-primary px-8 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {t("ctaSecondary")}
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="relative">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative aspect-[4/5] w-full bg-muted">
                <Image
                  src="/images/hero-construction.svg"
                  alt="Construction project"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>

            <div className="absolute -right-4 top-0 hidden text-[10rem] font-bold leading-none text-foreground/[0.04] lg:block">
              01
            </div>

            <FadeIn direction="left" delay={0.4}>
              <div className="absolute -left-8 bottom-12 hidden origin-bottom-left -rotate-90 text-xs font-semibold uppercase tracking-[0.3em] text-primary lg:block">
                {t("established")}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
