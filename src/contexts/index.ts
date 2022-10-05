import { CombinedActions, PageProps, SSRProps } from '@/typings/typings';
import { defaultState } from '@/utils/constants';
import { PostOrPage, PostsOrPages } from '@tryghost/content-api';
import { NextSeoProps } from 'next-seo';
import { createContext, Dispatch } from 'react';

type Articles = PostsOrPages | undefined;
type Article = PostOrPage | undefined;

export const SSRPropsContext = createContext<SSRProps>(Object.create({}));
export const SEOContext = createContext<NextSeoProps>({});
export const TranslationsContext = createContext<SSRProps['translations']>({});
export const PagesContext = createContext<Articles>(Object.create({}));
export const PostContext = createContext<Article>(Object.create({}));
export const PageContext = createContext<Article>(Object.create({}));
export const GlobalStateContext = createContext<PageProps>(defaultState);
export const ArticlesContext = createContext<Articles>(undefined);
export const GlobalStateDispatch = createContext<Dispatch<CombinedActions>>(
  () => undefined,
);
