/* eslint-disable global-require */
import { AppProps } from 'next/app';
import { NextIntlProvider, useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import { seoConfig } from '@/seo.config';
import '@/styles/global.scss';
import { i18nMessageFallback, onI18NError } from '@/utils/functions';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line import/no-dynamic-require
  const messages = require(`@/i18n/${pageProps.locale ?? `en-US`}.json`);
  const Wrapper = () => (
    <>
      <Header title={pageProps.title} translator={useTranslations} />
      <Component {...pageProps} translator={useTranslations} />
      <Footer translator={useTranslations} />
    </>
  );

  return (
    <>
      <NextSeo {...seoConfig.default} />
      <NextIntlProvider
        messages={messages}
        locale={pageProps.locale}
        onError={onI18NError}
        getMessageFallback={i18nMessageFallback}
      >
        <Wrapper />
      </NextIntlProvider>
    </>
  );
}
