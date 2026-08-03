"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowRight, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import type { Post } from "@/graphql/cms/queries/post";

interface AllPostsSectionProps {
  posts: Post[];
}

export function AllPostsSection({ posts }: AllPostsSectionProps) {
  const t = useTranslations("blog");
  const [showAll, setShowAll] = useState(false);

  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.publishedDate ?? 0).getTime();
    const dateB = new Date(b.publishedDate ?? 0).getTime();
    return dateB - dateA;
  });

  const visiblePosts = showAll ? sortedPosts : sortedPosts.slice(0, 4);

  if (posts.length === 0) {
    return (
      <section className="bg-secondary px-3 py-10 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="text-center text-muted-foreground">{t("noPosts")}</p>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-secondary px-3 py-10 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="mb-8 text-center lg:mb-12">
            <h2 className="font-display text-2xl font-semibold text-foreground lg:text-4xl">
              {t("allPosts")}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {t("allPostsSubtitle")}
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {visiblePosts.map((post, index) => (
            <FadeIn key={post._id} delay={0.05 * index} direction="up">
              <Link href={`/blog/${post.slug ?? post._id}`} className="group block">
                <article className="overflow-hidden rounded-3xl bg-card shadow-sm transition-all hover:shadow-md lg:rounded-[32px]">
                  <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center lg:p-6">
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-2xl bg-muted sm:w-48 lg:w-64">
                      {post.thumbnail?.url ? (
                        <img
                          src={post.thumbnail.url}
                          alt={post.title ?? ""}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-border">
                          <span className="font-display text-2xl font-bold text-muted-foreground/30">
                            Artify
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col justify-center">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar size={14} />
                        {post.publishedDate
                          ? new Date(post.publishedDate).toLocaleDateString("mn-MN", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : ""}
                      </div>

                      <h3 className="mt-2 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary lg:text-xl">
                        {post.title ?? ""}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground lg:text-base">
                        {post.excerpt ?? ""}
                      </p>
                    </div>

                    <div className="hidden shrink-0 sm:block">
                      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        {t("readMore")}
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>

        {sortedPosts.length > 4 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              {showAll ? (
                <>
                  {t("showLess")}
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  {t("viewAll")}
                  <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
