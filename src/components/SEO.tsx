import { SEOContext } from '@/contexts';
import { useTheme } from '@/contexts/Theme';
import { seoConfig } from '@/seo.config';
import { NextSeo } from 'next-seo';
import { MetaTag } from 'next-seo/lib/types';
import { useRouter } from 'next/router';
import { PropsWithChildren, useMemo } from 'react';

export function SEO<P>({ children }: PropsWithChildren<P>) {
  const { route } = useRouter();
  const theme = useTheme();

  const bgColor = theme[`$body-bg`];

  const additionalMetaTags: MetaTag[] = useMemo(
    () => [{ name: `theme-color`, content: bgColor }],
    [bgColor],
  );
  const seo = useMemo(
    () => ({ ...seoConfig.default, additionalMetaTags, ...seoConfig[route] }),
    [additionalMetaTags, route],
  );

  return (
    <SEOContext.Provider value={seo}>
      <NextSeo {...seo} />

      {children}
    </SEOContext.Provider>
  );
}
