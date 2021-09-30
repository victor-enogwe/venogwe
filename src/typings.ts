import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { DefaultSeoProps, NextSeoProps } from 'next-seo';
import { ReactNode } from 'react';
import { PageSettings, Prefill, Utm } from 'react-calendly/typings/calendly';

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

export interface NavMenuProps extends NavToggleProps {
  siteName: string;
  theme: 'light' | 'dark';
  items: NavItem[];
}

export interface HeaderProps extends NavToggleProps {
  siteName: string;
  theme: 'light' | 'dark';
  translator: typeof useTranslations;
  toggleNav: boolean;
  toggleTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
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
