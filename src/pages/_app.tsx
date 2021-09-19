/* eslint-disable global-require */
import React, { useState } from 'react';
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
import { NavMenu } from '@/components/Nav';

export default function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line import/no-dynamic-require
  const messages = require(`@/i18n/${pageProps.locale ?? `en-US`}.json`);
  const menuItems: NavItem[] = [
    { title: `Home` },
    { title: `About` },
    { title: `Blog` },
  ];
  const [toggleNav, setToggleNav] = useState(false);
  const Wrapper = () => (
    <>
      <SkipNavLink />
      <Header
        title={pageProps.title}
        toggleNav={toggleNav}
        translator={useTranslations}
        setToggleNav={setToggleNav}
      />
      <NavMenu
        title={pageProps.title}
        items={menuItems}
        toggleNav={toggleNav}
        setToggleNav={setToggleNav}
      />
      <SkipNavContent />
      <Component {...pageProps} translator={useTranslations} />
      <Footer />
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
