/* eslint-disable global-require, import/no-dynamic-require */
import { BootstrapProvider } from '@/components/BootstrapProvider';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { NavMenu } from '@/components/Nav';
import { menuItems } from '@/menu.config';
import { seoConfig } from '@/seo.config';
import { LocalState, LocalStateKeys, VEProps } from '@/typings/typings';
import { DARK_THEME, LIGHT_THEME } from '@/utils/constants.client';
import { i18nMessageFallback, onI18NError } from '@/utils/functions';
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css';
import { NextComponentType, NextPageContext } from 'next';
import { NextIntlProvider } from 'next-intl';
import { NextSeo } from 'next-seo';
import { MetaTag } from 'next-seo/lib/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

export function Main({
  Component,
  pageProps,
}: {
  pageProps: VEProps;
  Component: NextComponentType<NextPageContext, VEProps, VEProps>;
}) {
  const { locales, siteName } = pageProps;
  const { route } = useRouter();
  const [translations, setTranslations] = useState({});
  const [{ theme, locale }] = useCookies<LocalStateKeys, LocalState>([
    `theme`,
    `locale`,
  ]);
  const styles = theme === `dark` ? DARK_THEME : LIGHT_THEME;
  const additionalMetaTags: MetaTag[] = [
    { name: `theme-color`, content: styles[`$body-bg`] },
  ];
  const seo = { ...seoConfig.default, additionalMetaTags, ...seoConfig[route] };

  useEffect(() => {
    import(`@/i18n/${locale}.json`).then((module) =>
      setTranslations(module.default),
    );
  }, [locale]);

  return (
    <BootstrapProvider theme={styles} injectGlobal reset>
      <NextSeo {...seo} />
      <NextIntlProvider
        messages={translations}
        locale={locale}
        onError={onI18NError}
        getMessageFallback={i18nMessageFallback}
      >
        <Container className="d-flex flex-column p-3 position-relative">
          <SkipNavLink />
          <Header siteName={siteName} />
          <LanguageSwitcher locales={locales} />
          <NavMenu siteName={siteName} items={menuItems} />
          <SkipNavContent />
          <Component {...{ ...pageProps, theme, locale, seo, route }} />
          <Footer />
        </Container>
      </NextIntlProvider>
    </BootstrapProvider>
  );
}
