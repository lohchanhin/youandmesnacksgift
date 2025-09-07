'use client';

import {NextIntlClientProvider} from 'next-intl';
import type {ReactNode} from 'react';
import type {AbstractIntlMessages} from 'next-intl';

interface I18nProviderProps {
  locale: string;
  messages?: AbstractIntlMessages; // 更贴近 next-intl 的类型
  children: ReactNode;
}

export function I18nProvider({ locale, messages = {}, children }: I18nProviderProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
