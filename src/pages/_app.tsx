/* eslint-disable global-require */
import { Main } from '@/components/Main';
import '@/styles/global.scss';
import { LocalState, VEProps } from '@/typings/typings';
import '@reach/skip-nav/styles.css';
import { NextComponentType, NextPageContext } from 'next';
import { Cookies, CookiesProvider } from 'react-cookie';

export default function VictorEnogwe({
  Component,
  pageProps,
}: {
  pageProps: VEProps<{ cookies: LocalState }>;
  Component: NextComponentType<NextPageContext, VEProps, VEProps>;
}) {
  return (
    <CookiesProvider cookies={new Cookies(pageProps.cookies)}>
      <Main Component={Component} pageProps={pageProps} />
    </CookiesProvider>
  );
}
