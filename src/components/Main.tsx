/* eslint-disable global-require, import/no-dynamic-require */
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { NavMenu } from '@/components/Nav';
import {
  ArticlesContext,
  PageContext,
  PagesContext,
  PostContext,
  SSRPropsContext,
  TranslationsContext,
} from '@/contexts';
import { GlobalStateProvider } from '@/contexts/GlobalState';
import { menuItems } from '@/menu.config';
import { PageProps, SSRProps, VEProps } from '@/typings/typings';
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css';
import { NextComponentType, NextPageContext } from 'next';
import NextProgress from 'nextjs-progressbar';
import Container from 'react-bootstrap/Container';
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
  Component: NextComponentType<NextPageContext, VEProps, Record<string, never>>;
}) {
  const { posts, pages, post, page, ...props } = ssrProps;
  return (
    <SSRPropsContext.Provider value={props}>
      <GlobalStateProvider pageProps={pageProps}>
        <GlobalStyle />
        <ArticlesContext.Provider value={posts}>
          <PagesContext.Provider value={pages}>
            <PostContext.Provider value={post}>
              <PageContext.Provider value={page}>
                <SEO>
                  <TranslationsContext.Provider value={ssrProps.translations}>
                    <Intl>
                      <NextProgress color="#33d06c" />
                      <Container
                        id="root-container"
                        className="d-flex flex-column p-3 position-relative"
                      >
                        <SkipNavLink />

                        <Header />

                        <LanguageSwitcher />

                        <NavMenu items={menuItems} />

                        <SkipNavContent />

                        <Component />

                        <Footer />
                      </Container>
                    </Intl>
                  </TranslationsContext.Provider>
                </SEO>
              </PageContext.Provider>
            </PostContext.Provider>
          </PagesContext.Provider>
        </ArticlesContext.Provider>
      </GlobalStateProvider>
    </SSRPropsContext.Provider>
  );
}
