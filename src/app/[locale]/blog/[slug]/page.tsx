import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getStaticApolloClient } from "@/lib/apollo/server-client";
import { CP_POSTS } from "@/graphql/cms/queries/post";
import { routing } from "@/i18n/routing";
import { FadeIn } from "@/components/motion/FadeIn";
import Image from "@/components/common/Image";
import type { CpPostsData, Post } from "@/graphql/cms/queries/post";

export async function generateStaticParams() {
  const results = await Promise.all(
    routing.locales.map(async (locale) => {
      const client = getStaticApolloClient();
      const { data } = await client.query<CpPostsData>({
        query: CP_POSTS,
        variables: { language: locale, status: "published", limit: 100 },
        context: { fetchOptions: { next: { revalidate: 60 } } },
      });
      return (data?.cpPosts ?? [])
        .filter((p: Post) => p.slug)
        .map((p: Post) => ({ locale, slug: p.slug as string }));
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
  const client = getStaticApolloClient();
  const { data } = await client.query<CpPostsData>({
    query: CP_POSTS,
    variables: { language: locale, status: "published", searchValue: slug, limit: 100 },
    context: { fetchOptions: { next: { revalidate: 60 } } },
    errorPolicy: "ignore",
  });

  const post = data?.cpPosts?.find((p: Post) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Artify`,
    description: post.excerpt ?? undefined,
  };
}

export default async function PostPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = await params;
  const client = getStaticApolloClient();
  const { data } = await client.query<CpPostsData>({
    query: CP_POSTS,
    variables: { language: locale, status: "published", searchValue: slug, limit: 100 },
    context: { fetchOptions: { next: { revalidate: 60 } } },
    errorPolicy: "ignore",
  });

  const post = data?.cpPosts?.find((p: Post) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="border-b border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-20 lg:py-32">
        <FadeIn>
          <p className="text-sm text-muted-foreground">
            {post.publishedDate
              ? new Date(post.publishedDate).toLocaleDateString()
              : ""}
          </p>
          <h1 className="mt-4 text-4xl font-light tracking-tight text-foreground lg:text-5xl">
            {post.title}
          </h1>
        </FadeIn>

        {post.thumbnail?.url && (
          <FadeIn delay={0.1}>
            <div className="relative mt-12 aspect-[21/9] w-full overflow-hidden bg-muted">
              <Image
                src={post.thumbnail.url}
                alt={post.title ?? ""}
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        )}

        {post.excerpt && (
          <FadeIn delay={0.2}>
            <p className="mt-12 max-w-3xl text-lg text-muted-foreground">{post.excerpt}</p>
          </FadeIn>
        )}

        {post.content && (
          <FadeIn delay={0.3}>
            <div
              className="prose prose-invert mt-12 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </FadeIn>
        )}
      </div>
    </article>
  );
}
