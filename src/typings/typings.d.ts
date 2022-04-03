import { GetStaticPropsContext } from 'next';
import { DefaultSeoProps, NextSeoProps } from 'next-seo';
import { CookieSerializeOptions } from 'next/dist/server/web/types';
import { ReactNode } from 'react';
import { PageSettings, Prefill, Utm } from 'react-calendly/typings/calendly';
import { ReactCookieProps } from 'react-cookie';

export type Theme = 'light' | 'dark';

export type Locales = 'en-US' | 'fr' | 'nl-NL';

export type NavState = 'opened' | 'closed';

export type VEProps<T = StaticProps> = StaticProps & T;

export type WithCookiesProps<T = Record<string, string>> = ReactCookieProps & T;

export type LocalStateKeys = keyof LocalState;

export type CombinedActions =
  | SwitchLocaleAction
  | ToggleThemeAction
  | ResetAction;

export interface LayoutProps {
  children?: ReactNode;
  title: string;
  description: string;
}

export interface SEOConfig {
  default: DefaultSeoProps & NextSeoProps;
  [key: string]: DefaultSeoProps & NextSeoProps;
}

export interface DefaultProps extends GetStaticPropsContext {
  [key: string]: unknown;
}

export interface NavItem {
  title: string;
  description?: string;
  url?: string;
  icon?: string;
  children?: NavItem[];
}

export interface NavMenuProps extends Pick<StaticProps, 'siteName'> {
  items: NavItem[];
}

export interface CalendlySettings {
  url: string;
  pageSettings?: PageSettings;
  prefill?: Prefill;
  utm?: Utm;
}

export interface LocalState {
  theme: Theme;
  locale: Locales;
  navState: NavState;
}

export interface StaticProps {
  locales: Locales[];
  siteName: string;
}

export interface CookieStatic {
  get: (key: string) => string | null;
  set: (
    name: string,
    value: string,
    attributes?: CookieSerializeOptions,
  ) => void;
  expire: (key: string, options?: CookieSerializeOptions) => void;
}
