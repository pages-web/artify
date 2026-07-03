"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  const companyLinks = [
    { href: "/about", label: nav("about") },
    { href: "/products", label: nav("products") },
    { href: "/blog", label: nav("blog") },
    { href: "/contact", label: nav("contact") },
  ];

  return (
    <footer className="mx-3 mt-10 pb-6 lg:mx-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 to-sky-600 px-6 py-10 text-white lg:rounded-[64px] lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Link href="/" className="font-display text-2xl font-bold text-white lg:text-3xl">
                Artify®
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
                {t("tagline")}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {t("company")}
              </h4>
              <ul className="mt-5 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {t("contact")}
              </h4>
              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-2 text-sm text-white/80">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  {t("address")}
                </li>
                <li className="flex items-center gap-2 text-sm text-white/80">
                  <Phone size={16} className="shrink-0" />
                  {t("phone")}
                </li>
                <li className="flex items-center gap-2 text-sm text-white/80">
                  <Mail size={16} className="shrink-0" />
                  {t("emailAddress")}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {locale === "mn" ? "Бүтээгдэхүүн" : "Products"}
              </h4>
              <ul className="mt-5 space-y-3">
                <li className="text-sm text-white/80">Block Academy</li>
                <li className="text-sm text-white/80">Tech Invent</li>
                <li className="text-sm text-white/80">Custom Materials</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-sm text-white/70 lg:flex-row">
            <p>{t("rights")}</p>
            <p>{t("copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
