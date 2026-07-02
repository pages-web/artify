import { getTranslations } from "next-intl/server";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGE } from "@/graphql/cms/queries/page";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionLabel } from "@/components/sections/SectionLabel";
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
    variables: { slug: "products", language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  const page = data?.cpPageDetail;

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-20 lg:py-32">
          <FadeIn>
            <SectionLabel text={page?.name ?? "Products"} />
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-8 text-4xl font-light tracking-tight text-foreground lg:text-6xl">
              {page?.description ?? "Барилгын шийдлүүд"}
            </h1>
          </FadeIn>
        </div>
      </section>

      <ProductsSection />

      {page?.content && (
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-20">
            <FadeIn>
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />
            </FadeIn>
          </div>
        </section>
      )}
    </>
  );
}
