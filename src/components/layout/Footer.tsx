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
  const isMn = locale === "mn";

  const companyLinks = [
    { href: "/about", label: nav("about") },
    { href: "/products", label: nav("products") },
    { href: "/blog", label: nav("blog") },
  ];

  const contactLinks = [
    { href: "/contact", label: nav("contact") },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="text-2xl font-semibold text-foreground">
              Artify®
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("company")}
            </h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("contact")}
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                {isMn ? "Улаанбаатар хот, Монгол" : "Ulaanbaatar, Mongolia"}
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="shrink-0 text-primary" />
                +976 7711 2233
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="shrink-0 text-primary" />
                info@artify.mn
              </li>
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">{t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
