import { getTranslations } from "next-intl/server";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_POSTS } from "@/graphql/cms/queries/post";
import { FadeIn } from "@/components/motion/FadeIn";
import { BlogSection } from "@/components/sections/BlogSection";
import type { CpPostsData } from "@/graphql/cms/queries/post";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return {
    title: `${t("blog")} | Artify`,
    description: "Artify — мэдээ, нийтлэл.",
  };
}

export default async function BlogPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  const client = await getServerApolloClient();
  const { data } = await client.query<CpPostsData>({
    query: CP_POSTS,
    variables: { language: locale, status: "published", limit: 9 },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  return (
    <>
      <section className="px-3 pt-28 lg:px-6 lg:pt-32">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-accent px-6 py-16 text-center text-white lg:rounded-[64px] lg:py-24">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
              04 — Blog
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight lg:text-5xl">
              Мэдээ
            </h1>
          </FadeIn>
        </div>
      </section>

      <BlogSection posts={data?.cpPosts ?? []} />
    </>
  );
}
