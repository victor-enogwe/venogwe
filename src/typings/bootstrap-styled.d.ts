/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-classes-per-file */
// Dependencies by bootstrap styled
// --------------------------------
declare module '@bootstrap-styled/css-mixins';
declare module '@bootstrap-styled/provider' {
  import { Component, ReactNode } from 'react';
  import {
    DefaultTheme as StyledTheme,
    StyledComponentBase,
  } from 'styled-components/macro';

  export const defaultProps: Pick<
    BootstrapProviderProps,
    'theme' | 'injectGlobal' | 'reset' | 'utils' | 'children'
  >;

  export type BootstrapProviderProps = {
    children: ReactNode;
    injectGlobal?: boolean;
    reset?: boolean;
    theme?: UserTheme;
    utils?: {
      align?: boolean;
      background?: boolean;
      a?: boolean;
      border?: boolean;
      clearfix?: boolean;
      display?: boolean;
      flex?: boolean;
      float?: boolean;
      position?: boolean;
      screenreaders?: boolean;
      sizing?: boolean;
      spacing?: boolean;
      text?: boolean;
      transition?: boolean;
      visibility?: boolean;
    };
  };

  type BootstrapProviderState = {
    theme: Theme;
    isWindowPhone8Fixed: boolean | null;
  };

  export type UtilityProviderProps = {
    utils?: BootstrapProviderProps['utils'];
  };

  export const UtilityProvider: StyledComponentBase<
    'div',
    StyledTheme,
    UtilityProviderProps
  >;

  class BootstrapProvider extends Component<
    BootstrapProviderProps,
    BootstrapProviderState
  > {
    private setTheme: (
      userTheme: { theme: UserTheme },
      callback?: function,
    ) => void;

    private makeTheme: (userTheme: { theme: UserTheme }) => Theme;

    private windowPhone8Fix: () => void;
  }

  export default BootstrapProvider;
}

declare module '@bootstrap-styled/utils' {
  export function getTetherAttachments(placement: string): {
    attachment: string;
    targetAttachment: string;
  };

  export const tetherAttachements = [
    `top`,
    `bottom`,
    `left`,
    `right`,
    `top left`,
    `top center`,
    `top right`,
    `right top`,
    `right middle`,
    `right bottom`,
    `bottom right`,
    `bottom center`,
    `bottom left`,
    `left top`,
    `left middle`,
    `left bottom`,
  ];

  export function getScrollbarWidth(): number;
  export function setScrollbarWidth(padding: number): void;
  export function isBodyOverflowing(): boolean;
  export function getOriginalBodyPadding(): number;
  export function conditionallyUpdateScrollbar(): void;
  export function toHashCode(str: srting): string;
  export function createChainedFunction(...funcs: function[]): function;
  export function pick(
    obj: { [key: string | number | symbol]: unknown },
    keys: string[],
  ): { [key: string | number | symbol]: unknown };

  export const parseTransition: (transitions: string[]) => {
    property: string;
    duration: string;
    timingFunction: string;
    delay: string;
  }[];

  export class UnitUtils {
    public UNIT: {
      EM: 'em';
      REM: 'rem';
      PX: 'px';
      PERCENT: '%';
    };

    public math: {
      addition: (a: string | number, b: string | number) => string;
      subtract: (a: string | number, b: string | number) => string;
      multiply: (a: string | number, b: string | number) => string;
      divide: (a: string | number, b: string | number) => string;
    };

    public detectUnit: (value: string) => string;

    public rmUnit: (value: string, unit?: string) => number;

    public toPercent: (
      value: number,
      total?: number,
      decimal?: number,
    ) => string;
  }

  export const unitUtils: UnitUtils;
}

declare module '@bootstrap-styled/css-utils' {
  import { unitUtils as unit } from '@bootstrap-styled/utils';

  export { unit };

  export const alignUtils: {
    getAlignUtilities: () => string;
    alignBaseline: () => string;
    alignTop: () => string;
    alignMiddle: () => string;
    alignBottom: () => string;
    alignTextBottom: () => string;
    alignTextTop: () => string;
  };

  export const backgroundUtils: {
    defaultProps: {
      '$enable-hover-media-query': boolean;
      '$brand-primary': string;
      '$brand-success': string;
      '$brand-info': string;
      '$brand-warning': string;
      '$brand-danger': string;
      '$brand-inverse': string;
      '$gray-lightest': string;
    };
    getBackgroundUtilities: (
      $enableHoverMediaQuery?: boolean,
      $brandPrimary?: string,
      $brandSuccess?: string,
      $brandInfo?: string,
      $brandWarning?: string,
      $brandDanger?: string,
      $brandInverse?: string,
      $grayLightest?: string,
    ) => string;
    bgFaded: (enableHoverMediaQuery: boolean, bgColor?: string) => string;
    bgPrimary: (enableHoverMediaQuery: boolean, bgColor?: string) => string;
    bgSuccess: (enableHoverMediaQuery: boolean, bgColor?: string) => string;
    bgInfo: (enableHoverMediaQuery: boolean, bgColor?: string) => string;
    bgWarning: (enableHoverMediaQuery: boolean, bgColor?: string) => string;
    bgDanger: (enableHoverMediaQuery: boolean, bgColor?: string) => string;
    bgInverse: (enableHoverMediaQuery: boolean, bgColor?: string) => string;
  };

  export const bordersUtils: {
    defaultProps: {
      '$border-radius': string;
      '$enable-rounded': boolean;
    };
    getBordersUtilities: (enableRounded?: boolean, radius?: string) => string;
    rounded: (enableRounded?: boolean, radius?: string) => string;
    roundedTop: (enableRounded?: boolean, radius?: string) => string;
    roundedRight: (enableRounded?: boolean, radius?: string) => string;
    roundedBottom: (enableRounded?: boolean, radius?: string) => string;
    roundedLeft: (enableRounded?: boolean, radius?: string) => string;
    roundedCircle: () => string;
  };

  export const clearfixUtils: {
    getClearfixUtilities: () => string;
    getClearfix: () => string;
  };

  export const cursorUtils: {
    getCursorUtilities: () => string;
  };

