/* eslint-disable react-hooks/rules-of-hooks */
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { IntlError, IntlErrorCode } from 'next-intl';

export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<unknown>> {
  const { locale, defaultLocale, locales } = context;

  return {
    props: {
      locale: locale ?? defaultLocale ?? process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
      locales,
      title: process.env.NEXT_PUBLIC_SITE_NAME,
    },
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
