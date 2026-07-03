import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServerApolloClient, getStaticApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES, CP_PAGE } from "@/graphql/cms/queries/page";
import { routing } from "@/i18n/routing";
import { FadeIn } from "@/components/motion/FadeIn";
import type { CpPagesData, CpPageData, Page } from "@/graphql/cms/queries/page";

export async function generateStaticParams() {
  const results = await Promise.all(
    routing.locales.map(async (locale) => {
      const client = getStaticApolloClient();
      const { data } = await client.query<CpPagesData>({
        query: CP_PAGES,
        variables: { language: locale },
        context: { fetchOptions: { next: { revalidate: 60 } } },
      });
      return (data?.cpPages ?? [])
        .filter((p: Page) => p.slug)
        .map((p: Page) => ({ locale, slug: p.slug as string }));
    })
  );
  return results.flat();
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const client = await getServerApolloClient();
  const { data } = await client.query<CpPageData>({
    query: CP_PAGE,
    variables: { language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  const page = data?.cpPages?.find((p) => p.slug === slug) ?? null;
  if (!page) return {};

  return {
    title: `${page.name} | Artify`,
    description: page.description ?? undefined,
  };
}

export default async function CmsPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = await params;
  const client = await getServerApolloClient();
  const { data } = await client.query<CpPageData>({
    query: CP_PAGE,
    variables: { language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  const page = data?.cpPages?.find((p) => p.slug === slug) ?? null;
  if (!page) notFound();

  return (
    <article className="border-b border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-20 lg:py-32">
        <FadeIn>
          <h1 className="text-4xl font-light tracking-tight text-foreground lg:text-6xl">
            {page.name}
          </h1>
        </FadeIn>

        {page.description && (
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{page.description}</p>
          </FadeIn>
        )}

        {page.content && (
          <FadeIn delay={0.2}>
            <div
              className="prose prose-invert mt-12 max-w-none"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </FadeIn>
        )}
      </div>
    </article>
  );
}
