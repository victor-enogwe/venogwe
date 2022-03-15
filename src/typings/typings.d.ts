import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { DefaultSeoProps, NextSeoProps } from 'next-seo';
import { PropsWithoutRef, ReactNode } from 'react';
import { PageSettings, Prefill, Utm } from 'react-calendly/typings/calendly';
import { AnyAction } from 'redux';

export type Theme = 'light' | 'dark';

export type Locales = 'en-US' | 'fr' | 'nl-NL';

export type VEProps<T = unknown> = StaticProps & T;

export type VEState = Pick<VEProps, 'locale' | 'theme'>;

export type CombinedActions =
  | SwitchLocaleAction
  | ToggleThemeAction
  | ResetAction;

export interface SwitchLocaleAction extends AnyAction {
  type: 'SWITCH_LOCALE';
  data: Locales;
}

export interface ToggleThemeAction extends AnyAction {
  type: 'TOGGLE_THEME';
  data: Theme;
}

export interface ResetAction extends AnyAction {
  type: 'RESET_STATE';
}

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

export interface NavToggleProps {
  toggleNav: boolean;
  setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavMenuProps
  extends NavToggleProps,
    Pick<StaticProps, 'siteName' | 'theme'> {
  items: NavItem[];
}

export interface HeaderProps extends NavToggleProps {
  siteName: string;
  theme: Theme;
  translator: typeof useTranslations;
  toggleNav: boolean;
  toggleTheme: React.Dispatch<React.SetStateAction<Theme>>;
  setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FooterProps {
  translator: typeof useTranslations;
}

export interface CalendlySettings {
  url: string;
  pageSettings?: PageSettings;
  prefill?: Prefill;
  utm?: Utm;
}

export interface StaticProps extends PropsWithoutRef {
  locale: Locales;
  locales: Locales[];
  siteName: string;
  theme: Theme;
}
