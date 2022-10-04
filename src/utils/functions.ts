/* eslint-disable react-hooks/rules-of-hooks */
import { Locales, PageProps, VEProps } from '@/typings/typings';
import Cookies from 'js-cookie';
import get from 'lodash.get';
import merge from 'lodash.merge';
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticPathsResult,
  GetStaticPropsContext,
  NextPageContext,
} from 'next';
import { IntlError, IntlErrorCode } from 'next-intl';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { ParsedUrlQuery } from 'querystring';
import { defaultState } from './constants';

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

export async function getStaticProps(context: GetStaticPropsContext): Promise<{
  props: VEProps<{ cookies: PageProps }>;
}> {
  const siteName = get(process.env, `NEXT_PUBLIC_SITE_NAME`, ``);
  const cookies = defaultState;
  const locales = get(context, `locales`, [
    `en-US`,
    `fr`,
    `nl-NL`,
  ]) as Locales[];
  const locale = cookies.locale ?? context?.locale;
  const { default: translations } = await import(`@/i18n/${locale}.json`);

  const props = {
    locales,
    siteName,
    cookies,
    translations,
  };

  return Promise.resolve({ props });
}

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<
  GetServerSidePropsResult<VEProps<{ cookies: NextApiRequestCookies }>>
> {
  const { req, res } = context;
  const { props } = await getStaticProps(context);

  res.setHeader(
    `Cache-Control`,
    `public, s-maxage=10, stale-while-revalidate=59`,
  );

  return {
    props: { ...props, cookies: merge({}, defaultState, { ...req.cookies }) },
  };
}

export async function getInitialProps(
  context: NextPageContext,
): Promise<
  GetServerSidePropsResult<VEProps<{ cookies: NextApiRequestCookies }>>
> {
  return getServerSideProps(context as unknown as GetServerSidePropsContext);
}

export function setCookie(key: keyof PageProps, value: PageProps[typeof key]) {
  const ssr = typeof window === undefined;

  if (ssr) return;

  Cookies.set(key, value, { sameSite: `strict` });
}
