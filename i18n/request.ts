import {getRequestConfig, requestLocale} from 'next-intl/server';
import type {AbstractIntlMessages} from 'next-intl';

// 和 next.config.mjs 保持一致
export const locales = ['ms', 'en', 'zh-CN'] as const;
export const defaultLocale = 'ms';

export default getRequestConfig(async () => {
  const locale = await requestLocale();
  const resolved = locales.includes(locale as any)
    ? (locale as (typeof locales)[number])
    : defaultLocale;
  return {
    locale: resolved,
    messages: (await import(`../messages/${resolved}.json`)).default as AbstractIntlMessages
  };
});
