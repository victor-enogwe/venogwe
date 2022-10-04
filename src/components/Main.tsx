/* eslint-disable global-require, import/no-dynamic-require */
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { NavMenu } from '@/components/Nav';
import { TranslationsContext } from '@/contexts';
import { GlobalStateProvider } from '@/contexts/GlobalState';
import { menuItems } from '@/menu.config';
import { PageProps, SSRProps, VEProps } from '@/typings/typings';
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css';
import { NextComponentType, NextPageContext } from 'next';
import { Container } from 'react-bootstrap';
import { GlobalStyle } from './GlobalStyle';
import { Intl } from './Intl';
import { SEO } from './SEO';

export function Main({
  Component,
  ssrProps,
  pageProps,
}: {
  ssrProps: SSRProps;
  pageProps: PageProps;
  Component: NextComponentType<NextPageContext, VEProps, SSRProps>;
}) {
  const { locales, siteName } = ssrProps;

  return (
    <GlobalStateProvider pageProps={pageProps}>
      <GlobalStyle />
      <SEO>
        <TranslationsContext.Provider value={ssrProps.translations}>
          <Intl>
            <Container className="d-flex flex-column p-3 position-relative">
              <SkipNavLink />

              <Header siteName={siteName} />

              <LanguageSwitcher locales={locales} />

              <NavMenu siteName={siteName} items={menuItems} />

              <SkipNavContent />

              <Component {...ssrProps} />

              <Footer />
            </Container>
          </Intl>
        </TranslationsContext.Provider>
      </SEO>
    </GlobalStateProvider>
  );
}
