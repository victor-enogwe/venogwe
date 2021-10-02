import { SEOConfig } from '@/typings';

export const seoConfig: SEOConfig = {
  default: {
    title: `Victor Enogwe`,
    defaultTitle: `Victor Enogwe`,
    description: `Senior Software Engineer - Typescript/Javascript/Php/Python`,
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
    openGraph: {
      type: `website`,
      locale: `en_IE`,
      url: process.env.NEXT_PUBLIC_SITE_URL,
      title: `Victor Enogwe`,
      description: `senior software engineer - Javascript/Typescript`,
      // images: [
      //   {
      //     url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image-01.jpg`,
      //     width: 800,
      //     height: 600,
      //     alt: `Og Image Alt`,
      //   },
      //   {
      //     url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image-02.jpg`,
      //     width: 900,
      //     height: 800,
      //     alt: `Og Image Alt Second`,
      //   },
      //   { url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image-03.jpg` },
      //   { url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image-04.jpg` },
      // ],
      site_name: `Victor Enogwe`,
    },
    twitter: {
      handle: `@iykyvic`,
      site: `@site`,
      cardType: `summary_large_image`,
    },
  },
  '/resume': {
    title: `My Resume - Victor Enogwe`,
    description: `work experience, projects, community service and hobbies`,
  },
  '/portfolio': {
    title: `My Portfolio - Victor Enogwe`,
    description: `tools and projects I've built`,
  },
  '/blog': {
    title: `Personal Blog - Victor Enogwe`,
    description: `journal of knowledge and experience gained over time`,
  },
  [`/404`]: {
    title: `Error 404 - Victor Enogwe`,
    description: `Page Not Found`,
  },
};
