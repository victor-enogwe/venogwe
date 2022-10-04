import { useTheme } from '@/contexts/Theme';
import { BootstrapProviderProps } from '@bootstrap-styled/provider';
import {
  getGlobalStyleNoBootstrapProvider,
  theme,
  UserTheme,
} from 'bootstrap-styled';
import { createGlobalStyle, ThemedStyledProps } from 'styled-components';

const GlobalStyleComponent = createGlobalStyle<
  Pick<BootstrapProviderProps, 'reset' | 'injectGlobal'>
>`
  ${(
    props: ThemedStyledProps<
      Pick<BootstrapProviderProps, 'reset' | 'injectGlobal'>,
      UserTheme
    >,
  ) => `
    ${
      props.injectGlobal
        ? getGlobalStyleNoBootstrapProvider(
            props.theme[`$font-family-base`] || theme[`$font-family-base`],
            props.theme[`$font-size-base`] || theme[`$font-size-base`],
            props.theme[`$font-weight-base`] || theme[`$font-weight-base`],
            props.theme[`$line-height-base`] || theme[`$line-height-base`],
            props.theme[`$body-color`] || theme[`$body-color`],
            props.theme[`$body-bg`] || theme[`$body-bg`],
          )
        : ``
    }
  `}
`;

export function GlobalStyle() {
  return <GlobalStyleComponent theme={useTheme()} reset injectGlobal />;
}