  export const displayUtils: {
    defaultProps: {
      '$grid-breakpoints': {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
    getDisplayUtilities: (gridBreakpoints?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    }) => string;
  };

  export const flexUtils: {
    defaultProps: {
      '$grid-breakpoints': {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
    getFlexUtilities: (gridBreakpoints?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    }) => string;
  };

  export const floatUtils: {
    defaultProps: {
      '$grid-breakpoints': {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
    getFloatUtilities: (gridBreakpoints?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    }) => string;
  };

  export const positionUtils: {
    defaultProps: {
      '$zindex-fixed': string;
      '$zindex-sticky': string;
    };
    getPositionUtilities: (
      zindexFixed?: string,
      zindexSticky?: string,
    ) => string;
    fixedTop: (zindexFixed?: string) => string;
    fixedBottom: (zindexFixed?: string) => string;
    stickTop: (zindexSticky?: string) => string;
  };

  export const rebootUtils: {
    html: () => string;
    boxSizing: () => string;
    ie10FixViewport: () => string;
    body: (
      fontFamilyBase?: string,
      fontSizeBase?: string,
      fontWeightBase?: string,
      lineHeightBase?: string,
      bodyColor?: string,
      bodyBg?: string,
    ) => string;
    bodyUtils: () => string;
    tabIndex: () => string;
    svg: () => string;
    ie10FixHidden: () => string;
    getGlobalStyles: () => string;
    getGlobalStyleNoBootstrapProvider: (
      fontFamilyBase?: string,
      fontSizeBase?: string,
      fontWeightBase?: string,
      lineHeightBase?: string,
      bodyColor?: string,
      bodyBg?: string,
    ) => string;
    webkitFileUploadButton: () => string;
  };

  export const getGlobalStyleNoBootstrapProvider: typeof rebootUtils['getGlobalStyleNoBootstrapProvider'];
  export const getGlobalStyles: typeof rebootUtils['getGlobalStyles'];

  export const screenreadersUtils: {
    getScreenReadersUtilities: () => string;
  };

  export const sizingUtils: {
    defaultProps: {
      $sizes: {
        25: string;
        50: string;
        75: string;
        100: string;
      };
    };
    getSizingUtilities: (sizes?: {
      25?: string;
      50?: string;
      75?: string;
      100?: string;
    }) => string;
  };

  export const spacingUtils: {
    defaultProps: {
      '$grid-breakpoints': {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      $spacers: {
        0: {
          x: string;
          y: string;
        };
        1: {
          x: string;
          y: string;
        };
        2: {
          x: string;
          y: string;
        };
        3: {
          x: string;
          y: string;
        };
        4: {
          x: string;
          y: string;
        };
        5: {
          x: string;
          y: string;
        };
      };
    };
    getSpacingUtilities: (
      gridBreakpoints?: {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
      },
      spacers?: {
        0?: {
          x: string;
          y: string;
        };
        1?: {
          x: string;
          y: string;
        };
        2?: {
          x: string;
          y: string;
        };
        3?: {
          x: string;
          y: string;
        };
        4?: {
          x: string;
          y: string;
        };
        5?: {
          x: string;
          y: string;
        };
      },
    ) => string;
  };

  export const textUtils: {
    defaultProps: {
      '$grid-breakpoints': {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      '$enable-hover-media-query': boolean;
      '$font-weight-normal': string;
      '$font-weight-bold': string;
      '$text-muted': string;
      '$brand-primary': string;
      '$brand-success': string;
      '$brand-info': string;
      '$brand-warning': string;
      '$brand-danger': string;
      '$gray-dark': string;
    };
    getTextUtilities: (
      enableHoverMediaQuery?: boolean,
      gridBreakpoints?: {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
      },
      fontWeightNormal?: string,
      fontWeightBold?: string,
      textMuted?: string,
      brandPrimary?: string,
      brandSuccess?: string,
      brandInfo?: string,
      brandWarning?: string,
      brandDanger?: string,
      grayDark?: string,
    ) => string;
  };

  export const transitionUtils: {
    defaultProps: {
      '$enable-transitions': boolean;
      '$transition-fade': string;
      '$transition-collapse': string;
    };
    getTransitionUtilities: (
      enableTransitions?: boolean,
      transitionFade?: string,
      transitionCollapse?: string,
    ) => string;
    getReactTransition: (
      enableTransitions: boolean,
      transition: string,
    ) => string;
    fade: (enableTransitions?: boolean, transitionFade?: string) => string;
    collapse: (
      enableTransitions?: boolean,
      transitionCollapse?: string,
    ) => string;
  };

  export const visibilityUtils: {
    getVisibilityUtilities: () => string;
  };
}

// Core bootstrap styled
// ---------------------
declare module 'bootstrap-styled' {
  import {
    getGlobalStyleNoBootstrapProvider,
    getGlobalStyles,
  } from '@bootstrap-styled/css-utils';

  export { getGlobalStyles, getGlobalStyleNoBootstrapProvider };

  export type Theme = {
    _name: string;

    // Colors
    $white: string;
    $black: string;
    $red: string;
    $orange: string;
    $yellow: string;
    $green: string;
    $blue: string;
    $teal: string;
    $pink: string;
    $purple: string;

    // Grayscale
    '$gray-dark': string;
    $gray: string;
    '$gray-light': string;
    '$gray-lighter': string;
    '$gray-lightest': string;

    // Semantic colour scheme
    '$brand-primary': string;
    '$brand-success': string;
    '$brand-info': string;
    '$brand-warning': string;
    '$brand-danger': string;
    '$brand-inverse': string;

    // Options
    '$enable-rounded': boolean;
    '$enable-shadows': boolean;
    '$enable-gradients': boolean;
    '$enable-transitions': boolean;
    '$enable-hover-media-query': boolean;
    '$enable-grid-classes': boolean;
    '$enable-print-styles': boolean;

    // Spacing
    $spacer: string;
    '$spacer-halved': string;
    '$spacer-x': string;
    '$spacer-y': string;
    $spacers: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    '$border-width': string;

    // .h-* & .w-* classes
    $sizes: {
      25: string;
      50: string;
      75: string;
      100: string;
    };

    // Body
    '$body-bg': string;
    '$body-color': string;

    // Links
    '$link-color': string;
    '$link-decoration': string;
    '$link-hover-color': string;
    '$link-hover-decoration': string;

    // Grid breakpoints
    '$grid-breakpoints': {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    // Grid containers
    '$container-max-widths': {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    // Grid columns
    '$grid-columns': string;
    '$grid-gutter-width': string;

    // Fonts
    '$font-family-sans-serif': string;
    '$font-family-monospace': string;
    '$font-family-base': string;

    '$font-size-base': string;
    '$font-size-lg': string;
    '$font-size-sm': string;
    '$font-size-xs': string;

    '$font-weight-normal': string;
    '$font-weight-bold': string;

    '$font-weight-base': string;
    '$line-height-base': string;

    '$font-size-h1': string;
    '$font-size-h2': string;
    '$font-size-h3': string;
    '$font-size-h4': string;
    '$font-size-h5': string;
    '$font-size-h6': string;

    '$headings-margin-bottom': string;
    '$headings-font-family': string;
    '$headings-font-weight': string;
    '$headings-line-height': string;
    '$headings-color': string;

    '$display1-size': string;
    '$display2-size': string;
    '$display3-size': string;
    '$display4-size': string;

    '$display1-weight': string;
    '$display2-weight': string;
    '$display3-weight': string;
    '$display4-weight': string;

    '$display-line-height': string;

    '$lead-font-size': string;
    '$lead-font-weight': string;

    '$small-font-size': string;

    '$text-muted': string;
    '$blockquote-small-color': string;

    '$blockquote-font-size': string;
    '$blockquote-border-color': string;
    '$blockquote-border-width': string;

    '$hr-border-color': string;
    '$hr-border-width': string;

    '$mark-padding': string;

    '$dt-font-weight': string;

    '$list-inline-padding': string;

    // Components
    '$line-height-lg': string;
    '$line-height-sm': string;

    '$border-radius': string;
    '$border-radius-lg': string;
    '$border-radius-sm': string;

    '$component-active-color': string;
    '$component-active-bg': string;

    '$caret-width': string;

    '$transition-base': string;
    '$transition-fade': string;
    '$transition-collapse': string;

    // Tables
    '$table-cell-padding': string;
    '$table-sm-cell-padding': string;

    '$table-bg': string;

    '$table-inverse-bg': string;
    '$table-inverse-bg-accent': string;
    '$table-inverse-bg-hover': string;
    '$table-inverse-color': string;
    '$table-inverse-border': string;

    '$table-bg-accent': string;
    '$table-bg-hover': string;
    '$table-bg-active': string;

    '$table-head-bg': string;
    '$table-head-color': string;

    '$table-border-width': string;
    '$table-border-color': string;

    // Buttons
    '$btn-padding-x': string;
    '$btn-padding-y': string;
    '$btn-line-height': string;
    '$btn-font-weight': string;
    '$btn-box-shadow': string;
    '$btn-focus-box-shadow': string;
    '$btn-disabled-opacity': string;
    '$btn-active-box-shadow': string;

    '$btn-primary-color': string;
    '$btn-primary-bg': string;

    '$btn-secondary-color': string;
    '$btn-secondary-bg': string;

    '$btn-info-color': string;
    '$btn-info-bg': string;

    '$btn-success-color': string;
    '$btn-success-bg': string;

    '$btn-warning-color': string;
    '$btn-warning-bg': string;

    '$btn-danger-color': string;
    '$btn-danger-bg': string;

    '$btn-primary-border': string;
    '$btn-secondary-border': string;
    '$btn-info-border': string;
    '$btn-success-border': string;
    '$btn-warning-border': string;
    '$btn-danger-border': string;

    '$btn-link-disabled-color': string;

    '$btn-padding-x-sm': string;
    '$btn-padding-y-sm': string;

    '$btn-padding-x-lg': string;
    '$btn-padding-y-lg': string;

    '$btn-block-spacing-y': string;

    '$btn-border-radius': string;
    '$btn-border-radius-lg': string;
    '$btn-border-radius-sm': string;

    '$btn-border-width': string;

    '$btn-transition': string;

    // Forms
    '$input-padding-x': string;
    '$input-padding-y': string;
    '$input-line-height': string;

    '$input-bg': string;
    '$input-bg-disabled': string;

    '$input-color': string;
    '$input-border-color': string;
    '$input-btn-border-width': string;
    '$input-box-shadow': string;

    '$input-border-radius': string;
    '$input-border-radius-lg': string;
    '$input-border-radius-sm': string;

    '$input-bg-focus': string;
    '$input-border-focus': string;
    '$input-box-shadow-focus': string;
    '$input-color-focus': string;

    '$input-color-placeholder': string;

    '$input-padding-x-sm': string;
    '$input-padding-y-sm': string;

    '$input-padding-x-lg': string;
    '$input-padding-y-lg': string;

    '$input-height': string;
    '$input-height-sm': string;
    '$input-height-lg': string;

    '$input-transition': string;

    '$label-margin-bottom': string;

    '$form-text-margin-top': string;
    '$form-feedback-margin-top': string;

    '$form-check-margin-bottom': string;
    '$form-check-input-gutter': string;
    '$form-check-input-margin-y': string;
    '$form-check-input-margin-x': string;

    '$form-check-inline-margin-x': string;

    '$form-group-margin-bottom': string;

    '$input-group-addon-bg': string;
    '$input-group-addon-border-color': string;

    '$cursor-disabled': string;

    '$custom-control-gutter': string;
    '$custom-control-spacer-x': string;
    '$custom-control-spacer-y': string;

    '$custom-control-indicator-size': string;
    '$custom-control-indicator-bg': string;
    '$custom-control-indicator-bg-size': string;
    '$custom-control-indicator-box-shadow': string;

    '$custom-control-disabled-cursor': string;
    '$custom-control-disabled-indicator-bg': string;
    '$custom-control-disabled-description-color': string;

    '$custom-control-checked-indicator-color': string;
    '$custom-control-checked-indicator-bg': string;
    '$custom-control-checked-indicator-box-shadow': string;

    '$custom-control-focus-indicator-box-shadow': string;

    '$custom-control-active-indicator-color': string;
    '$custom-control-active-indicator-bg': string;
    '$custom-control-active-indicator-box-shadow': string;

    '$custom-checkbox-radius': string;
    '$custom-checkbox-checked-icon': string;

    '$custom-checkbox-indeterminate-bg': string;
    '$custom-checkbox-indeterminate-indicator-color': string;
    '$custom-checkbox-indeterminate-icon': string;
    '$custom-checkbox-indeterminate-box-shadow': string;

    '$custom-radio-radius': string;
    '$custom-radio-checked-icon': string;

    '$custom-select-padding-x': string;
    '$custom-select-padding-y': string;
    '$custom-select-indicator-padding': string;
    '$custom-select-line-height': string;
    '$custom-select-color': string;
    '$custom-select-disabled-color': string;
    '$custom-select-bg': string;
    '$custom-select-disabled-bg': string;
    '$custom-select-bg-size': string;
    '$custom-select-indicator-color': string;
    '$custom-select-indicator': string;
    '$custom-select-border-width': string;
    '$custom-select-border-color': string;
    '$custom-select-border-radius': string;

    '$custom-select-focus-border-color': string;
    '$custom-select-focus-box-shadow': string;

    '$custom-select-sm-font-size': string;

    '$custom-file-height': string;
    '$custom-file-width': string;
    '$custom-file-focus-box-shadow': string;

    '$custom-file-padding-x': string;
    '$custom-file-padding-y': string;
    '$custom-file-line-height': string;
    '$custom-file-color': string;
    '$custom-file-bg': string;
    '$custom-file-border-width': string;
    '$custom-file-border-color': string;
    '$custom-file-border-radius': string;
    '$custom-file-box-shadow': string;
    '$custom-file-button-color': string;
    '$custom-file-button-bg': string;
    '$custom-file-text': {
      placeholder: {
        en: string;
      };
      'button-label': {
        en: string;
      };
    };

    // Form validation icons
    '$form-icon-success-color': string;
    '$form-icon-success': string;

    '$form-icon-warning-color': string;
    '$form-icon-warning': string;

    '$form-icon-danger-color': string;
    '$form-icon-danger': string;

    // Dropdowns
    '$dropdown-min-width': string;
    '$dropdown-padding-y': string;
    '$dropdown-margin-top': string;
    '$dropdown-bg': string;
    '$dropdown-border-color': string;
    '$dropdown-border-width': string;
    '$dropdown-divider-bg': string;
    '$dropdown-box-shadow': string;

    '$dropdown-link-color': string;
    '$dropdown-link-hover-color': string;
    '$dropdown-link-hover-bg': string;

    '$dropdown-link-active-color': string;
    '$dropdown-link-active-bg': string;

    '$dropdown-link-disabled-color': string;

    '$dropdown-item-padding-x': string;

    '$dropdown-header-color': string;

    // Z-index master list
    //
    // Warning = 'Avoid customizing these values. They're used for a bird's eye view
    // of components dependent on the z-axis and are designed to all work together.
    '$zindex-dropdown-backdrop': string;
    '$zindex-dropdown': string;
    '$zindex-modal-backdrop': string;
    '$zindex-modal': string;
    '$zindex-popover': string;
    '$zindex-tooltip': string;
    '$zindex-navbar': string;
    '$zindex-navbar-fixed': string;
    '$zindex-navbar-sticky': string;

    // Navbar
    '$navbar-padding-x': string;
    '$navbar-padding-y': string;

    '$navbar-brand-padding-y': string;

    '$navbar-divider-padding-y': string;

    '$navbar-toggler-padding-x': string;
    '$navbar-toggler-padding-y': string;
    '$navbar-toggler-font-size': string;
    '$navbar-toggler-border-radius': string;

    '$navbar-inverse-color': string;
    '$navbar-inverse-hover-color': string;
    '$navbar-inverse-active-color': string;
    '$navbar-inverse-disabled-color': string;
    '$navbar-inverse-toggler-bg': string;
    '$navbar-inverse-toggler-border': string;

    '$navbar-light-color': string;
    '$navbar-light-hover-color': string;
    '$navbar-light-active-color': string;
    '$navbar-light-disabled-color': string;
    '$navbar-light-toggler-bg': string;
    '$navbar-light-toggler-border': string;

    // Navs
    '$nav-link-padding': string;
    '$nav-disabled-link-color': string;

    '$nav-tabs-border-color': string;
    '$nav-tabs-border-width': string;
    '$nav-tabs-border-radius': string;
    '$nav-tabs-link-hover-border-color': string;
    '$nav-tabs-active-link-hover-color': string;
    '$nav-tabs-active-link-hover-bg': string;
    '$nav-tabs-active-link-hover-border-color': string;

    '$nav-pills-border-radius': string;
    '$nav-pills-active-link-color': string;
    '$nav-pills-active-link-bg': string;

    // Pagination
    '$pagination-padding-x': string;
    '$pagination-padding-y': string;
    '$pagination-padding-x-sm': string;
    '$pagination-padding-y-sm': string;
    '$pagination-padding-x-lg': string;
    '$pagination-padding-y-lg': string;
    '$pagination-line-height': string;

    '$pagination-color': string;
    '$pagination-bg': string;
    '$pagination-border-width': string;
    '$pagination-border-color': string;

    '$pagination-hover-color': string;
    '$pagination-hover-bg': string;
    '$pagination-hover-border': string;

    '$pagination-active-color': string;
    '$pagination-active-bg': string;
    '$pagination-active-border': string;

    '$pagination-disabled-color': string;
    '$pagination-disabled-bg': string;
    '$pagination-disabled-border': string;

    // Jumbotron
    '$jumbotron-padding': string;
    '$jumbotron-bg': string;

    // Form states and alerts
    '$state-success-text': string;
    '$state-success-bg': string;
    '$state-success-border': string;

    '$state-info-text': string;
    '$state-info-bg': string;
    '$state-info-border': string;

    '$state-warning-text': string;
    '$state-warning-bg': string;
    '$state-warning-border': string;

    '$mark-bg': string;

    '$state-danger-text': string;
    '$state-danger-bg': string;
    '$state-danger-border': string;

    // Cards
    '$card-spacer-x': string;
    '$card-spacer-y': string;
    '$card-border-width': string;
    '$card-border-radius': string;
    '$card-border-color': string;
    '$card-border-radius-inner': string;
    '$card-cap-bg': string;
    '$card-bg': string;

    '$card-link-hover-color': string;

    '$card-img-overlay-padding': string;

    '$card-group-margin': string;
    '$card-deck-margin': string;

    '$card-columns-count-md': string;
    '$card-columns-gap-md': string;
    '$card-columns-margin-md': string;
    '$card-columns-count-lg': string;
    '$card-columns-gap-lg': string;
    '$card-columns-margin-lg': string;
    '$card-columns-count-xl': string;
    '$card-columns-gap-xl': string;
    '$card-columns-margin-xl': string;
    '$card-columns-count-xxl': string;
    '$card-columns-gap-xxl': string;
    '$card-columns-margin-xxl': string;

    // Tooltips
    '$tooltip-max-width': string;
    '$tooltip-color': string;
    '$tooltip-bg': string;
    '$tooltip-opacity': string;
    '$tooltip-padding-y': string;
    '$tooltip-padding-x': string;
    '$tooltip-margin': string;

    '$tooltip-arrow-width': string;
    '$tooltip-arrow-color': string;

    // Popovers
    '$popover-inner-padding': string;
    '$popover-bg': string;
    '$popover-max-width': string;
    '$popover-border-width': string;

    '$popover-border-color': string;
    '$popover-box-shadow': string;

    '$popover-title-bg': string;
    '$popover-title-padding-x': string;
    '$popover-title-padding-y': string;

    '$popover-content-padding-x': string;
    '$popover-content-padding-y': string;

    '$popover-arrow-width': string;
    '$popover-arrow-color': string;

    '$popover-arrow-outer-width': string;
    '$popover-arrow-outer-color': string;

    // Badges
    '$badge-default-bg': string;
    '$badge-primary-bg': string;
    '$badge-success-bg': string;
    '$badge-info-bg': string;
    '$badge-warning-bg': string;
    '$badge-danger-bg': string;

    '$badge-color': string;
    '$badge-link-hover-color': string;
    '$badge-font-size': string;
    '$badge-font-weight': string;
    '$badge-padding-x': string;
    '$badge-padding-y': string;

    '$badge-pill-padding-x': string;
    '$badge-pill-border-radius': string;

    // Modals
    '$modal-inner-padding': string;

    '$modal-dialog-margin': string;
    '$modal-dialog-sm-up-margin-y': string;

    '$modal-title-line-height': string;

    '$modal-content-bg': string;
    '$modal-content-border-color': string;
    '$modal-content-border-width': string;
    '$modal-content-xs-box-shadow': string;
    '$modal-content-sm-up-box-shadow': string;

    '$modal-backdrop-bg': string;
    '$modal-backdrop-opacity': string;
    '$modal-header-border-color': string;
    '$modal-footer-border-color': string;
    '$modal-header-border-width': string;
    '$modal-footer-border-width': string;
    '$modal-header-padding': string;

    '$modal-lg': string;
    '$modal-md': string;
    '$modal-sm': string;

    '$modal-transition': string;

    // Alerts
    '$alert-padding-x': string;
    '$alert-padding-y': string;
    '$alert-margin-bottom': string;
    '$alert-border-radius': string;
    '$alert-link-font-weight': string;
    '$alert-border-width': string;

    '$alert-success-bg': string;
    '$alert-success-text': string;
    '$alert-success-border': string;

    '$alert-info-bg': string;
    '$alert-info-text': string;
    '$alert-info-border': string;

    '$alert-warning-bg': string;
    '$alert-warning-text': string;
    '$alert-warning-border': string;

    '$alert-danger-bg': string;
    '$alert-danger-text': string;
    '$alert-danger-border': string;

    // Progress bars
    '$progress-height': string;
    '$progress-font-size': string;
    '$progress-bg': string;
    '$progress-border-radius': string;
    '$progress-box-shadow': string;
    '$progress-bar-color': string;
    '$progress-bar-bg': string;
    '$progress-bar-animation-timing': string;

    // List group
    '$list-group-color': string;
    '$list-group-bg': string;
    '$list-group-border-color': string;
    '$list-group-border-width': string;
    '$list-group-border-radius': string;

    '$list-group-item-padding-x': string;
    '$list-group-item-padding-y': string;

    '$list-group-hover-bg': string;
    '$list-group-active-color': string;
    '$list-group-active-bg': string;
    '$list-group-active-border': string;

    '$list-group-disabled-color': string;
    '$list-group-disabled-bg': string;

    '$list-group-link-color': string;
    '$list-group-link-hover-color': string;

    '$list-group-link-active-color': string;
    '$list-group-link-active-bg': string;

    // Image thumbnails
    '$thumbnail-padding': string;
    '$thumbnail-bg': string;
    '$thumbnail-border-width': string;
    '$thumbnail-border-color': string;
    '$thumbnail-border-radius': string;
    '$thumbnail-box-shadow': string;
    '$thumbnail-transition': string;

    // Figures
    '$figure-caption-font-size': string;
    '$figure-caption-color': string;

    // Breadcrumbs
    '$breadcrumb-padding-y': string;
    '$breadcrumb-padding-x': string;
    '$breadcrumb-item-padding': string;

    '$breadcrumb-bg': string;
    '$breadcrumb-divider-color': string;
    '$breadcrumb-active-color': string;
    '$breadcrumb-divider': string;

    // Close
    '$close-font-size': string;
    '$close-font-weight': string;
    '$close-color': string;
    '$close-text-shadow': string;

    // Code
    '$code-font-size': string;
    '$code-padding-x': string;
    '$code-padding-y': string;
    '$code-color': string;
    '$code-bg': string;

    '$kbd-color': string;
    '$kbd-bg': string;
    '$kbd-box-shadow': string;
    '$nested-kbd-font-weight': string;

    '$pre-color': string;
    '$pre-scrollable-max-height': string;
  };

  export type UserTheme = {
    [K in keyof Theme]?: Theme[K] | null;
  };

  export type AnyTheme<
    T extends string | number | boolean | Record<string, any>,
  > = {
    [extraVars: string | symbol]: T;
  };

  export const theme: Theme;
  export function makeTheme(userTheme: UserTheme): Theme;
  export type ListTheme = (userTheme: Partial<AnyTheme>) => AnyTheme;
  export function createMakeTheme(list: ListTheme[]): ListTheme;

  export function makeScopedTheme(
    scopeName: string,
    userTheme?: { [scope: string]: UserTheme },
  ): { [scope: string]: UserTheme };

  export function toMakeTheme(userTheme: AnyTheme): ListTheme;
}

// Styled bootstrap components
// --------------------------
// declare module '@bootstrap-styled/*'
declare module '@bootstrap-styled/v4' {
  import { TransitionProps } from 'react-transition-group/Transition';

  export { getGlobalStyles, getGlobalStyleNoBootstrapProvider };

  // 1. Atoms

  export type AProps = {
    className?: string;
    tag?: ElementType;
    theme?: {
      '$link-color'?: string;
      '$link-decoration'?: string;
      '$link-hover-color'?: string;
      '$link-hover-decoration'?: string;
      '$enable-hover-media-query'?: boolean;
    };
    color?:
      | 'white'
      | 'muted'
      | 'gray-dark'
      | 'primary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger';
    cssModule?: Record<string, any>;
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>;

  export const A: StyledComponentBase<
    ComponentClass<AProps, { focus: boolean }>,
    StyledTheme
  >;

  export type LinkProps = {
    className?: string;
    to: string;
    theme?: {
      '$link-color'?: string;
      '$link-decoration'?: string;
      '$link-hover-color'?: string;
      '$link-hover-decoration'?: string;
      '$enable-hover-media-query'?: string;
    };
  } & HTMLAttributes<HTMLElement>;

  export const Link: StyledComponentBase<
    ComponentClass<LinkProps>,
    StyledTheme
  >;

  export const composeLink: (
    RouterLink: ComponentType<
      { className?: string; to: string } & HTMLAttributes<HTMLElement>
    >,
  ) => typeof Link;

  export type AbbrProps = {
    className?: string;
    tag?: ElementType;
    title: string;
    initialism?: boolean;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Abbr: StyledComponentBase<
    ComponentClass<AbbrProps>,
    StyledTheme
  >;

  export const Address: StyledComponentBase<'address', StyledTheme>;

  export type AlertProps = {
    className?: string;
    children?: ReactNode;
    color?: 'success' | 'info' | 'warning' | 'danger';
    isOpen?: boolean;
    onClick?: (event: SyntheticEvent) => void;
    tag?: ElementType;
    transition?: {
      FadeProptypes?: Record<string, any>;
      unmountOnExit?: boolean;
    };
    autoHideDuration?: string | number;
    theme?: {
      '$alert-padding-x'?: string;
      '$alert-padding-y'?: string;
      '$alert-margin-bottom'?: string;
      '$alert-border-radius'?: string;
      '$alert-link-font-weight'?: string;
      '$alert-border-width'?: string;
      '$alert-success-bg'?: string;
      '$alert-success-text'?: string;
      '$alert-success-border'?: string;
      '$alert-info-bg'?: string;
      '$alert-info-text'?: string;
      '$alert-info-border'?: string;
      '$alert-warning-bg'?: string;
      '$alert-warning-text'?: string;
      '$alert-warning-border'?: string;
      '$alert-danger-bg'?: string;
      '$alert-danger-text'?: string;
      '$alert-danger-border'?: string;
      '$enable-rounded'?: boolean;
    };
    uncontrolled?: boolean;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Alert: StyledComponentBase<
    ComponentClass<
      AlertProps,
      {
        uncontrolledOpen: boolean;
        exited: boolean;
      }
    >,
    StyledTheme
  >;

  export const Area: StyledComponentBase<'area', StyledTheme>;

  export type ArticleProps = HTMLAttributes<HTMLElement>;

  export const Article: StyledComponentBase<
    FunctionComponent<ArticleProps>,
    StyledTheme
  >;

  export type BlockquoteProps = {
    className?: string;
    tag?: ElementType;
    theme?: {
      $spacer?: string;
      '$spacer-halved'?: string;
      '$blockquote-small-color'?: string;
      '$blockquote-font-size'?: string;
      '$blockquote-border-color'?: string;
      '$blockquote-border-width'?: string;
    };
    reverse?: boolean;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Blockquote: StyledComponentBase<
    ComponentClass<BlockquoteProps>,
    StyledTheme
  >;

  export type BreadcrumbProps = {
    className?: string;
    tag?: ElementType;
    theme?: {
      '$breadcrumb-padding-y'?: string;
      '$breadcrumb-padding-x'?: string;
      '$breadcrumb-item-padding'?: string;
      '$breadcrumb-bg'?: string;
      '$breadcrumb-divider-color'?: string;
      '$breadcrumb-active-color'?: string;
      '$breadcrumb-divider'?: string;
      '$spacer-y'?: string;
      '$enable-rounded'?: boolean;
    };
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Breadcrumb: StyledComponentBase<
    ComponentClass<BreadcrumbProps>,
    StyledTheme
  >;

  export type BreadcrumbItemProps = {
    className?: string;
    tag?: ElementType;
    active?: boolean;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const BreadcrumbItem: StyledComponentBase<
    ComponentClass<BreadcrumbItemProps>,
    StyledTheme
  >;

  export type ButtonProps = {
    active?: boolean;
    block?: boolean;
    hover?: boolean;
    focus?: boolean;
    disabled?: boolean;
    outline?: boolean;
    className?: string;
    color?:
      | 'link'
      | 'primary'
      | 'secondary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger';
    ref?: React.LegacyRef;
    onClick?: React.LegacyRef;
    size?: string; // Accepts: 'sm' | 'lg', but this type definition throws an error
    dropup?: boolean;
    tag?: ElementType;
    theme?: {
      '$btn-padding-x'?: string;
      '$btn-padding-y'?: string;
      '$btn-line-height'?: string;
      '$btn-font-weight'?: string;
      '$btn-box-shadow'?: string;
      '$btn-focus-box-shadow'?: string;
      '$btn-disabled-opacity'?: string;
      '$btn-active-box-shadow'?: string;
      '$btn-primary-color'?: string;
      '$btn-primary-bg'?: string;
      '$btn-primary-border'?: string;
      '$btn-secondary-color'?: string;
      '$btn-secondary-bg'?: string;
      '$btn-secondary-border'?: string;
      '$btn-info-color'?: string;
      '$btn-info-bg'?: string;
      '$btn-info-border'?: string;
      '$btn-success-color'?: string;
      '$btn-success-bg'?: string;
      '$btn-success-border'?: string;
      '$btn-warning-color'?: string;
      '$btn-warning-bg'?: string;
      '$btn-warning-border'?: string;
      '$btn-danger-color'?: string;
      '$btn-danger-bg'?: string;
      '$btn-danger-border'?: string;
      '$btn-link-disabled-color'?: string;
      '$btn-padding-x-sm'?: string;
      '$btn-padding-y-sm'?: string;
      '$btn-padding-x-lg'?: string;
      '$btn-padding-y-lg'?: string;
      '$btn-block-spacing-y'?: string;
      '$btn-border-radius'?: string;
      '$btn-border-radius-lg'?: string;
      '$btn-border-radius-sm'?: string;
      '$btn-transition'?: string;
      '$btn-border-width'?: string;
      '$link-hover-decoration'?: string;
      '$enable-rounded'?: boolean;
      '$enable-shadows'?: boolean;
      '$enable-hover-media-query'?: boolean;
      '$enable-transitions'?: boolean;
    };
    cssModule?: Record<string, any>;
  } & React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> &
    React.InputHTMLAttributes<HTMLInputElement>;

  export const Button: StyledComponentBase<
    ComponentClass<ButtonProps>,
    StyledTheme
  >;

  export type ButtonDropdownProps = {
    children?: ReactNode;
    isOpen: boolean;
    toggle: React.LegacyRef;
  } & HTMLAttributes<HTMLElement>;

  export const ButtonDropdown: StyledComponentBase<
    FunctionComponent<ButtonDropdownProps>,
    StyledTheme
  >;

  export type ButtonGroupProps = {
    className?: string;
    tag?: ElementType;
    theme?: {
      '$input-btn-border-width'?: string;
      '$btn-padding-x'?: string;
      '$btn-active-box-shadow'?: string;
      '$btn-padding-x-lg'?: string;
      '$btn-padding-y-lg'?: string;
      '$font-size-lg'?: string;
      '$btn-padding-x-sm'?: string;
      '$btn-padding-y-sm'?: string;
      '$font-size-sm'?: string;
      '$btn-border-radius-lg'?: string;
      '$btn-border-radius-sm'?: string;
      '$enable-rounded'?: boolean;
      '$enable-shadows'?: boolean;
    };
    size?: string; // Accepts: 'sm' | 'lg', but this type definition throws an error
    vertical?: boolean;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const ButtonGroup: StyledComponentBase<
    ComponentClass<ButtonGroupProps>,
    StyledTheme
  >;

  export type ButtonToolbarProps = {
    className?: string;
    role?: string;
    tag?: ElementType;
    theme?: {
      '$input-btn-border-width'?: string;
      '$btn-padding-x'?: string;
      '$btn-active-box-shadow'?: string;
      '$btn-padding-x-lg'?: string;
      '$btn-padding-y-lg'?: string;
      '$font-size-lg'?: string;
      '$btn-padding-x-sm'?: string;
      '$btn-padding-y-sm'?: string;
      '$font-size-sm'?: string;
      '$btn-border-radius-lg'?: string;
      '$btn-border-radius-sm'?: string;
      '$enable-rounded'?: boolean;
      '$enable-shadows'?: boolean;
    };
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const ButtonToolbar: StyledComponentBase<
    ComponentClass<ButtonToolbarProps>,
    StyledTheme
  >;

  export type CaptionProps = {
    theme?: {
      '$table-cell-padding'?: string;
      '$text-muted'?: string;
    };
  } & HTMLAttributes<HTMLElement>;

  export const Caption: StyledComponentBase<
    FunctionComponent<CaptionProps>,
    StyledTheme
  >;

  export type CloseProps = {
    className?: string;
    theme?: {
      '$enable-rounded'?: boolean;
      '$enable-hover-media-query'?: boolean;
    };
    closeLabel?: string;
    onDismiss: React.LegacyRef;
    'sr-only'?: boolean;
    cssModule?: Record<string, any>;
  } & HTMLAttributes<HTMLElement>;

  export const Close: StyledComponentBase<
    ComponentClass<CloseProps>,
    StyledTheme
  >;

  export type CodeProps = {
    className?: string;
    tag?: ElementType;
    theme?: {
      '$code-font-size'?: string;
      '$code-padding-x'?: string;
      '$code-padding-y'?: string;
      '$code-color'?: string;
      '$code-bg'?: string;
      '$enable-rounded'?: boolean;
      '$font-family-monospace'?: string;
    };
  } & AllHTMLAttributes<HTMLElement>;

  export const Code: StyledComponentBase<
    ComponentClass<CodeProps>,
    StyledTheme
  >;

  type ColumnProps =
    | boolean
    | number
    | string
    | {
        size?: boolean | number | string;
        push?: number | string;
        pull?: number | string;
        offset?: number | string;
      };

  export type ColProps = {
    className?: string;
    tag?: ElementType;
    xs?: ColumnProps;
    sm?: ColumnProps;
    md?: ColumnProps;
    lg?: ColumnProps;
    xl?: ColumnProps;
    widths?: string[];
    theme?: {
      '$enable-grid-classes'?: boolean;
      '$grid-breakpoints'?: {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
      };
      '$grid-columns'?: string;
      '$grid-gutter-width'?: string;
    };
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Col: StyledComponentBase<ComponentClass<ColProps>, StyledTheme>;

  export type CollapseProps = {
    className?: string;
    tag?: ElementType;
    delay?: { show?: number; hide?: number } | number;
    isOpen?: boolean;
    navbar?: boolean;
    onOpened?: React.LegacyRef;
    onClosed?: React.LegacyRef;
    theme?: {
      '$transition-collapse'?: string;
    };
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Collapse: ComponentClass<CollapseProps>;

  export type DdProps = {
    theme?: {
      '$grid-columns'?: string;
      '$grid-gutter-width'?: string;
      '$grid-breakpoints'?: Record<string, any>;
      '$enable-grid-classes'?: boolean;
    };
  } & HTMLAttributes<HTMLElement>;

  export const Dd: StyledComponentBase<'dd', StyledTheme, DdProps>;

  export type DetailsProps = React.DetailsHTMLAttributes<HTMLElement>;

  export const Details: StyledComponentBase<
    FunctionComponent<DetailsProps>,
    StyledTheme
  >;

  export const Dfn: StyledComponentBase<'dfn', StyledTheme>;

  export type DlProps = {
    theme?: {
      '$grid-gutter-width'?: string;
      '$enable-grid-classes'?: boolean;
    };
  } & HTMLAttributes<HTMLElement>;

  export const Dl: StyledComponentBase<'dl', StyledTheme, DlProps>;

  export type DrawerProps = {
    className?: string;
    active?: boolean;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    docked?: boolean;
    theme?: {
      '$enable-rounded'?: boolean;
      '$enable-shadows'?: boolean;
      '$drawer-bg'?: string;
      '$drawer-transition'?: string;
      '$drawer-box-shadow'?: string;
      '$drawer-border-radius'?: string;
      '$drawer-zindex'?: string;
      '$drawer-docked-width'?: string;
    };
    cssModule?: Record<string, any>;
  } & HTMLAttributes<HTMLElement>;

  export const Drawer: StyledComponentBase<
    ComponentClass<DrawerProps>,
    StyledTheme
  >;

  export type DtProps = {
    theme?: {
      '$dt-font-weight'?: string;
      '$grid-columns'?: string;
      '$grid-gutter-width'?: string;
      '$grid-breakpoints'?: Record<string, any>;
      '$enable-grid-classes'?: boolean;
    };
  } & HTMLAttributes<HTMLElement>;

  export const Dt: StyledComponentBase<'dt', StyledTheme, DtProps>;

  export type FieldsetProps = {
    theme?: {
      '$grid-gutter-width'?: string;
      '$enable-grid-classes'?: boolean;
    };
  } & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

  export const Fieldset: StyledComponentBase<
    'fieldset',
    StyledTheme,
    FieldsetProps
  >;

  export type FooterProps = HTMLAttributes<HTMLElement>;

  export const Footer: StyledComponentBase<
    FunctionComponent<FooterProps>,
    StyledTheme
  >;

  export type H1Props = {
    className?: string;
    theme?: {
      '$link-color'?: string;
      '$font-size-h1'?: string;
      '$headings-margin-bottom'?: string;
      '$headings-font-family'?: string;
      '$headings-font-weight'?: string;
      '$headings-line-height'?: string;
      '$headings-color'?: string;
      '$display1-size'?: string;
      '$display2-size'?: string;
      '$display3-size'?: string;
      '$display4-size'?: string;
      '$display1-weight'?: string;
      '$display2-weight'?: string;
      '$display3-weight'?: string;
      '$display4-weight'?: string;
      '$lead-font-size'?: string;
      '$lead-font-weight'?: string;
    };
    color?:
      | 'white'
      | 'muted'
      | 'gray-dark'
      | 'primary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger';
    lead?: boolean;
    cssModule?: Record<string, any>;
  } & HTMLAttributes<HTMLHeadingElement>;

  export const H1: StyledComponentBase<ComponentClass<H1Props>, StyledTheme>;

  export type H2Props = {
    className?: string;
    theme?: {
      '$link-color'?: string;
      '$font-size-h2'?: string;
      '$headings-margin-bottom'?: string;
      '$headings-font-family'?: string;
      '$headings-font-weight'?: string;
      '$headings-line-height'?: string;
      '$headings-color'?: string;
      '$display1-size'?: string;
      '$display2-size'?: string;
      '$display3-size'?: string;
      '$display4-size'?: string;
      '$display1-weight'?: string;
      '$display2-weight'?: string;
      '$display3-weight'?: string;
      '$display4-weight'?: string;
      '$lead-font-size'?: string;
      '$lead-font-weight'?: string;
    };
    color?:
      | 'white'
      | 'muted'
      | 'gray-dark'
      | 'primary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger';
    lead?: boolean;
    cssModule?: Record<string, any>;
  } & HTMLAttributes<HTMLHeadingElement>;

  export const H2: StyledComponentBase<ComponentClass<H2Props>, StyledTheme>;

  export type H3Props = {
    className?: string;
    theme?: {
      '$link-color'?: string;
      '$font-size-h3'?: string;
      '$headings-margin-bottom'?: string;
      '$headings-font-family'?: string;
      '$headings-font-weight'?: string;
      '$headings-line-height'?: string;
      '$headings-color'?: string;
      '$display1-size'?: string;
      '$display2-size'?: string;
      '$display3-size'?: string;
      '$display4-size'?: string;
      '$display1-weight'?: string;
      '$display2-weight'?: string;
      '$display3-weight'?: string;
      '$display4-weight'?: string;
      '$lead-font-size'?: string;
      '$lead-font-weight'?: string;
    };
    color?:
      | 'white'
      | 'muted'
      | 'gray-dark'
      | 'primary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger';
    lead?: boolean;
    cssModule?: Record<string, any>;
  } & HTMLAttributes<HTMLHeadingElement>;

  export const H3: StyledComponentBase<ComponentClass<H3Props>, StyledTheme>;

  export type H4Props = {
    className?: string;
    theme?: {
      '$link-color'?: string;
      '$font-size-h4'?: string;
      '$headings-margin-bottom'?: string;
      '$headings-font-family'?: string;
      '$headings-font-weight'?: string;
      '$headings-line-height'?: string;
      '$headings-color'?: string;
      '$display1-size'?: string;
      '$display2-size'?: string;
      '$display3-size'?: string;
      '$display4-size'?: string;
      '$display1-weight'?: string;
      '$display2-weight'?: string;
      '$display3-weight'?: string;
      '$display4-weight'?: string;
      '$lead-font-size'?: string;
      '$lead-font-weight'?: string;
    };
    color?:
      | 'white'
      | 'muted'
      | 'gray-dark'
      | 'primary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger';
    lead?: boolean;
    cssModule?: Record<string, any>;
  } & HTMLAttributes<HTMLHeadingElement>;

  export const H4: StyledComponentBase<ComponentClass<H4Props>, StyledTheme>;

  export type H5Props = {
    className?: string;
    theme?: {
      '$link-color'?: string;
      '$font-size-h5'?: string;
      '$headings-margin-bottom'?: string;
      '$headings-font-family'?: string;
      '$headings-font-weight'?: string;
      '$headings-line-height'?: string;
      '$headings-color'?: string;
      '$display1-size'?: string;
      '$display2-size'?: string;
      '$display3-size'?: string;
      '$display4-size'?: string;
      '$display1-weight'?: string;
      '$display2-weight'?: string;
      '$display3-weight'?: string;
      '$display4-weight'?: string;
      '$lead-font-size'?: string;
      '$lead-font-weight'?: string;
    };
    color?:
      | 'white'
      | 'muted'
      | 'gray-dark'
      | 'primary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger';
    lead?: boolean;
    cssModule?: Record<string, any>;
  } & HTMLAttributes<HTMLHeadingElement>;

  export const H5: StyledComponentBase<ComponentClass<H5Props>, StyledTheme>;

  export type H6Props = {
    className?: string;
    theme?: {
      '$link-color'?: string;
      '$font-size-h6'?: string;
      '$headings-margin-bottom'?: string;
      '$headings-font-family'?: string;
      '$headings-font-weight'?: string;
      '$headings-line-height'?: string;
      '$headings-color'?: string;
      '$display1-size'?: string;
      '$display2-size'?: string;
      '$display3-size'?: string;
      '$display4-size'?: string;
      '$display1-weight'?: string;
      '$display2-weight'?: string;
      '$display3-weight'?: string;
      '$display4-weight'?: string;
      '$lead-font-size'?: string;
      '$lead-font-weight'?: string;
    };
    color?:
      | 'white'
      | 'muted'
      | 'gray-dark'
      | 'primary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger';
    lead?: boolean;
    cssModule?: Record<string, any>;
  } & HTMLAttributes<HTMLEHTMLHeadingElementlement>;

  export const H6: StyledComponentBase<ComponentClass<H6Props>, StyledTheme>;

  export type HeaderProps = {
    shadowHeader?: boolean;
    theme?: {
      '$enable-rounded'?: boolean;
      '$enable-hover-media-query'?: boolean;
      '$border-width'?: string;
      '$font-size-lg'?: string;
      '$border-radius'?: string;
      '$navbar-padding-x'?: string;
      '$navbar-padding-y'?: string;
      '$zindex-navbar'?: string;
      '$zindex-navbar-fixed'?: string;
      '$zindex-navbar-sticky'?: string;
      '$navbar-brand-padding-y'?: string;
      '$navbar-divider-padding-y'?: string;
      '$navbar-toggler-padding-y'?: string;
      '$navbar-toggler-padding-x'?: string;
      '$navbar-toggler-font-size'?: string;
      '$navbar-toggler-border-radius'?: string;
      '$navbar-light-active-color'?: string;
      '$navbar-light-color'?: string;
      '$navbar-light-hover-color'?: string;
      '$navbar-light-toggler-border'?: string;
      '$navbar-light-disabled-color'?: string;
      '$navbar-light-toggler-bg'?: string;
      '$navbar-inverse-active-color'?: string;
      '$navbar-inverse-color'?: string;
      '$navbar-inverse-hover-color'?: string;
      '$navbar-inverse-toggler-border'?: string;
      '$navbar-inverse-toggler-bg'?: string;
      '$navbar-inverse-disabled-color'?: string;
    };
  } & HTMLAttributes<HTMLElement>;

  export const Header: StyledComponentBase<'header', StyledTheme, HeaderProps>;

  export type HrProps = {
    theme?: {
      '$spacer-y'?: string;
      '$hr-border-width'?: string;
      '$hr-border-color'?: string;
    };
  } & HTMLAttributes<HTMLHRElement>;

  export const Hr: StyledComponentBase<'hr', StyledTheme, HrProps>;

  export type ImgProps = {
    className?: string;
    tag?: ElementType;
    fluid?: boolean;
    thumbnail?: boolean;
    figure?: boolean;
    src: string; // | object
    alt: string; // | object
    theme?: {
      '$enable-rounded'?: boolean;
      '$enable-transitions'?: boolean;
      '$enable-shadows'?: boolean;
      '$spacer-halved'?: string;
      '$border-width'?: string;
      '$border-radius'?: string;
      '$thumbnail-padding'?: string;
      '$thumbnail-bg'?: string;
      '$thumbnail-border-width'?: string;
      '$thumbnail-border-color'?: string;
      '$thumbnail-border-radius'?: string;
      '$thumbnail-box-shadow'?: string;
      '$thumbnail-transition'?: string;
      '$figure-caption-font-size'?: string;
      '$figure-caption-color'?: string;
    };
    cssModule?: Record<string, any>;
  } & React.ImgHTMLAttributes<HTMLImageElement>;

  export const Img: StyledComponentBase<ComponentClass<ImgProps>, StyledTheme>;

  export type FigureProps = {
    children: ReactNode;
    className?: string;
  } & HTMLAttributes<HTMLElement>;

  export const Figure: StyledComponentBase<
    ComponentClass<FigureProps>,
    StyledTheme
  >;

  export type FigCaptionProps = {
    children?: ReactNode;
    className?: string;
    right?: boolean;
    theme?: Record<string, any>;
  } & HTMLAttributes<HTMLElement>;

  export const FigCaption: StyledComponentBase<
    ComponentClass<FigCaptionProps>,
    StyledTheme
  >;

  export type InputProps = {
    className?: string;
    children?: ReactNode;
    type?:
      | 'button'
      | 'checkbox'
      | 'color'
      | 'date'
      | 'datetime'
      | 'datetime-local'
      | 'email'
      | 'file'
      | 'hidden'
      | 'image'
      | 'month'
      | 'number'
      | 'password'
      | 'radio'
      | 'range'
      | 'reset'
      | 'search'
      | 'submit'
      | 'tel'
      | 'text'
      | 'textarea'
      | 'select'
      | 'time'
      | 'url'
      | 'week';
    size?: string; // Accepts: 'sm' | 'lg', but this type definition throws an error
    state?: 'success' | 'warning' | 'danger';
    ref?: React.LegacyRef;
    static?: boolean;
    addon?: boolean;
    onChange?: React.LegacyRef;
    indeterminate?: boolean;
    tag?: ElementType;
    theme?: {
      '$enable-rounded'?: boolean;
      '$enable-shadows'?: boolean;
      '$enable-hover-media-query'?: boolean;
      '$enable-transitions'?: boolean;
      '$font-weight-normal'?: string;
      '$font-size-base'?: string;
      '$font-size-lg'?: string;
      '$font-size-sm'?: string;
      '$font-size-xs'?: string;
      '$btn-padding-x'?: string;
      '$btn-padding-y'?: string;
      '$btn-line-height'?: string;
      '$btn-font-weight'?: string;
      '$btn-transition'?: string;
      '$btn-box-shadow'?: string;
      '$btn-block-spacing-y'?: string;
      '$btn-primary-color'?: string;
      '$btn-primary-bg'?: string;
      '$btn-primary-border'?: string;
      '$btn-secondary-color'?: string;
      '$btn-secondary-bg'?: string;
      '$btn-secondary-border'?: string;
      '$btn-info-color'?: string;
      '$btn-info-bg'?: string;
      '$btn-info-border'?: string;
      '$btn-success-color'?: string;
      '$btn-success-bg'?: string;
      '$btn-success-border'?: string;
      '$btn-warning-color'?: string;
      '$btn-warning-bg'?: string;
      '$btn-warning-border'?: string;
      '$btn-danger-color'?: string;
      '$btn-danger-bg'?: string;
      '$btn-danger-border'?: string;
      '$btn-link-disabled-color'?: string;
      '$btn-padding-x-lg'?: string;
      '$btn-padding-y-lg'?: string;
      '$btn-padding-x-sm'?: string;
      '$btn-padding-y-sm'?: string;
      '$btn-border-radius'?: string;
      '$btn-border-radius-lg'?: string;
      '$btn-border-radius-sm'?: string;
      '$input-btn-border-width'?: string;
      '$link-color'?: string;
      '$link-hover-color'?: string;
      '$link-hover-decoration'?: string;
      '$cursor-disabled'?: string;
    };
    cssModule?: Record<string, any>;
  } & React.InputHTMLAttributes<HTMLInputElement>;

  export const Input: StyledComponentBase<
    ComponentClass<InputProps>,
    StyledTheme
  >;

  export type InputGroupProps = {
    className?: string;
    size?: string; // Accepts: 'sm' | 'lg', but this type definition throws an error
    tag?: ElementType;
    theme?: {
      '$enable-rounded'?: boolean;
      '$enable-shadows'?: boolean;
      '$enable-hover-media-query'?: boolean;
      '$enable-transitions'?: boolean;
      '$font-size-base'?: string;
      '$font-size-lg'?: string;
      '$font-size-sm'?: string;
      '$font-size-xs'?: string;
      '$line-height-base'?: string;
      '$border-radius'?: string;
      '$border-radius-lg'?: string;
      '$border-radius-sm'?: string;
      '$input-padding-x'?: string;
      '$input-padding-y'?: string;
      '$input-bg'?: string;
      '$input-bg-disabled'?: string;
      '$input-padding-x-lg'?: string;
      '$input-padding-y-lg'?: string;
      '$input-line-height'?: string;
      '$input-height'?: string;
      '$input-box-shadow'?: string;
      '$input-btn-border-width'?: string;
      '$input-group-addon-bg'?: string;
      '$input-border-color'?: string;
      '$input-border-focus'?: string;
      '$input-box-shadow-focus'?: string;
      '$input-color'?: string;
      '$input-group-addon-border-color'?: string;
      '$input-padding-x-sm'?: string;
      '$input-padding-y-sm'?: string;
      '$input-color-placeholder'?: string;
      '$input-border-radius-lg'?: string;
      '$input-border-radius-sm'?: string;
      '$input-border-radius'?: string;
      '$input-transition'?: string;
      '$input-color-focus'?: string;
      '$input-bg-focus'?: string;
      '$cursor-disabled'?: string;
    };
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const InputGroup: StyledComponentBase<
    ComponentClass<InputGroupProps>,
    StyledTheme
  >;

  export type InputGroupAddonProps = {
    className?: string;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const InputGroupAddon: ComponentClass<InputGroupAddonProps>;

  export type InputGroupButtonProps = {
    className?: string;
    children?: ReactNode;
    groupClassName?: string;
    groupAttributes?: Record<string, any>;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLButtonElement>;

  export const InputGroupButton: ComponentClass<InputGroupButtonProps>;

  export type IssueIconProps = {
    className?: string;
  } & HTMLAttributes<HTMLElement>;

  export const IssueIcon: FunctionComponent<IssueIconProps>;

  export type JumbotronProps = {
    className?: string;
    fluid?: boolean;
    theme?: {
      '$enable-rounded'?: boolean;
      '$grid-breakpoints'?: Record<string, any>;
      '$border-radius-lg'?: string;
      '$jumbotron-padding'?: string;
      '$jumbotron-bg'?: string;
    };
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Jumbotron: StyledComponentBase<
    ComponentClass<JumbotronProps>,
    StyledTheme
  >;

  export type KbdProps = {
    className?: string;
    children: ReactNode;
    theme?: {
      '$enable-rounded'?: boolean;
      '$enable-shadows'?: boolean;
      '$font-family-monospace'?: string;
      '$font-weight-bold'?: string;
      '$border-radius-sm'?: string;
      '$code-font-size'?: string;
      '$code-padding-x'?: string;
      '$code-padding-y'?: string;
      '$kbd-color'?: string;
      '$kbd-bg'?: string;
      '$kbd-box-shadow'?: string;
      '$nested-kbd-font-weight'?: string;
    };
  } & HTMLAttributes<HTMLElement>;

  export const Kbd: StyledComponentBase<ComponentClass<KbdProps>, StyledTheme>;

  export type LabelProps = {
    className?: string;
    tag?: ElementType;
    theme?: {
      '$label-margin-bottom'?: string;
      '$btn-padding-x'?: string;
      '$btn-padding-y'?: string;
      '$btn-line-height'?: string;
      '$btn-font-weight'?: string;
      '$btn-box-shadow'?: string;
      '$btn-focus-box-shadow'?: string;
      '$btn-active-box-shadow'?: string;
      '$btn-primary-color'?: string;
      '$btn-primary-bg'?: string;
      '$btn-primary-border'?: string;
      '$btn-secondary-color'?: string;
      '$btn-secondary-bg'?: string;
      '$btn-secondary-border'?: string;
      '$btn-info-color'?: string;
      '$btn-info-bg'?: string;
      '$btn-info-border'?: string;
      '$btn-success-color'?: string;
      '$btn-success-bg'?: string;
      '$btn-success-border'?: string;
      '$btn-warning-color'?: string;
      '$btn-warning-bg'?: string;
      '$btn-warning-border'?: string;
      '$btn-danger-color'?: string;
      '$btn-danger-bg'?: string;
      '$btn-danger-border'?: string;
      '$btn-link-disabled-color'?: string;
      '$btn-padding-x-sm'?: string;
      '$btn-padding-y-sm'?: string;
      '$btn-padding-x-lg'?: string;
      '$btn-padding-y-lg'?: string;
      '$btn-block-spacing-y'?: string;
      '$btn-border-radius'?: string;
      '$btn-border-radius-lg'?: string;
      '$btn-border-radius-sm'?: string;
      '$btn-transition'?: string;
      '$link-hover-decoration'?: string;
      '$enable-rounded'?: boolean;
      '$enable-shadows'?: boolean;
      '$enable-hover-media-query'?: boolean;
      '$enable-transitions'?: boolean;
    };
    check?: boolean;
    children?: ReactNode;
    disabled?: boolean;
    for?: string;
    hidden?: boolean;
    inline?: boolean;
    size?: string;
    xs?: ColumnProps;
    sm?: ColumnProps;
    md?: ColumnProps;
    lg?: ColumnProps;
    xl?: ColumnProps;
    cssModule?: Record<string, any>;
  } & React.LabelHTMLAttributes<HTMLLabelElement>;

  export const Label: StyledComponentBase<
    FunctionComponent<LabelProps>,
    StyledTheme
  >;

  export const Legend: StyledComponentBase<'legend', StyledTheme>;

  export type LiProps = {
    className?: string;
    children?: ReactNode;
    tag?: ElementType;
    theme?: {
      '$list-inline-padding'?: string;
    };
    disabled?: boolean;
    separator?: boolean;
    active?: boolean;
    inline?: boolean;
    media?: boolean;
    'dropdown-item'?: boolean;
    'dropdown-header'?: boolean;
    'dropdown-footer'?: boolean;
    cssModule?: Record<string, any>;
  } & React.LiHTMLAttributes<HTMLLIElement>;

  export const Li: StyledComponentBase<ComponentClass<LiProps>, StyledTheme>;

  export type ListGroupProps = {
    className?: string;
    tag?: ElementType;
    flush?: boolean;
    toggleable?: string;
    theme?: {
      '$enable-rounded'?: boolean;
      '$enable-hover-media-query'?: boolean;
      '$component-active-color'?: string;
      '$component-active-bg'?: string;
      '$list-group-color'?: string;
      '$list-group-bg'?: string;
      '$list-group-border-color'?: string;
      '$list-group-border-width'?: string;
      '$list-group-border-radius'?: string;
      '$list-group-item-padding-x'?: string;
      '$list-group-item-padding-y'?: string;
      '$list-group-hover-bg'?: string;
      '$list-group-active-color'?: string;
      '$list-group-active-bg'?: string;
      '$list-group-active-border'?: string;
      '$list-group-disabled-color'?: string;
      '$list-group-disabled-bg'?: string;
      '$list-group-link-color'?: string;
      '$list-group-link-hover-color'?: string;
      '$list-group-link-active-color'?: string;
      '$list-group-link-active-bg'?: string;
      '$cursor-disabled'?: string;
      '$state-success-text'?: string;
      '$state-success-bg'?: string;
      '$state-info-text'?: string;
      '$state-info-bg'?: string;
      '$state-warning-text'?: string;
      '$state-warning-bg'?: string;
      '$state-danger-text'?: string;
      '$state-danger-bg'?: string;
    };
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const ListGroup: StyledComponentBase<
    ComponentClass<ListGroupProps>,
    StyledTheme
  >;

  export type ListGroupItemProps = {
    className?: string;
    action?: boolean;
    active?: boolean;
    disabled?: boolean;
    color?: 'success' | 'info' | 'warning' | 'danger' | '';
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const ListGroupItem: ComponentClass<ListGroupItemProps>;

  export type ListGroupItemHeadingProps = {
    className?: string;
    tag?: ElementTypey;
  } & AllHTMLAttributes<HTMLElement>;

  export const ListGroupItemHeading: ComponentClass<ListGroupItemHeadingProps>;

  export type ListGroupItemTextProps = {
    className?: string;
    tag?: ElementTypey;
  } & AllHTMLAttributes<HTMLElement>;

  export const ListGroupItemText: ComponentClass<ListGroupItemTextProps>;

  export const Map: StyledComponentBase<'map', StyledTheme>;

  export type MarkProps = {
    theme?: {
      '$mark-padding'?: string;
      '$mark-bg'?: string;
    };
  } & HTMLAttributes<HTMLElement>;

  export const Mark: StyledComponentBase<'mark', StyledTheme, MarkProps>;

  export type MediaProps = {
    className?: string;
    children?: ReactNode;
    body?: boolean;
    bottom?: boolean;
    heading?: boolean;
    left?: boolean;
    list?: boolean;
    middle?: boolean;
    object?: boolean;
    right?: boolean;
    tag?: ElementType;
    top?: boolean;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Media: StyledComponentBase<
    ComponentClass<MediaProps>,
    StyledTheme
  >;

  type FadePropTypes = TransitionProps & {
    children?: ReactNode;
    tag?: ElementType;
    baseClass?: string;
    baseClassActive?: string;
    className?: string;
    cssModule?: Record<string, any>;
  };

  export type ModalProps = {
    className?: string;
    theme?: {
      '$grid-breakpoints'?: Record<string, any>;
      '$modal-md'?: string;
      '$modal-dialog-sm-up-margin-'?: string;
      '$enable-shadows'?: boolean;
      '$modal-content-sm-up-box-shadow'?: string;
      '$modal-sm'?: string;
      '$modal-lg'?: string;
      '$zindex-modal'?: string;
      '$zindex-modal-backdrop'?: string;
      '$enable-transitions'?: boolean;
      '$transition-fade'?: string;
      '$modal-transition'?: string;
      '$modal-dialog-margin'?: string;
      '$font-family-base'?: string;
      '$font-size-base'?: string;
      '$font-weight-base'?: string;
      '$line-height-base'?: string;
      '$body-color'?: string;
      '$body-bg'?: string;
      '$$modal-content-bg'?: string;
      '$modal-content-border-width'?: string;
      '$modal-content-border-color'?: string;
      '$enable-rounded'?: boolean;
      '$border-radius-lg'?: string;
      '$modal-content-xs-box-shadow'?: string;
      '$modal-backdrop-bg'?: string;
      '$modal-backdrop-opacity'?: string;
      '$modal-header-padding'?: string;
      '$modal-header-border-width'?: string;
      '$modal-header-border-color'?: string;
      '$modal-title-line-height'?: string;
      '$modal-inner-padding'?: string;
      '$modal-footer-border-color'?: string;
      '$modal-footer-border-width'?: string;
    };
    isOpen?: boolean;
    autoFocus?: boolean;
    size?: 'sm' | 'lg' | '';
    toggle?: React.LegacyRef;
    keyboard?: boolean;
    role?: string;
    labelledBy?: string;
    backdrop?: boolean | 'static';
    onEnter?: React.LegacyRef;
    onExit?: React.LegacyRef;
    onOpened?: React.LegacyRef;
    onClosed?: React.LegacyRef;
    children?: ReactNode;
    documentClassName?: string;
    modalClassName?: string;
    backdropClassName?: string;
    contentClassName?: string;
    fade?: boolean;
    cssModule?: Record<string, any>;
    zIndex?: number | string;
    backdropTransition?: FadePropTypes;
    modalTransition?: FadePropTypes;
  } & HTMLAttributes<HTMLElement>;

  export const Modal: StyledComponentBase<
    ComponentClass<ModalProps>,
    StyledTheme
  >;

  export type ModalBodyProps = {
    className?: string;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const ModalBody: FunctionComponent<ModalBodyProps>;

  export type ModalFooterProps = {
    className?: string;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const ModalFooter: FunctionComponent<ModalFooterProps>;

  export type ModalHeaderProps = {
    className?: string;
    children?: ReactNode;
    tag?: ElementType;
    wrapTag?: ElementType;
    toggle?: React.LegacyRef;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const ModalHeader: StyledComponentBase<
    ComponentClass<ModalHeaderProps>,
    StyledTheme
  >;

  export type NavProps = {
    className?: string;
    toggleable?: string;
    inline?: boolean;
    vertical?: boolean;
    justified?: boolean;
    fill?: boolean;
    tabs?: boolean;
    pills?: boolean;
    stacked?: boolean;
    navbar?: boolean;
    tag?: ElementType;
    theme?: {
      '$border-width'?: string;
      '$font-size-lg'?: string;
      '$body-bg'?: string;
      '$component-active-bg'?: string;
      '$component-active-color'?: string;
      '$border-radius'?: string;
      '$navbar-padding-x'?: string;
      '$navbar-padding-y'?: string;
      '$nav-link-padding'?: string;
      '$nav-disabled-link-color'?: string;
      '$nav-tabs-border-color'?: string;
      '$nav-tabs-border-width'?: string;
      '$nav-tabs-border-radius'?: string;
      '$nav-tabs-link-hover-border-color'?: string;
      '$nav-tabs-active-link-hover-color'?: string;
      '$nav-tabs-active-link-hover-bg'?: string;
      '$nav-tabs-active-link-hover-border-color'?: string;
      '$nav-pills-border-radius'?: string;
      '$nav-pills-active-link-color'?: string;
      '$nav-pills-active-link-bg'?: string;
      '$cursor-disabled'?: string;
      '$zindex-navbar'?: string;
      '$zindex-navbar-fixed'?: string;
      '$zindex-navbar-sticky'?: string;
      '$navbar-brand-padding-y'?: string;
      '$navbar-divider-padding-y'?: string;
      '$navbar-toggler-padding-y'?: string;
      '$navbar-toggler-padding-x'?: string;
      '$navbar-toggler-font-size'?: string;
      '$navbar-toggler-border-radius'?: string;
      '$navbar-light-active-color'?: string;
      '$navbar-light-color'?: string;
      '$navbar-light-hover-color'?: string;
      '$navbar-light-toggler-border'?: string;
      '$navbar-light-disabled-color'?: string;
      '$navbar-light-toggler-bg'?: string;
      '$navbar-inverse-active-color'?: string;
      '$navbar-inverse-color'?: string;
      '$navbar-inverse-hover-color'?: string;
      '$navbar-inverse-toggler-border'?: string;
      '$navbar-inverse-toggler-bg'?: string;
      '$navbar-inverse-disabled-color'?: string;
    };
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Nav: StyledComponentBase<ComponentClass<NavProps>, StyledTheme>;

  export type NavItemProps = {
    className?: string;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const NavItem: ComponentClass<NavItemProps>;

  export type NavLinkProps = {
    className?: string;
    ref?: React.LegacyRef;
    disabled?: boolean;
    active?: boolean;
    onClick?: React.LegacyRef;
    href?: string;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const NavLink: ComponentClass<NavLinkProps>;

  export type OlProps = {
    theme?: {
      '$list-inline-padding'?: string;
    };
  } & React.OlHTMLAttributes<HTMLOListElement>;

  export const Ol: StyledComponentBase<'ol', StyledTheme, OlProps>;

  export type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

  export const Option: FunctionComponent<OptionProps>;

  export type OutputProps = {
    className?: string;
  } & React.OutputHTMLAttributes<HTMLElement>;

  export const Output: StyledComponentBase<
    ComponentClass<OutputProps>,
    StyledTheme
  >;

  export type PProps = {
    className?: string;
    children?: ReactNode;
    color?:
      | 'white'
      | 'muted'
      | 'gray-dark'
      | 'primary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger';
    lead?: boolean;
    theme?: {
      '$enable-rounded'?: boolean;
      '$enable-hover-media-query'?: boolean;
      '$grid-breakpoints'?: Record<string, any>;
      '$font-size-h1'?: string;
      '$font-size-h2'?: string;
      '$font-size-h3'?: string;
      '$font-size-h4'?: string;
      '$font-size-h5'?: string;
      '$font-size-h6'?: string;
      '$headings-margin-bottom'?: string;
      '$headings-font-family'?: string;
      '$headings-font-weight'?: string;
      '$headings-line-height'?: string;
      '$headings-color'?: string;
      '$display1-size'?: string;
      '$display2-size'?: string;
      '$display3-size'?: string;
      '$display4-size'?: string;
      '$display1-weight'?: string;
      '$display2-weight'?: string;
      '$display3-weight'?: string;
      '$display4-weight'?: string;
      '$display-line-height'?: string;
      '$lead-font-size'?: string;
      '$lead-font-weight'?: string;
    };
    cssModule?: Record<string, any>;
  } & HTMLAttributes<HTMLParagraphElement>;

  export const P: StyledComponentBase<ComponentClass<PProps>, StyledTheme>;

  export type PaginationProps = {
    className?: string;
    children?: ReactNode;
    size?: string; // Accepts: 'sm' | 'lg', but this type definition throws an error
    tag?: ElementType;
    theme?: {
      '$enable-rounded'?: boolean;
      '$enable-hover-media-query'?: boolean;
      '$pagination-padding-x'?: string;
      '$pagination-padding-y'?: string;
      '$pagination-padding-x-sm'?: string;
      '$pagination-padding-y-sm'?: string;
      '$pagination-padding-x-lg'?: string;
      '$pagination-padding-y-lg'?: string;
      '$pagination-line-height'?: string;
      '$pagination-color'?: string;
      '$pagination-bg'?: string;
      '$pagination-border-width'?: string;
      '$pagination-border-color'?: string;
      '$pagination-hover-color'?: string;
      '$pagination-hover-bg'?: string;
      '$pagination-hover-border'?: string;
      '$pagination-active-color'?: string;
      '$pagination-active-bg'?: string;
      '$pagination-active-border'?: string;
      '$pagination-disabled-color'?: string;
      '$pagination-disabled-bg'?: string;
      '$pagination-disabled-border'?: string;
    };
    color?:
      | 'white'
      | 'muted'
      | 'gray-dark'
      | 'primary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger';
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Pagination: StyledComponentBase<
    ComponentClass<PaginationProps>,
    StyledTheme
  >;

  export type PaginationItemProps = {
    active?: boolean;
    className?: string;
    children?: ReactNode;
    cssModule?: Record<string, any>;
    disabled?: boolean;
    tag?: ElementType;
  } & AllHTMLAttributes<HTMLElement>;

  export const PaginationItem: ComponentClass<PaginationItemProps>;

  export type PaginationLinkProps = {
    'aria-label'?: string;
    className?: string;
    children?: ReactNode;
    cssModule?: Record<string, any>;
    next?: boolean;
    previous?: boolean;
    tag?: ElementType;
  } & AllHTMLAttributes<HTMLElement>;

  export const PaginationLink: ComponentClass<PaginationLinkProps>;

  export type PreProps = {
    theme?: {
      '$code-font-size'?: string;
      '$pre-color'?: string;
      '$pre-scrollable-max-height'?: string;
      '$font-family-monospace'?: string;
    };
  } & HTMLAttributes<HTMLPreElement>;

  export const Pre: StyledComponentBase<'pre', StyledTheme, PreProps>;

  export type ProgressProps = {
    className?: string;
    children?: ReactNode;
    theme?: {
      '$enable-rounded'?: boolean;
      '$enable-hover-media-query'?: boolean;
      '$progress-height'?: string;
      '$progress-font-size'?: string;
      '$progress-bg'?: string;
      '$progress-border-radius'?: string;
      '$progress-box-shadow'?: string;
      '$progress-bar-color'?: string;
      '$progress-bar-bg'?: string;
      '$progress-bar-animation-timing'?: string;
    };
  } & React.ProgressHTMLAttributes<HTMLProgressElement>;

  export const Progress: StyledComponentBase<
    ComponentClass<ProgressProps>,
    StyledTheme
  >;

  export type ProgressBarProps = {
    className?: string;
    children?: ReactNode;
    valueMin?: number;
    valueNow?: number;
    valueMax?: number;
    height?: string;
    striped?: boolean;
    animated?: boolean;
    color?: 'success' | 'info' | 'warning' | 'danger' | '';
    cssModule?: Record<string, any>;
  } & HTMLAttributes<HTMLElement>;

  export const ProgressBar: ComponentClass<ProgressBarProps>;

  export type RowProps = {
    className?: string;
    tag?: ElementType;
    noGutters?: boolean;
    theme?: {
      '$grid-gutter-width'?: string;
      '$enable-grid-classes'?: boolean;
    };
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Row: StyledComponentBase<ComponentClass<RowProps>, StyledTheme>;

  export const Samp: StyledComponentBase<'samp', StyledTheme>;

  export type SectionProps = HTMLAttributes<HTMLElement>;

  export const Section: FunctionComponent<SectionProps>;

  export type SelectProps = {
    className?: string;
    children?: ReactNode;
  } & React.SelectHTMLAttributes<HTMLSelectElement>;

  export const Select: StyledComponentBase<
    ComponentClass<SelectProps>,
    StyledTheme
  >;

  export type SmallProps = {
    className?: string;
    tag?: ElementType;
    children?: ReactNode;
    theme?: {
      '$small-font-size'?: string;
    };
    color?:
      | 'white'
      | 'muted'
      | 'gray-dark'
      | 'primary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger';
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Small: StyledComponentBase<
    ComponentClass<SmallProps>,
    StyledTheme
  >;

  export type StrongProps = {
    className?: string;
    children?: ReactNode;
    color?:
      | 'white'
      | 'muted'
      | 'gray-dark'
      | 'primary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger';
    cssModule?: Record<string, any>;
  } & HTMLAttributes<HTMLElement>;

  export const Strong: StyledComponentBase<
    ComponentClass<StrongProps>,
    StyledTheme
  >;

  export const Sub: StyledComponentBase<'sub', StyledTheme>;

  export const Summary: StyledComponentBase<'summary', StyledTheme>;

  export const Sup: StyledComponentBase<'sup', StyledTheme>;

  export type TableProps = {
    className?: string;
    tag?: ElementType;
    size?: string;
    bordered?: boolean;
    striped?: boolean;
    inverse?: boolean;
    hover?: boolean;
    reflow?: boolean;
    responsive?: boolean;
    responsiveTag?: ElementType;
    theme?: {
      $spacer?: string;
      '$body-bg'?: string;
      '$table-cell-padding'?: string;
      '$table-sm-cell-padding'?: string;
      '$table-bg'?: string;
      '$table-inverse-bg'?: string;
      '$table-inverse-bg-accent'?: string;
      '$table-inverse-bg-hover'?: string;
      '$table-inverse-color'?: string;
      '$table-inverse-border'?: string;
      '$table-bg-accent'?: string;
      '$table-bg-hover'?: string;
      '$table-bg-active'?: string;
      '$table-head-bg'?: string;
      '$table-head-color'?: string;
      '$table-border-width'?: string;
      '$table-border-color'?: string;
      '$state-success-bg'?: string;
      '$state-info-bg'?: string;
      '$state-warning-bg'?: string;
      '$state-danger-bg'?: string;
    };
    cssModule?: Record<string, any>;
  } & React.TableHTMLAttributes<HTMLTableElement>;

  export const Table: StyledComponentBase<
    ComponentClass<TableProps>,
    StyledTheme
  >;

  export const Tbody: StyledComponentBase<'tbody', StyledTheme>;

  export type TdProps = {
    className?: string;
    children?: ReactNode;
    color?: 'active' | 'success' | 'info' | 'warning' | 'danger' | '';
  } & React.TdHTMLAttributes<HTMLTableDataCellElement>;

  export const Td: ComponentClass<TdProps>;

  export const Tfoot: StyledComponentBase<'tfoot', StyledTheme>;

  export type ThProps = {
    className?: string;
    children?: ReactNode;
    color?: 'active' | 'success' | 'info' | 'warning' | 'danger' | '';
  } & React.ThHTMLAttributes<HTMLTableHeaderCellElement>;

  export const Th: ComponentClass<ThProps>;

  export type TheadProps = {
    className?: string;
    children?: ReactNode;
    inverse?: boolean;
    defaultBg?: boolean;
  } & HTMLAttributes<HTMLTableSectionElement>;

  export const Thead: ComponentClass<TheadProps>;

  export type TrProps = {
    className?: string;
    children?: ReactNode;
    color?: 'active' | 'success' | 'info' | 'warning' | 'danger' | '';
  } & HTMLAttributes<HTMLTableRowElement>;

  export const Tr: ComponentClass<TrProps>;

  export type BadgeProps = {
    className?: string;
    color?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
    pill?: boolean;
    tag?: ElementType;
    theme?: {
      '$badge-default-bg'?: string;
      '$badge-primary-bg'?: string;
      '$badge-success-bg'?: string;
      '$badge-info-bg'?: string;
      '$badge-warning-bg'?: string;
      '$badge-danger-bg'?: string;
      '$badge-color'?: string;
      '$badge-link-hover-color'?: string;
      '$badge-font-size'?: string;
      '$badge-font-weight'?: string;
      '$badge-padding-x'?: string;
      '$badge-padding-y'?: string;
      '$badge-pill-padding-x'?: string;
      '$badge-pill-border-radius'?: string;
      '$link-hover-decoration'?: string;
      '$enable-rounded'?: boolean;
      '$enable-hover-media-query'?: boolean;
    };
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Badge: StyledComponentBase<
    ComponentClass<BadgeProps>,
    StyledTheme
  >;

  export const Textarea: StyledComponentBase<'textarea', StyledTheme>;

  export type TooltipProps = {
    className?: string;
    placement?:
      | 'top'
      | 'bottom'
      | 'left'
      | 'right'
      | 'top left'
      | 'top center'
      | 'top right'
      | 'right top'
      | 'right middle'
      | 'right bottom'
      | 'bottom right'
      | 'bottom center'
      | 'bottom left'
      | 'left top'
      | 'left middle'
      | 'left bottom';
    target: string | Record<string, any>;
    isOpen?: boolean;
    disabled?: boolean;
    tether?: Record<string, any>;
    tetherRef?: React.LegacyRef;
    toggle?: React.LegacyRef;
    autohide?: boolean;
    delay?: { show?: number; hide?: number } | number;
    theme?: {
      '$zindex-tooltip'?: string;
      '$tooltip-max-width'?: string;
      '$tooltip-color'?: string;
      '$tooltip-bg'?: string;
      '$tooltip-opacity'?: string;
      '$tooltip-padding-y'?: string;
      '$tooltip-padding-x'?: string;
      '$tooltip-margin'?: string;
      '$tooltip-arrow-width'?: string;
      '$tooltip-arrow-color'?: string;
      '$component-active-color'?: string;
    };
    cssModule?: Record<string, any>;
  } & HTMLAttributes<HTMLDivElement>;

  export const Tooltip: StyledComponentBase<
    ComponentClass<TooltipProps>,
    StyledTheme
  >;

  export type UlProps = {
    className?: string;
    tag?: ElementType;
    children: ReactNode;
    role?: string;
    inline?: boolean;
    unstyled?: boolean;
    toggleable?: string;
    theme?: {
      '$enable-rounded'?: boolean;
      '$enable-hover-media-query'?: boolean;
      '$grid-breakpoints'?: Record<string, any>;
      '$border-width'?: string;
      '$font-size-lg'?: string;
      '$body-bg'?: string;
      '$component-active-bg'?: string;
      '$component-active-color'?: string;
      '$border-radius'?: string;
      '$navbar-padding-x'?: string;
      '$navbar-padding-y'?: string;
      '$nav-link-padding'?: string;
      '$nav-disabled-link-color'?: string;
      '$nav-tabs-border-color'?: string;
      '$nav-tabs-border-width'?: string;
      '$nav-tabs-border-radius'?: string;
      '$nav-tabs-link-hover-border-color'?: string;
      '$nav-tabs-active-link-hover-color'?: string;
      '$nav-tabs-active-link-hover-bg'?: string;
      '$nav-tabs-active-link-hover-border-color'?: string;
      '$nav-pills-border-radius'?: string;
      '$nav-pills-active-link-color'?: string;
      '$nav-pills-active-link-bg'?: string;
      '$cursor-disabled'?: string;
      '$zindex-navbar'?: string;
      '$zindex-navbar-fixed'?: string;
      '$zindex-navbar-sticky'?: string;
      '$navbar-brand-padding-y'?: string;
      '$navbar-divider-padding-y'?: string;
      '$navbar-toggler-padding-y'?: string;
      '$navbar-toggler-padding-x'?: string;
      '$navbar-toggler-font-size'?: string;
      '$navbar-toggler-border-radius'?: string;
      '$navbar-light-active-color'?: string;
      '$navbar-light-color'?: string;
      '$navbar-light-hover-color'?: string;
      '$navbar-light-toggler-border'?: string;
      '$navbar-light-disabled-color'?: string;
      '$navbar-light-toggler-bg'?: string;
      '$navbar-inverse-active-color'?: string;
      '$navbar-inverse-color'?: string;
      '$navbar-inverse-hover-color'?: string;
      '$navbar-inverse-toggler-border'?: string;
      '$navbar-inverse-toggler-bg'?: string;
      '$navbar-inverse-disabled-color'?: string;
    };
  } & HTMLAttributes<HTMLUListElement>;

  export const Ul: StyledComponentBase<ComponentClass<UlProps>, StyledTheme>;

  // 2. Molecules

  export type CardProps = {
    className?: string;
    tag?: ElementType;
    theme?: {
      '$brand-primary'?: string;
      '$brand-success'?: string;
      '$brand-info'?: string;
      '$brand-warning'?: string;
      '$brand-danger'?: string;
      '$brand-inverse'?: string;
      '$card-spacer-x'?: string;
      '$card-spacer-y'?: string;
      '$card-border-width'?: string;
      '$card-border-radius'?: string;
      '$card-border-color'?: string;
      '$card-border-radius-inner'?: string;
      '$card-cap-bg'?: string;
      '$card-bg'?: string;
      '$card-link-hover-color'?: string;
      '$card-img-overlay-padding'?: string;
      '$card-margin-y-halved'?: string;
      '$card-margin-x-halved'?: string;
      '$card-columns-count-md'?: string;
      '$card-columns-gap-md'?: string;
      '$card-columns-margin-md'?: string;
      '$card-columns-count-lg'?: string;
      '$card-columns-gap-lg'?: string;
      '$card-columns-margin-lg'?: string;
      '$card-columns-count-xl'?: string;
      '$card-columns-gap-xl'?: string;
      '$card-columns-margin-xl'?: string;
      '$card-columns-count-xxl'?: string;
      '$card-columns-gap-xxl'?: string;
      '$card-columns-margin-xxl'?: string;
      '$card-deck-margin'?: string;
      '$btn-primary-bg'?: string;
      '$btn-secondary-border'?: string;
      '$btn-info-bg'?: string;
      '$btn-success-bg'?: string;
      '$btn-warning-bg'?: string;
      '$btn-danger-bg'?: string;
      '$link-color'?: string;
      '$link-decoration'?: string;
      '$link-hover-color'?: string;
      '$link-hover-decoration'?: string;
      '$enable-rounded'?: boolean;
      '$enable-hover-media-query'?: boolean;
    };
    color?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'white';
    inverse?: boolean;
    block?: boolean;
    outline?: boolean;
    width?: string;
    hover?: boolean;
    focus?: boolean;
    backgroundColor?: string;
    borderColor?: string;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Card: StyledComponentBase<
    ComponentClass<CardProps>,
    StyledTheme
  >;

  export type CardBlockProps = {
    className?: string;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const CardBlock: ComponentClass<CardBlockProps>;

  export type CardBlockquoteProps = {
    className?: string;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const CardBlockquote: ComponentClass<CardBlockquoteProps>;

  export type CardColumnsProps = {
    className?: string;
    tag?: ElementType;
    theme?: {
      '$brand-primary'?: string;
      '$brand-success'?: string;
      '$brand-info'?: string;
      '$brand-warning'?: string;
      '$brand-danger'?: string;
      '$brand-inverse'?: string;
      '$card-spacer-x'?: string;
      '$card-spacer-y'?: string;
      '$card-border-width'?: string;
      '$card-border-radius'?: string;
      '$card-border-color'?: string;
      '$card-border-radius-inner'?: string;
      '$card-cap-bg'?: string;
      '$card-bg'?: string;
      '$card-link-hover-color'?: string;
      '$card-img-overlay-padding'?: string;
      '$card-columns-count-md'?: string;
      '$card-columns-gap-md'?: string;
      '$card-columns-margin-md'?: string;
      '$card-columns-count-lg'?: string;
      '$card-columns-gap-lg'?: string;
      '$card-columns-margin-lg'?: string;
      '$card-columns-count-xl'?: string;
      '$card-columns-gap-xl'?: string;
      '$card-columns-margin-xl'?: string;
      '$card-columns-count-xxl'?: string;
      '$card-columns-gap-xxl'?: string;
      '$card-columns-margin-xxl'?: string;
      '$card-deck-margin'?: string;
      '$btn-primary-bg'?: string;
      '$btn-secondary-border'?: string;
      '$btn-info-bg'?: string;
      '$btn-success-bg'?: string;
      '$btn-warning-bg'?: string;
      '$btn-danger-bg'?: string;
      '$link-color'?: string;
      '$link-decoration'?: string;
      '$link-hover-color'?: string;
      '$link-hover-decoration'?: string;
      '$enable-rounded'?: boolean;
      '$enable-hover-media-query'?: boolean;
    };
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const CardColumns: StyledComponentBase<
    ComponentClass<CardColumnsProps>,
    StyledTheme
  >;

  export type CardDeckProps = {
    className?: string;
    tag?: ElementType;
    theme?: {
      '$brand-primary'?: string;
      '$brand-success'?: string;
      '$brand-info'?: string;
      '$brand-warning'?: string;
      '$brand-danger'?: string;
      '$brand-inverse'?: string;
      '$card-spacer-x'?: string;
      '$card-spacer-y'?: string;
      '$card-border-width'?: string;
      '$card-border-radius'?: string;
      '$card-border-color'?: string;
      '$card-border-radius-inner'?: string;
      '$card-cap-bg'?: string;
      '$card-bg'?: string;
      '$card-link-hover-color'?: string;
      '$card-img-overlay-padding'?: string;
      '$card-columns-count-md'?: string;
      '$card-columns-gap-md'?: string;
      '$card-columns-margin-md'?: string;
      '$card-columns-count-lg'?: string;
      '$card-columns-gap-lg'?: string;
      '$card-columns-margin-lg'?: string;
      '$card-columns-count-xl'?: string;
      '$card-columns-gap-xl'?: string;
      '$card-columns-margin-xl'?: string;
      '$card-columns-count-xxl'?: string;
      '$card-columns-gap-xxl'?: string;
      '$card-columns-margin-xxl'?: string;
      '$card-deck-margin'?: string;
      '$btn-primary-bg'?: string;
      '$btn-secondary-border'?: string;
      '$btn-info-bg'?: string;
      '$btn-success-bg'?: string;
      '$btn-warning-bg'?: string;
      '$btn-danger-bg'?: string;
      '$link-color'?: string;
      '$link-decoration'?: string;
      '$link-hover-color'?: string;
      '$link-hover-decoration'?: string;
      '$enable-rounded'?: boolean;
      '$enable-hover-media-query'?: boolean;
    };
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const CardDeck: StyledComponentBase<
    ComponentClass<CardDeckProps>,
    StyledTheme
  >;

  export type CardFooterProps = {
    className?: string;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const CardFooter: ComponentClass<CardFooterProps>;

  export type CardGroupProps = {
    className?: string;
    tag?: ElementType;
    theme?: {
      '$brand-primary'?: string;
      '$brand-success'?: string;
      '$brand-info'?: string;
      '$brand-warning'?: string;
      '$brand-danger'?: string;
      '$brand-inverse'?: string;
      '$card-spacer-x'?: string;
      '$card-spacer-y'?: string;
      '$card-border-width'?: string;
      '$card-border-radius'?: string;
      '$card-border-color'?: string;
      '$card-border-radius-inner'?: string;
      '$card-cap-bg'?: string;
      '$card-bg'?: string;
      '$card-link-hover-color'?: string;
      '$card-img-overlay-padding'?: string;
      '$card-columns-count-md'?: string;
      '$card-columns-gap-md'?: string;
      '$card-columns-margin-md'?: string;
      '$card-columns-count-lg'?: string;
      '$card-columns-gap-lg'?: string;
      '$card-columns-margin-lg'?: string;
      '$card-columns-count-xl'?: string;
      '$card-columns-gap-xl'?: string;
      '$card-columns-margin-xl'?: string;
      '$card-columns-count-xxl'?: string;
      '$card-columns-gap-xxl'?: string;
      '$card-columns-margin-xxl'?: string;
      '$card-deck-margin'?: string;
      '$btn-primary-bg'?: string;
      '$btn-secondary-border'?: string;
      '$btn-info-bg'?: string;
      '$btn-success-bg'?: string;
      '$btn-warning-bg'?: string;
      '$btn-danger-bg'?: string;
      '$link-color'?: string;
      '$link-decoration'?: string;
      '$link-hover-color'?: string;
      '$link-hover-decoration'?: string;
      '$enable-rounded'?: boolean;
      '$enable-hover-media-query'?: boolean;
    };
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const CardGroup: StyledComponentBase<
    ComponentClass<CardGroupProps>,
    StyledTheme
  >;

  export type CardHeaderProps = {
    className?: string;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const CardHeader: ComponentClass<CardHeaderProps>;

  export type CardImgProps = {
    className?: string;
    tag?: ElementType;
    top?: boolean;
    bottom?: boolean;
    cssModule?: Record<string, any>;
  } & React.ImgHTMLAttributes<HTMLImageElement>;

  export const CardImg: ComponentClass<CardImgProps>;

  export type CardImgOverlayProps = {
    className?: string;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const CardImgOverlay: ComponentClass<CardImgOverlayProps>;

  export type CardLinkProps = {
    className?: string;
    tag?: ElementType;
    ref?: React.LegacyRef;
    cssModule?: Record<string, any>;
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>;

  export const CardLink: ComponentClass<CardLinkProps>;

  export type CardSubtitleProps = {
    className?: string;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const CardSubtitle: ComponentClass<CardSubtitleProps>;

  export type CardTextProps = {
    className?: string;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const CardText: ComponentClass<CardTextProps>;

  export type CardTitleProps = {
    className?: string;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const CardTitle: ComponentClass<CardTitleProps>;

  export type AccordionProps = {
    className?: string;
    children?: ReactNode;
    tag?: ElementType;
    delay?: { show?: number; hide?: number } | number;
    heading?: ReactNode | string;
    name?: string;
  } & AllHTMLAttributes<HTMLElement>;

  export const Accordion: ComponentClass<AccordionProps>;

  export type AccordionGroupProps = {
    activeAccordionName?: string | number | bool;
    onChange?: React.LegacyRef;
    'heading-component'?: boolean;
  } & HTMLAttributes<HTMLElement>;

  export const AccordionGroup: ComponentClass<AccordionGroupProps>;

  export type DropdownProps = {
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    dropup?: boolean;
    group?: boolean;
    isOpen?: boolean;
    size?: 'sm' | 'lg' | '';
    tether?: Record<string, any> | bool;
    toggle?: React.LegacyRef;
    theme?: {
      '$enable-rounded'?: boolean;
      '$enable-shadows'?: boolean;
      '$enable-gradients'?: boolean;
      '$enable-hover-media-query'?: boolean;
      '$spacer-y'?: string;
      '$body-color'?: string;
      '$border-width'?: string;
      '$font-size-sm'?: string;
      '$font-weight-normal'?: string;
      '$font-size-base'?: string;
      '$font-size-lg'?: string;
      '$zindex-dropdown-backdrop'?: string;
      '$zindex-dropdown'?: string;
      '$component-active-color'?: string;
      '$component-active-bg'?: string;
      '$caret-width'?: string;
      '$line-height-lg'?: string;
      '$border-radius-lg'?: string;
      '$border-radius-sm'?: string;
      '$input-padding-y-lg'?: string;
      '$dropdown-min-width'?: string;
      '$dropdown-padding-y'?: string;
      '$dropdown-margin-top'?: string;
      '$dropdown-bg'?: string;
      '$dropdown-border-color'?: string;
      '$dropdown-border-width'?: string;
      '$dropdown-divider-bg'?: string;
      '$dropdown-box-shadow'?: string;
      '$dropdown-link-color'?: string;
      '$dropdown-link-hover-color'?: string;
      '$dropdown-link-hover-bg'?: string;
      '$dropdown-link-active-color'?: string;
      '$dropdown-link-active-bg'?: string;
      '$dropdown-link-disabled-color'?: string;
      '$dropdown-item-padding-x'?: string;
      '$dropdown-header-color'?: string;
      '$input-btn-border-width'?: string;
      '$cursor-disabled'?: string;
      '$btn-padding-x'?: string;
      '$btn-active-box-shadow'?: string;
      '$btn-padding-x-lg'?: string;
      '$btn-padding-y-lg'?: string;
      '$btn-border-radius-lg'?: string;
      '$btn-border-radius-sm'?: string;
      '$btn-padding-x-sm'?: string;
      '$btn-padding-y-sm'?: string;
      '$input-height-lg'?: string;
    };
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Dropdown: StyledComponentBase<
    ComponentClass<DropdownProps>,
    StyledTheme
  >;

  export type DropdownItemProps = {
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    divider?: boolean;
    header?: boolean;
    onClick?: React.LegacyRef;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const DropdownItem: ComponentClass<DropdownItemProps>;

  export type DropdownMenuProps = {
    children: ReactNode;
    className?: string;
    cssModule?: Record<string, any>;
    right?: boolean;
    tag?: ElementType;
  } & AllHTMLAttributes<HTMLElement>;

  export const DropdownMenu: FunctionComponent<DropdownMenuProps>;

  export type DropdownToggleProps = {
    className?: string;
    children?: ReactNode;
    'aria-haspopup'?: boolean;
    color?:
      | 'white'
      | 'muted'
      | 'gray-dark'
      | 'primary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger'
      | 'link';
    caret?: boolean;
    'data-toggle'?: string;
    disabled?: boolean;
    onClick?: React.LegacyRef;
    nav?: boolean;
    split?: boolean;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const DropdownToggle: ComponentClass<DropdownToggleProps>;

  export type FormProps = {
    className?: string;
    theme?: {
      '$brand-primary'?: string;
      '$brand-success'?: string;
      '$brand-info'?: string;
      '$brand-warning'?: string;
      '$brand-danger'?: string;
      '$gray-dark'?: string;
      $gray?: string;
      '$gray-light'?: string;
      '$gray-lighter'?: string;
      '$gray-lightest'?: string;
      '$border-width'?: string;
      $spacer?: string;
      '$spacer-y'?: string;
      '$grid-breakpoints'?: {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
      };
      '$grid-gutter-width'?: string;
      '$font-size-base'?: string;
      '$font-size-lg'?: string;
      '$font-size-sm'?: string;
      '$font-size-xs'?: string;
      '$text-muted'?: string;
      '$line-height-base'?: string;
      '$line-height-lg'?: string;
      '$line-height-sm'?: string;
      '$border-radius'?: string;
      '$border-radius-lg'?: string;
      '$border-radius-sm'?: string;
      '$input-padding-x'?: string;
      '$input-padding-y'?: string;
      '$input-line-height'?: string;
      '$input-bg'?: string;
      '$input-bg-disabled'?: string;
      '$input-color'?: string;
      '$input-border-color'?: string;
      '$input-btn-border-width'?: string;
      '$input-box-shadow'?: string;
      '$input-border-radius'?: string;
      '$input-border-radius-lg'?: string;
      '$input-border-radius-sm'?: string;
      '$input-bg-focus'?: string;
      '$input-border-focus'?: string;
      '$input-box-shadow-focus'?: string;
      '$input-color-focus'?: string;
      '$input-color-placeholder'?: string;
      '$input-padding-x-sm'?: string;
      '$input-padding-y-sm'?: string;
      '$input-padding-x-lg'?: string;
      '$input-padding-y-lg'?: string;
      '$input-height'?: string;
      '$input-height-sm'?: string;
      '$input-height-lg'?: string;
      '$input-transition'?: string;
      '$form-text-margin-top'?: string;
      '$form-feedback-margin-top'?: string;
      '$form-check-margin-bottom'?: string;
      '$form-check-input-gutter'?: string;
      '$form-check-input-margin-y'?: string;
      '$form-check-input-margin-x'?: string;
      '$form-check-inline-margin-x'?: string;
      '$form-group-margin-bottom'?: string;
      '$input-group-addon-bg'?: string;
      '$input-group-addon-border-color'?: string;
      '$cursor-disabled'?: string;
      '$custom-control-gutter'?: string;
      '$custom-control-spacer-x'?: string;
      '$custom-control-spacer-y'?: string;
      '$custom-control-indicator-size'?: string;
      '$custom-control-indicator-bg'?: string;
      '$custom-control-indicator-bg-size'?: string;
      '$custom-control-indicator-box-shadow'?: string;
      '$custom-control-disabled-cursor'?: string;
      '$custom-control-disabled-indicator-bg'?: string;
      '$custom-control-disabled-description-color'?: string;
      '$custom-control-checked-indicator-color'?: string;
      '$custom-control-checked-indicator-bg'?: string;
      '$custom-control-checked-indicator-box-shadow'?: string;
      '$custom-control-focus-indicator-box-shadow'?: string;
      '$custom-control-active-indicator-color'?: string;
      '$custom-control-active-indicator-bg'?: string;
      '$custom-control-active-indicator-box-shadow'?: string;
      '$custom-checkbox-radius'?: string;
      '$custom-checkbox-checked-icon'?: string;
      '$custom-checkbox-indeterminate-bg'?: string;
      '$custom-checkbox-indeterminate-indicator-color'?: string;
      '$custom-checkbox-indeterminate-icon'?: string;
      '$custom-checkbox-indeterminate-box-shadow'?: string;
      '$custom-radio-radius'?: string;
      '$custom-radio-checked-icon'?: string;
      '$custom-select-padding-x'?: string;
      '$custom-select-padding-y'?: string;
      '$custom-select-indicator-padding'?: string;
      '$custom-select-line-height'?: string;
      '$custom-select-color'?: string;
      '$custom-select-disabled-color'?: string;
      '$custom-select-bg'?: string;
      '$custom-select-disabled-bg'?: string;
      '$custom-select-bg-size'?: string;
      '$custom-select-indicator-color'?: string;
      '$custom-select-indicator'?: string;
      '$custom-select-border-width'?: string;
      '$custom-select-border-color'?: string;
      '$custom-select-border-radius'?: string;
      '$custom-select-focus-border-color'?: string;
      '$custom-select-focus-box-shadow'?: string;
      '$custom-select-sm-font-size'?: string;
      '$custom-file-height'?: string;
      '$custom-file-width'?: string;
      '$custom-file-focus-box-shadow'?: string;
      '$custom-file-padding-x'?: string;
      '$custom-file-padding-y'?: string;
      '$custom-file-line-height'?: string;
      '$custom-file-color'?: string;
      '$custom-file-bg'?: string;
      '$custom-file-border-width'?: string;
      '$custom-file-border-color'?: string;
      '$custom-file-border-radius'?: string;
      '$custom-file-box-shadow'?: string;
      '$custom-file-button-color'?: string;
      '$custom-file-button-bg'?: string;
      '$custom-file-text'?: Record<string, any>;
      '$form-icon-success-color'?: string;
      '$form-icon-success'?: string;
      '$form-icon-warning-color'?: string;
      '$form-icon-warning'?: string;
      '$form-icon-danger-color'?: string;
      '$form-icon-danger'?: string;
    };
    inline?: boolean;
    ref?: React.LegacyRef;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & React.FormHTMLAttributes<HTMLFormElement>;

  export const Form: StyledComponentBase<
    ComponentClass<FormProps>,
    StyledTheme
  >;

  export type FormCustomProps = {
    className?: string;
    children?: ReactNode;
    radio?: {
      id?: string;
      name?: string;
    };
    defaultChecked?: boolean;
    checked?: boolean;
    cssModule?: Record<string, any>;
  } & React.InputHTMLAttributes<HTMLInputElement>;

  export const FormCustom: ComponentClass<FormCustomProps>;

  export type FormFeedbackProps = {
    className?: string;
    children?: ReactNode;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const FormFeedback: ComponentClass<FormFeedbackProps>;

  export type FormGroupProps = {
    className?: string;
    children?: ReactNode;
    check?: boolean;
    color?: 'success' | 'warning' | 'danger' | '';
    disabled?: boolean;
    ref?: React.LegacyRef;
    inline?: boolean;
    row?: boolean;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const FormGroup: ComponentClass<FormGroupProps>;

  export type FormTextProps = {
    className?: string;
    children?: ReactNode;
    color?: 'success' | 'warning' | 'danger' | 'muted' | '';
    inline?: boolean;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const FormText: ComponentClass<FormTextProps>;

  export type NavbarProps = {
    className?: string;
    tag?: ElementType;
    light?: boolean;
    inverse?: boolean;
    full?: boolean;
    fixed?: string;
    sticky?: string;
    color?:
      | 'primary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger'
      | 'inverse'
      | 'faded';
    role?: string;
    toggleable?: boolean | string;
    theme?: {
      '$enable-rounded'?: boolean;
      '$enable-hover-media-query'?: boolean;
      '$grid-breakpoints'?: Record<string, any>;
      '$border-width'?: string;
      '$font-size-lg'?: string;
      '$body-bg'?: string;
      '$component-active-bg'?: string;
      '$component-active-color'?: string;
      '$border-radius'?: string;
      '$navbar-padding-x'?: string;
      '$navbar-padding-y'?: string;
      '$nav-link-padding'?: string;
      '$nav-disabled-link-color'?: string;
      '$nav-tabs-border-color'?: string;
      '$nav-tabs-border-width'?: string;
      '$nav-tabs-border-radius'?: string;
      '$nav-tabs-link-hover-border-color'?: string;
      '$nav-tabs-active-link-hover-color'?: string;
      '$nav-tabs-active-link-hover-bg'?: string;
      '$nav-tabs-active-link-hover-border-color'?: string;
      '$nav-pills-border-radius'?: string;
      '$nav-pills-active-link-color'?: string;
      '$nav-pills-active-link-bg'?: string;
      '$cursor-disabled'?: string;
      '$zindex-navbar'?: string;
      '$zindex-navbar-fixed'?: string;
      '$zindex-navbar-sticky'?: string;
      '$navbar-brand-padding-y'?: string;
      '$navbar-divider-padding-y'?: string;
      '$navbar-toggler-padding-y'?: string;
      '$navbar-toggler-padding-x'?: string;
      '$navbar-toggler-font-size'?: string;
      '$navbar-toggler-border-radius'?: string;
      '$navbar-light-active-color'?: string;
      '$navbar-light-color'?: string;
      '$navbar-light-hover-color'?: string;
      '$navbar-light-toggler-border'?: string;
      '$navbar-light-disabled-color'?: string;
      '$navbar-light-toggler-bg'?: string;
      '$navbar-inverse-active-color'?: string;
      '$navbar-inverse-color'?: string;
      '$navbar-inverse-hover-color'?: string;
      '$navbar-inverse-toggler-border'?: string;
      '$navbar-inverse-toggler-bg'?: string;
      '$navbar-inverse-disabled-color'?: string;
    };
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const Navbar: StyledComponentBase<
    ComponentClass<NavbarProps>,
    StyledTheme
  >;

  export type NavDropdownProps = {
    className?: string;
    children?: ReactNode;
    toggle: React.LegacyRef;
    isOpen: boolean;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const NavDropdown: FunctionComponent<NavDropdownProps>;

  export type NavbarBrandProps = {
    className?: string;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const NavbarBrand: FunctionComponent<NavbarBrandProps>;

  export type NavbarTogglerProps = {
    className?: string;
    children?: ReactNode;
    type?: string;
    right?: boolean;
    left?: boolean;
    tag?: ElementType;
    cssModule?: Record<string, any>;
  } & AllHTMLAttributes<HTMLElement>;

  export const NavbarToggler: FunctionComponent<NavbarTogglerProps>;

  // 3. Organisms

  export type ContainerProps = {
    className?: string;
    theme?: {
      '$grid-gutter-width'?: string;
      '$container-max-widths'?: Record<string, any>;
      '$enable-grid-classes'?: boolean;
    };
    fluid?: boolean;
  } & HTMLAttributes<HTMLElement>;

  export const Container: StyledComponentBase<
    ComponentClass<ContainerProps>,
    StyledTheme
  >;
}
