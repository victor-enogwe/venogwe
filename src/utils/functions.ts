/* eslint-disable react-hooks/rules-of-hooks */
import { Locales, VEProps } from '@/typings/typings';
import { defaultState } from '@/utils/constants';
import get from 'lodash.get';
import set from 'lodash.set';
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticPathsResult,
  GetStaticPropsContext,
} from 'next';
import { IntlError, IntlErrorCode } from 'next-intl';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { NextRequest, NextResponse } from 'next/server';
import { ParsedUrlQuery } from 'querystring';
import Cookies, { CookieChangeOptions } from 'universal-cookie';

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

export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<{ props: VEProps }> {
  const siteName = get(process.env, `NEXT_PUBLIC_SITE_NAME`, ``);
  const locales = get(context, `locales`, []) as Locales[];
  const props: VEProps = { locales, siteName };

  return Promise.resolve({ props });
}

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<
  GetServerSidePropsResult<
    VEProps<{ resolvedUrl: string; cookies: NextApiRequestCookies }>
  >
> {
  const { req, res, resolvedUrl } = context;
  const { props } = await getStaticProps(context);

  res.setHeader(
    `Cache-Control`,
    `public, s-maxage=10, stale-while-revalidate=59`,
  );

  return { props: { resolvedUrl, cookies: req.cookies, ...props } };
}

export function onCookieChange(_request: NextRequest, response: NextResponse) {
  return (event: CookieChangeOptions) => {
    if (!response.cookies || get(response, `headersSent`)) return;

    const { value, name, options } = event;

    if (value === undefined) {
      response.clearCookie(name, options);
    } else {
      const maxAge = options?.maxAge ? options?.maxAge * 1000 : undefined;
      response.cookie(name, value, { ...options, maxAge });
    }
  };
}

export async function cookieStorageMiddleware(
  request: NextRequest,
  response: NextResponse,
): Promise<NextResponse> {
  const localState = Object.assign(defaultState, request.cookies);

  Object.entries(localState).forEach(([name, value]) =>
    onCookieChange(request, response)({ name, value }),
  );

  set(request, `universalCookies`, new Cookies(localState));

  get(request, `universalCookies`).addChangeListener(
    onCookieChange(request, response),
  );

  return response;
}
