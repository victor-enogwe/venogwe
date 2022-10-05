/* eslint-disable global-require */
import { Main } from '@/components/Main';
import '@/styles/global.scss';
import { PageProps, VEProps } from '@/typings/typings';
import '@reach/skip-nav/styles.css';
import { NextComponentType, NextPageContext } from 'next';

export default function VictorEñogwe({
  Component,
  pageProps,
}: {
  pageProps: VEProps<{ cookies: PageProps }>;
  Component: NextComponentType<NextPageContext, VEProps, Record<string, never>>;
}) {
  const { cookies: cookieProps, ...ssrProps } = pageProps;

  return (
    <Main Component={Component} ssrProps={ssrProps} pageProps={cookieProps} />
  );
}
