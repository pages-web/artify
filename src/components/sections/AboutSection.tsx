"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export function AboutSection() {
  const t = useTranslations("about");

  const stats = [
    { value: "150+", label: t("stats.projects") },
    { value: "12+", label: t("stats.years") },
    { value: "48+", label: t("stats.experts") },
    { value: "20+", label: t("stats.partners") },
  ];

  return (
    <section className="px-3 py-10 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="rounded-3xl bg-card p-6 shadow-sm lg:rounded-[48px] lg:p-12">
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

          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={0.1 * index} direction="up">
                <div className="rounded-3xl bg-card p-5 text-center shadow-sm lg:rounded-[32px] lg:p-8">
                  <div className="font-display text-3xl font-bold text-primary lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground lg:text-sm">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
