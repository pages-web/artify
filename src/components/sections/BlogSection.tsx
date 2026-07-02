"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionLabel } from "./SectionLabel";
import Image from "@/components/common/Image";
import type { Post } from "@/graphql/cms/queries/post";

interface BlogSectionProps {
  posts: Post[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  const t = useTranslations("blog");

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-20 lg:py-32">
        <FadeIn>
          <SectionLabel text={t("label")} />
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-8 text-3xl font-light tracking-tight text-foreground lg:text-5xl">
            {t("heading")}
          </h2>
        </FadeIn>

        {posts.length === 0 ? (
          <FadeIn delay={0.2}>
            <p className="mt-16 text-muted-foreground">{t("noPosts")}</p>
          </FadeIn>
        ) : (
          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {posts.slice(0, 3).map((post, index) => (
              <FadeIn key={post._id} delay={0.2 + index * 0.1} direction="up">
                <article className="group bg-card">
                  <Link href={`/blog/${post.slug ?? post._id}`}>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                      <Image
                        src={post.thumbnail?.url ?? "/images/placeholder.svg"}
                        alt={post.title ?? ""}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-6 lg:p-8">
                    <p className="text-xs text-muted-foreground">
                      {post.publishedDate
                        ? new Date(post.publishedDate).toLocaleDateString()
                        : ""}
                    </p>
                    <Link href={`/blog/${post.slug ?? post._id}`}>
                      <h3 className="mt-3 text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                        {post.title ?? ""}
                      </h3>
                    </Link>
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt ?? ""}
                    </p>
                    <Link
                      href={`/blog/${post.slug ?? post._id}`}
                      className="mt-6 inline-block text-sm font-semibold text-primary hover:text-primary/80"
                    >
                      {t("readMore")}
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
