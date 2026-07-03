"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FadeIn } from "@/components/motion/FadeIn";
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
      <div className="flex flex-col rounded-3xl bg-card p-5 shadow-sm transition-all hover:shadow-md lg:rounded-[32px] lg:p-8">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted lg:rounded-3xl">
          <div className="h-full w-full bg-gradient-to-br from-secondary to-border" />
        </div>
        <div className="mt-5 flex flex-1 flex-col">
          <h3 className="font-display text-lg font-semibold text-foreground lg:text-xl">{title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground lg:text-base">
            {description}
          </p>
          {external ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              {cta}
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <Link
              href={href}
              className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              {cta}
              <ArrowUpRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export function ProductsSection() {
  const t = useTranslations("products");

  return (
    <section className="px-3 py-10 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="mb-8 flex items-center justify-between lg:mb-12">
            <h2 className="font-display text-2xl font-semibold text-foreground lg:text-4xl">
              {t("heading")}
            </h2>
            <Link
              href="/products"
              className="hidden rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:inline-flex"
            >
              {t("viewAll")}
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ProductCard
            title={t("blockAcademy.title")}
            description={t("blockAcademy.description")}
            href="/products"
            cta={t("cta")}
            delay={0.1}
          />
          <ProductCard
            title={t("techInvent.title")}
            description={t("techInvent.description")}
            href="https://tech-invent.vercel.app/mn"
            external
            cta={t("cta")}
            delay={0.2}
          />
          <ProductCard
            title={t("customMaterials.title")}
            description={t("customMaterials.description")}
            href="/contact"
            cta={t("order")}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
