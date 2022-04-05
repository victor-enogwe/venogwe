import { makeTheme } from 'bootstrap-styled';
import classNames from 'classnames';

export const DEFAULT_THEME = {
  $dark: `#030303`,
  $light: `#f8f9fa`,
  $primary: `#48CAE4`,
  $secondary: `#999`,
  $success: `#33d06c`,
  $info: `#0d6efd`,
  $warning: `#F9DC5C`,
  $danger: `#ED254E`,
  '$enable-negative-margins': true,
  '$font-family-base': `'IBM Plex Mono', monospace, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  '$grid- breakpoints': {
    xs: 0,
    sm: `576px`,
    md: `768px`,
    lg: `992px`,
    xl: `1200px`,
    xxl: `1400px`,
  },
};

export const DARK_THEME = makeTheme({
  ...DEFAULT_THEME,
  _name: `bootstrap5-dark`,
  '$body-bg': `#030303`,
  '$body-color': `#999`,
});

export const LIGHT_THEME = makeTheme({
  ...DEFAULT_THEME,
  _name: `bootstrap5-light`,
  '$body-bg': DEFAULT_THEME.$light,
  '$body-color': `#999`,
});

export const pageClasses = classNames({
  'd-flex': true,
  'flex-column': true,
  'container-fluid': true,
  'flex-md-row': true,
  'flex-fill': true,
  'my-3': true,
});
