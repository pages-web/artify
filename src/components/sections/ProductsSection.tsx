"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionLabel } from "./SectionLabel";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  external?: boolean;
  cta: string;
  delay?: number;
}

function ProductCard({ title, description, href, external, cta, delay = 0 }: ProductCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="group bg-card p-8 transition-colors hover:bg-card/80 lg:p-10">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
          {description}
        </p>
        {external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            {cta}
            <ArrowUpRight size={16} />
          </a>
        ) : (
          <Link
            href={href}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            {cta}
            <ArrowUpRight size={16} />
          </Link>
        )}
      </div>
    </FadeIn>
  );
}

export function ProductsSection() {
  const t = useTranslations("products");

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

        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          <ProductCard
            title={t("blockAcademy.title")}
            description={t("blockAcademy.description")}
            href="/products"
            cta={t("cta")}
            delay={0.2}
          />
          <ProductCard
            title={t("techInvent.title")}
            description={t("techInvent.description")}
            href="https://tech-invent.vercel.app/mn"
            external
            cta={t("cta")}
            delay={0.3}
          />
          <ProductCard
            title={t("customMaterials.title")}
            description={t("customMaterials.description")}
            href="/contact"
            cta={t("order")}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
