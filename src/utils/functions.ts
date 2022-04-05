/* eslint-disable react-hooks/rules-of-hooks */
import { Locales, LocalState, VEProps } from '@/typings/typings';
import get from 'lodash.get';
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
  props: VEProps<{ cookies: LocalState }>;
}> {
  const siteName = get(process.env, `NEXT_PUBLIC_SITE_NAME`, ``);
  const locales = get(context, `locales`, []) as Locales[];
  const props = {
    locales,
    siteName,
    cookies: defaultState,
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
    props: { ...props, cookies: { ...defaultState, ...req.cookies } },
  };
}

export async function getInitialProps(
  context: NextPageContext,
): Promise<
  GetServerSidePropsResult<VEProps<{ cookies: NextApiRequestCookies }>>
> {
  return getServerSideProps(context as unknown as GetServerSidePropsContext);
}
