import { getTranslations } from "next-intl/server";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_POSTS } from "@/graphql/cms/queries/post";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionLabel } from "@/components/sections/SectionLabel";
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
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-20 lg:py-32">
          <FadeIn>
            <SectionLabel text={"04 — Blog"} />
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-8 text-4xl font-light tracking-tight text-foreground lg:text-6xl">
              Мэдээ
            </h1>
          </FadeIn>
        </div>
      </section>

      <BlogSection posts={data?.cpPosts ?? []} />
    </>
  );
}
