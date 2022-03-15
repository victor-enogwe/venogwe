/* eslint-disable react-hooks/rules-of-hooks */
import { CombinedActions, Locales, VEProps, VEState } from '@/typings/typings';
import { CookieAttributes } from 'js-cookie';
import get from 'lodash.get';
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticPathsResult,
  GetStaticPropsContext,
} from 'next';
import { IntlError, IntlErrorCode } from 'next-intl';
import { CookieSerializeOptions } from 'next/dist/server/web/types';
import { NextRequest, NextResponse } from 'next/server';
import { ParsedUrlQuery } from 'querystring';
import { Store } from 'redux';
import { persistStore } from 'redux-persist';
import { Persistor } from 'redux-persist/es/types';

export async function getStaticPaths(): Promise<
  GetStaticPathsResult<ParsedUrlQuery>
> {
  return {
    paths: [],
    fallback: true,
  };
}

export function onI18NError(error: IntlError) {
  if (error.code === IntlErrorCode.MISSING_MESSAGE) return;
  throw error;
}

export function i18nMessageFallback({
  namespace,
  key,
  error,
}: {
  namespace?: string;
  key: string;
  error: IntlError;
}): string {
  const path = [namespace, key].filter((part) => part != null).join(`.`);

  switch (error.code) {
    case IntlErrorCode.MISSING_MESSAGE:
      return `${path} is not yet translated`;
    default:
      return `Dear developer, please fix this message: ${path}`;
  }
}

export async function configurePersistor(
  store: Store<VEState, CombinedActions>,
): Promise<Persistor> {
  return new Promise((resolve) => {
    const persistor = persistStore(store, {}, () => resolve(persistor));
  });
}

export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<{ props: VEProps }> {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME as string;
  const locales = get(context, `locales`) as Locales[];
  const envLocale = get(process.env, `NEXT_PUBLIC_DEFAULT_LOCALE`, ``);
  const defaultLocale = get(context, `defaultLocale`, envLocale);
  const locale = get(context, `locale`, defaultLocale) as Locales;
  const theme = `dark`;

  return Promise.resolve({ props: { locale, locales, siteName, theme } });
}

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<unknown>> {
  const { res, resolvedUrl } = context;
  const { props } = await getStaticProps(context);

  res.setHeader(
    `Cache-Control`,
    `public, s-maxage=10, stale-while-revalidate=59`,
  );

  return {
    props: {
      title: process.env.NEXT_PUBLIC_SITE_NAME,
      resolvedUrl,
      ...props,
    },
  };
}

export function Cookies(request: NextRequest, response: NextResponse) {
  return {
    get: (key: string | undefined | null) =>
      key ? get(request.cookies, key) : undefined,
    set: (
      name: string,
      value: string,
      attributes?: CookieAttributes,
    ): string => {
      response.cookie(
        name,
        value,
        attributes as unknown as CookieSerializeOptions,
      );
      return value;
    },
  };
}
