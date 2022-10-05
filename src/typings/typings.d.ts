import { PostOrPage, PostsOrPages } from '@tryghost/content-api';
import { GetStaticPropsContext } from 'next';
import { DefaultSeoProps, NextSeoProps } from 'next-seo';
import { ReactNode } from 'react';
import { PageSettings, Prefill, Utm } from 'react-calendly/typings/calendly';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Merge } from 'type-fest';

export type ColorScheme = 'light' | 'dark';

export type Locales = 'en-US' | 'fr' | 'nl-NL';

export type NavState = 'opened' | 'closed';

export interface SSRProps {
  locales: Locales[];
  siteName: string;
  headline: string;
  translations: Record<string, Record<string, string>>;
  error?: string;
  posts?: PostsOrPages;
  post?: PostOrPage;
  pages?: PostsOrPages;
  page?: PostOrPage;
}

export interface PageProps {
  colorScheme: ColorScheme;
  altColorScheme: ColorScheme;
  locale: Locales;
  navState: NavState;
}

export type VEProps<T = unknown> = Merge<SSRProps, T>;

interface Action<T = string, P = unknown> {
  type: T;
  payload: P;
}

export type SwitchLocaleAction = Action<'SwitchLocale', Locales>;
export type ToggleColorSchemeAction = Action<'ToggleColorScheme', ColorScheme>;
export type ToggleNavStateAction = Action<'ToggleNavState', NavState>;

export type CombinedActions =
  | SwitchLocaleAction
  | ToggleColorSchemeAction
  | ToggleNavStateAction;

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

export interface NavMenuProps {
  items: NavItem[];
}

export interface CalendlySettings {
  url: string;
  pageSettings?: PageSettings;
  prefill?: Prefill;
  utm?: Utm;
}

export type GlobalStateDispatchFunction = (
  name: Exclude<keyof PageProps, 'altColorScheme'>,
  value: PageProps[typeof name],
) => void;
