/* eslint-disable global-require */
import { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { makeTheme } from 'bootstrap-styled';
import { NextIntlProvider, useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import BootstrapProvider from '@bootstrap-styled/provider';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { MetaTag } from 'next-seo/lib/types';
import { seoConfig } from '@/seo.config';
import { i18nMessageFallback, onI18NError } from '@/utils/functions';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '@reach/skip-nav/styles.css';
import { HeaderProps } from '@/typings';
import { NavMenu } from '@/components/Nav';
import '@/styles/global.scss';
import { menuItems } from '@/menu.config';

export default function VictorEnogwe({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line import/no-dynamic-require
  const messages = require(`@/i18n/${pageProps.locale ?? `en-US`}.json`);
  const { route, events } = useRouter();
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
  const additionalMetaTags: MetaTag[] = [
    { name: `theme-color`, content: styles[`$body-bg`] },
  ];
  const seo = { ...seoConfig.default, additionalMetaTags, ...seoConfig[route] };

  useEffect(
    () => events.on(`routeChangeComplete`, () => setToggleNav(false)),
    [toggleNav, events],
  );

  return (
    <BootstrapProvider theme={styles} injectGlobal reset>
      <NextSeo {...seo} />
      <NextIntlProvider
        messages={messages}
        locale={pageProps.locale}
        onError={onI18NError}
        getMessageFallback={i18nMessageFallback}
      >
        <Container className="d-flex flex-column p-3">
          <SkipNavLink />
          <Header
            theme={theme}
            siteName={pageProps.siteName}
            toggleNav={toggleNav}
            translator={useTranslations}
            setToggleNav={setToggleNav}
            toggleTheme={toggleTheme}
          />
          <NavMenu
            theme={theme}
            siteName={pageProps.siteName}
            items={menuItems}
            toggleNav={toggleNav}
            setToggleNav={setToggleNav}
          />
          <SkipNavContent />
          <Component
            {...{ ...pageProps, seo, route }}
            theme={theme}
            translator={useTranslations}
          />
          <Footer />
        </Container>
      </NextIntlProvider>
    </BootstrapProvider>
  );
}
