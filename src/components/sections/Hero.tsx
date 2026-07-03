"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowRight } from "lucide-react";
import Image from "@/components/common/Image";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="mx-3 mt-20 lg:mx-6 lg:mt-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent px-6 py-16 lg:rounded-[64px] lg:px-16 lg:py-28">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn>
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              {t("label")}
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-white lg:text-6xl xl:text-7xl">
              {t("line1")}
              <br />
              {t("line2")}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 lg:text-lg">
              {t("body")}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-primary transition-transform hover:scale-105"
              >
                {t("ctaPrimary")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/40 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t("ctaSecondary")}
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl lg:h-96 lg:w-96">
        </div>
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl lg:h-96 lg:w-96">
        </div>
      </div>
    </section>
  );
}
