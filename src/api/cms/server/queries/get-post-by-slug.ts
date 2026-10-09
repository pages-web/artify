import "server-only";

import { cache } from "react";
import { CP_POST } from "@/graphql/cms/queries/post";
import type {
  CpPostData,
  CpPostVariables,
} from "@/graphql/cms/queries/post";
import {
  cmsPublicQueryContext,
  getCmsClient,
} from "@/api/cms/server/client";
import type { CmsPostDto } from "@/api/cms/types/public";

/**
 * Fetch a CMS post by its slug for any section or content item.
 * Supports localized content (mn/en).
 */
export const getPostBySlug = cache(
  async ({
    slug,
    language,
  }: {
    slug: string;
    language: string;
  }): Promise<CmsPostDto | null> => {
    if (!slug || !language) return null;

    try {
      const { data } = await getCmsClient().query<CpPostData, CpPostVariables>({
        query: CP_POST,
        variables: { slug, language },
        context: cmsPublicQueryContext,
      });

      const post = data?.cpPost;
      if (!post) return null;

      const attachmentVideo = post.attachments?.find((attachment) => {
        const type = attachment.type?.toLowerCase() ?? "";
        const url = attachment.url.toLowerCase().split(/[?#]/, 1)[0];
        return (
          type.startsWith("video/") ||
          /\b(mp4|webm|quicktime|ogg|m4v)\b/.test(type) ||
          /\.(mp4|webm|mov|m4v|ogv)$/.test(url)
        );
      });

      return {
        id: post._id,
        title: post.title ?? "",
        slug: post.slug ?? slug,
        excerpt: post.excerpt ?? null,
        content: post.content ?? null,
        thumbnailUrl: post.thumbnail?.url ?? null,
        videoUrl: attachmentVideo?.url ?? post.videoUrl ?? null,
      };
    } catch (e) {
      console.error(`Failed to fetch CMS post by slug: ${slug}`, e);
      return null;
    }
  },
);

/**
 * Fetch multiple CMS posts by their slugs in parallel.
 */
export const getPostsBySlugs = cache(
  async (
    slugs: string[],
    language: string,
  ): Promise<Record<string, CmsPostDto | null>> => {
    const entries = await Promise.all(
      slugs.map(
        async (slug) =>
          [slug, await getPostBySlug({ slug, language })] as const,
      ),
    );
    return Object.fromEntries(entries);
  },
);
