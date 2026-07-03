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
    NEXT_PUBLIC_ERXES_ENDPOINT: "https://taijkhurai.next.erxes.io/gateway/graphql",
    NEXT_PUBLIC_ERXES_APP_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6ImxwekkteW5FbmFvRDNmTkxiX2xibiIsImlhdCI6MTc3OTc3NTgwN30.b1jSKzgVfH0KVjLl7cEhPAUJXTQKUz5fYIYekPybOgY",
    NEXT_PUBLIC_ERXES_CMS_ID: "6a153b315932d7d91b27f9dc",
    ERXES_APP_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6ImxwekkteW5FbmFvRDNmTkxiX2xibiIsImlhdCI6MTc3OTc3NTgwN30.b1jSKzgVfH0KVjLl7cEhPAUJXTQKUz5fYIYekPybOgY",
  },
};

export default withNextIntl(nextConfig);
