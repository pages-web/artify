"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionLabel } from "./SectionLabel";

export function StatsGrid() {
  const t = useTranslations("about.stats");

  const stats = [
    { key: "projects", value: "150+", label: t("projects") },
    { key: "years", value: "12+", label: t("years") },
    { key: "experts", value: "48+", label: t("experts") },
    { key: "partners", value: "20+", label: t("partners") },
  ];

  return (
    <div className="grid grid-cols-2 gap-px bg-border">
      {stats.map((stat, index) => (
        <FadeIn key={stat.key} delay={0.1 * index} direction="up">
          <div className="bg-card p-6 lg:p-8">
            <div className="text-3xl font-light text-foreground lg:text-4xl">{stat.value}</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {stat.label}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-20 lg:py-32">
        <FadeIn>
          <SectionLabel text={t("label")} />
        </FadeIn>

        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          <div>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl font-light leading-tight tracking-tight text-foreground lg:text-5xl">
                {t("heading")}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground lg:text-lg">
                {t("body1")}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                {t("body2")}
              </p>
            </FadeIn>
          </div>

          <div className="lg:pt-4">
            <StatsGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
