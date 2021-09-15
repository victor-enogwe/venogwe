import { SEOConfig } from '@/typings';

export const seoConfig: SEOConfig = {
  default: {
    title: `Victor Enogwe`,
    defaultTitle: `Victor Enogwe`,
    description: ``,
    canonical: `https://www.canonical.ie/`,
    openGraph: {
      type: `website`,
      locale: `en_IE`,
      url: `https://www.victorenogwe.me/`,
      title: `Victor Enogwe`,
      description: ``,
      images: [
        {
          url: `https://www.example.ie/og-image-01.jpg`,
          width: 800,
          height: 600,
          alt: `Og Image Alt`,
        },
        {
          url: `https://www.example.ie/og-image-02.jpg`,
          width: 900,
          height: 800,
          alt: `Og Image Alt Second`,
        },
        { url: `https://www.example.ie/og-image-03.jpg` },
        { url: `https://www.example.ie/og-image-04.jpg` },
      ],
      site_name: `Victor Enogwe`,
    },
    twitter: {
      handle: `@iykyvic`,
      site: `@site`,
      cardType: `summary_large_image`,
    },
  },
};
