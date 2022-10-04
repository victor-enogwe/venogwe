import { useGlobalState } from '@/contexts/GlobalState';
import { useTranslations } from '@/contexts/Translations';
import { i18nMessageFallback, onI18NError } from '@/utils/functions';
import { NextIntlProvider } from 'next-intl';
import { PropsWithChildren } from 'react';

export function Intl<P>({ children }: PropsWithChildren<P>) {
  const { locale } = useGlobalState([`locale`]);
  const translations = useTranslations();

  return (
    <NextIntlProvider
      messages={translations}
      locale={locale}
      onError={onI18NError}
      getMessageFallback={i18nMessageFallback}
      now={new Date()}
    >
      {children}
    </NextIntlProvider>
  );
}
