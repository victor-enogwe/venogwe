import { CombinedActions, PageProps, SSRProps } from '@/typings/typings';
import { defaultState } from '@/utils/constants';
import { NextSeoProps } from 'next-seo';
import { createContext, Dispatch } from 'react';

export const SEOContext = createContext<NextSeoProps>({});
export const TranslationsContext = createContext<SSRProps['translations']>({});
export const GlobalStateContext = createContext<PageProps>(defaultState);
export const GlobalStateDispatch = createContext<Dispatch<CombinedActions>>(
  () => undefined,
);
