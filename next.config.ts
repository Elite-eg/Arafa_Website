import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    qualities: [25, 50, 75, 90, 100],
  },
};

export default withNextIntl(nextConfig);
