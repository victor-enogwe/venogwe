/* eslint-disable global-require */
import { AppProps } from 'next/app';
import { useState } from 'react';
import { makeTheme } from 'bootstrap-styled';
import { NextIntlProvider, useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import BootstrapProvider from '@bootstrap-styled/provider';
import Container from 'react-bootstrap/Container';
import { seoConfig } from '@/seo.config';
import { i18nMessageFallback, onI18NError } from '@/utils/functions';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '@reach/skip-nav/styles.css';
import { HeaderProps, NavItem } from '@/typings';
import { NavMenu } from '@/components/Nav';
import '@/styles/global.scss';

export default function VictorEnogwe({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line import/no-dynamic-require
  const messages = require(`@/i18n/${pageProps.locale ?? `en-US`}.json`);
  const menuItems: NavItem[] = [
    { title: `Home` },
    { title: `About` },
    { title: `Blog` },
    { title: `Tools` },
  ];
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [theme, toggleTheme] = useState<HeaderProps['theme']>(`dark`);
  const defaultTheme = {
    $dark: `#030303`,
    $light: `#f8f9fa`,
    $primary: `#48CAE4`,
    $secondary: `#999`,
    $success: `#33d06c`,
    $info: `#0d6efd`,
    $warning: `#F9DC5C`,
    $danger: `#ED254E`,
    '$enable-negative-margins': true,
    '$font-family-base': `'IBM Plex Mono', monospace, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    '$grid- breakpoints': {
      xs: 0,
      sm: `576px`,
      md: `768px`,
      lg: `992px`,
      xl: `1200px`,
      xxl: `1400px`,
    },
  };
  const darkTheme = makeTheme({
    ...defaultTheme,
    '$body-bg': `#030303`,
    '$body-color': `#999`,
  });
  const lightTheme = makeTheme({
    ...defaultTheme,
    '$body-bg': defaultTheme.$light,
    '$body-color': `#999`,
  });
  const styles = theme === `dark` ? darkTheme : lightTheme;

  return (
    <BootstrapProvider theme={styles} injectGlobal reset>
      <NextSeo {...seoConfig.default} />
      <NextIntlProvider
        messages={messages}
        locale={pageProps.locale}
        onError={onI18NError}
        getMessageFallback={i18nMessageFallback}
      >
        <Container>
          <SkipNavLink />
          <Header
            theme={theme}
            title={pageProps.title}
            toggleNav={toggleNav}
            translator={useTranslations}
            setToggleNav={setToggleNav}
            toggleTheme={toggleTheme}
          />
          <NavMenu
            theme={theme}
            title={pageProps.title}
            items={menuItems}
            toggleNav={toggleNav}
            setToggleNav={setToggleNav}
          />
          <SkipNavContent />
          <Component
            {...pageProps}
            theme={theme}
            translator={useTranslations}
          />
          <Footer />
        </Container>
      </NextIntlProvider>
    </BootstrapProvider>
  );
}
