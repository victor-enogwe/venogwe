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

export interface NavMenu {
  items: NavItem[];
  ListStyle: 'ul' | 'ol';
}

export interface HeaderProps {
  title: string;
  translator: typeof useTranslations;
}

export interface FooterProps {
  translator: typeof useTranslations;
}

export interface CalendlySettings {
  pageSettings?: PageSettings;
  prefill?: Prefill;
  utm?: Utm;
}
