import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_ERXES_ENDPOINT: "https://artifynew.next.erxes.io/gateway/graphql",
    NEXT_PUBLIC_ERXES_APP_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6InpULXNjYlhEbGhfbmV0d1ZRdjMwWCIsImlhdCI6MTc4Mjk2NDg2OH0.NHW9faZ_S3ZNZobMA9NSLN9yKUfs9m7cvC8cxI7F74c",
    NEXT_PUBLIC_ERXES_CMS_ID: "6a45e648d9f0b662ce0b94cd",
    ERXES_APP_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6InpULXNjYlhEbGhfbmV0d1ZRdjMwWCIsImlhdCI6MTc4Mjk2NDg2OH0.NHW9faZ_S3ZNZobMA9NSLN9yKUfs9m7cvC8cxI7F74c",
  },
};

export default withNextIntl(nextConfig);
