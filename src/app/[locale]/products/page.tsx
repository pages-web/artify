import { getTranslations } from "next-intl/server";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGE } from "@/graphql/cms/queries/page";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProductsSection } from "@/components/sections/ProductsSection";
import type { CpPageData } from "@/graphql/cms/queries/page";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return {
    title: `${t("products")} | Artify`,
    description: "Artify — бүтээгдэхүүн, шийдэл.",
  };
}

export default async function ProductsPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  const client = await getServerApolloClient();
  const { data } = await client.query<CpPageData>({
    query: CP_PAGE,
    variables: { language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  const page = data?.cpPages?.find((p) => p.slug === "products") ?? null;

  return (
    <>
      <section className="px-3 pt-28 lg:px-6 lg:pt-32">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-accent px-6 py-16 text-center text-white lg:rounded-[64px] lg:py-24">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
              {page?.name ?? "Products"}
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight lg:text-5xl">
              {page?.description ?? "Барилгын шийдлүүд"}
            </h1>
          </FadeIn>
        </div>
      </section>

      <ProductsSection />

      {page?.content && (
        <section className="px-3 py-10 lg:px-6">
          <div className="mx-auto max-w-[1400px] rounded-3xl bg-card p-6 shadow-sm lg:rounded-[48px] lg:p-12">
            <FadeIn>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />
            </FadeIn>
          </div>
        </section>
      )}
    </>
  );
}
