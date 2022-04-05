import { SEOConfig } from '@/typings/typings';

export const seoConfig: SEOConfig = {
  default: {
    title: `Victor Eñogwe`,
    defaultTitle: `Victor Eñogwe`,
    description: `Software Engineer - Typescript/Javascript/Php/Python`,
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
    openGraph: {
      type: `website`,
      locale: `en_IE`,
      url: process.env.NEXT_PUBLIC_SITE_URL,
      title: `Victor Eñogwe`,
      description: `Software Engineer - Javascript/Typescript`,
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
      site_name: `Victor Eñogwe`,
    },
    twitter: {
      handle: `@iykyvic`,
      site: `@site`,
      cardType: `summary_large_image`,
    },
  },
  '/resume': {
    title: `My Resume - Victor Eñogwe`,
    description: `work experience, projects, community service and hobbies`,
  },
  '/portfolio': {
    title: `My Portfolio - Victor Eñogwe`,
    description: `tools and projects I've built`,
  },
  '/blog': {
    title: `Personal Blog - Victor Eñogwe`,
    description: `journal of knowledge and experience gained over time`,
  },
  [`/404`]: {
    title: `Error 404 - Victor Eñogwe`,
    description: `Page Not Found`,
  },
};
