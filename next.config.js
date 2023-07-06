/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    // The locales you want to support in your app
    locales: ["en", "cn", "jp"],
    defaultLocale: "cn",
    //auto detect
    localeDetection: true,
  },
};

module.exports = nextConfig;
