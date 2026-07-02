"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionLabel } from "./SectionLabel";
import { MapPin, Phone, Mail } from "lucide-react";

interface ContactFormProps {
  locale: string;
}

export function ContactForm({ locale }: ContactFormProps) {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-20 lg:py-32">
        <FadeIn>
          <SectionLabel text={t("label")} />
        </FadeIn>

        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          <div>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-5xl">
                {t("heading")}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg">
                {t("body")}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-4 text-sm text-muted-foreground lg:text-base">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-primary" />
                  {t("address")}
                </li>
                <li className="flex items-center gap-4 text-sm text-muted-foreground lg:text-base">
                  <Phone size={20} className="shrink-0 text-primary" />
                  {t("phone")}
                </li>
                <li className="flex items-center gap-4 text-sm text-muted-foreground lg:text-base">
                  <Mail size={20} className="shrink-0 text-primary" />
                  {t("emailAddress")}
                </li>
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left">
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 lg:p-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  {t("name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 block w-full border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  {t("email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 block w-full border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 block w-full border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                ></textarea>
              </div>

              {submitted ? (
                <p className="text-sm font-medium text-success">{t("success")}</p>
              ) : (
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {t("submit")}
                </button>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
