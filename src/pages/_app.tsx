/* eslint-disable global-require */
import React from 'react';
import { AppProps } from 'next/app';
import { NextIntlProvider, useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import { seoConfig } from '@/seo.config';
import '@/styles/global.scss';
import { i18nMessageFallback, onI18NError } from '@/utils/functions';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css';
import { NavItem } from '@/typings';
import { Nav } from '@/components/Nav';

export default function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line import/no-dynamic-require
  const messages = require(`@/i18n/${pageProps.locale ?? `en-US`}.json`);
  const menuItems: NavItem[] = [];
  const Wrapper = () => (
    <>
      <div>
        <SkipNavLink />
        <div className="flex row header">
          <Header title={pageProps.title} translator={useTranslations} />
          <Nav ListStyle="ul" items={menuItems} />
        </div>
        <SkipNavContent />
      </div>
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
