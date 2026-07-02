"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionLabel } from "./SectionLabel";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-20 lg:py-32">
        <FadeIn>
          <SectionLabel text={t("label")} />
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-8 text-3xl font-light tracking-tight text-foreground lg:text-5xl">
            {t("heading")}
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-px bg-border lg:grid-cols-2">
          <FadeIn delay={0.2} direction="up">
            <div className="bg-card p-8 lg:p-12">
              <blockquote className="text-xl font-light leading-relaxed text-foreground lg:text-2xl">
                “{t("quote1")}”
              </blockquote>
              <p className="mt-8 text-sm font-medium text-primary">{t("author1")}</p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-px bg-border">
            <FadeIn delay={0.3} direction="up">
              <div className="flex-1 bg-card p-8 lg:p-10">
                <blockquote className="text-base leading-relaxed text-foreground lg:text-lg">
                  “{t("quote2")}”
                </blockquote>
                <p className="mt-6 text-sm font-medium text-primary">{t("author2")}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <div className="flex-1 bg-card p-8 lg:p-10">
                <blockquote className="text-base leading-relaxed text-foreground lg:text-lg">
                  “{t("quote3")}”
                </blockquote>
                <p className="mt-6 text-sm font-medium text-primary">{t("author3")}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
