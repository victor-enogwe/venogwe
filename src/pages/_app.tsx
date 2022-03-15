/* eslint-disable global-require */
import { BootstrapProvider } from '@/components/BootstrapProvider';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { NavMenu } from '@/components/Nav';
import { menuItems } from '@/menu.config';
import { seoConfig } from '@/seo.config';
import { createFrontendStore } from '@/store/store';
import '@/styles/global.scss';
import { Locales, Theme, VEProps } from '@/typings/typings';
import { i18nMessageFallback, onI18NError } from '@/utils/functions';
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css';
import { makeTheme } from 'bootstrap-styled';
import pick from 'lodash.pick';
import { NextComponentType, NextPageContext } from 'next';
import { NextIntlProvider, useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import { MetaTag } from 'next-seo/lib/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { Persistor } from 'redux-persist/es/types';
import { PersistGate } from 'redux-persist/integration/react';

export default function VictorEnogwe({
  Component,
  pageProps,
}: {
  pageProps: VEProps;
  Component: NextComponentType<NextPageContext, VEProps, any>;
}) {
  const initialState = pick(pageProps, [`locale`, `theme`]);
  const { route, events } = useRouter();
  const [locale, setLocale] = useState<Locales>(pageProps.locale);
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [theme, toggleTheme] = useState<Theme>(pageProps.theme);
  const { store, persistor } = createFrontendStore(initialState);
  // eslint-disable-next-line import/no-dynamic-require
  const messages = require(`@/i18n/${locale}.json`);
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
    _name: `bootstrap5-dark`,
    '$body-bg': `#030303`,
    '$body-color': `#999`,
  });
  const lightTheme = makeTheme({
    ...defaultTheme,
    _name: `bootstrap5-light`,
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

  useEffect(() => {
    store.dispatch({ type: `SWITCH_LOCALE`, data: locale });
  }, [locale, store]);

  useEffect(() => {
    store.dispatch({ type: `TOGGLE_THEME`, data: theme });
  }, [theme, store]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor as Persistor}>
        <BootstrapProvider theme={styles} injectGlobal reset>
          <NextSeo {...seo} />
          <NextIntlProvider
            messages={messages}
            locale={pageProps.locale}
            onError={onI18NError}
            getMessageFallback={i18nMessageFallback}
          >
            <Container className="d-flex flex-column p-3 position-relative">
              <SkipNavLink />
              <Header
                theme={theme}
                siteName={pageProps.siteName}
                toggleNav={toggleNav}
                translator={useTranslations}
                setToggleNav={setToggleNav}
                toggleTheme={toggleTheme}
              />
              <LanguageSwitcher
                locale={locale}
                locales={pageProps.locales}
                theme={theme}
                setLocale={setLocale}
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
      </PersistGate>
    </Provider>
  );
}
