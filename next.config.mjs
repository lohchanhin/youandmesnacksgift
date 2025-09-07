import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },

  // 如果不用路由前缀，可以保留这段
  i18n: {
    locales: ['ms', 'en', 'zh-CN'],
    defaultLocale: 'ms'
  }
};

export default withNextIntl(nextConfig);
