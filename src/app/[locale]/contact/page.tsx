import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/sections/ContactForm";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return {
    title: `${t("contact")} | Artify`,
    description: "Artify — холбоо барих.",
  };
}

export default async function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  return <ContactForm locale={locale} />;
}
