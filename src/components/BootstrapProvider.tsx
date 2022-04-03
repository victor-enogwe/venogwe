import { LocalState, LocalStateKeys } from '@/typings/typings';
import { DARK_THEME, LIGHT_THEME } from '@/utils/constants';
import {
  BootstrapProviderProps,
  defaultProps,
} from '@bootstrap-styled/provider';
import { useCookies } from 'react-cookie';
import { GlobalStyle } from './GlobalStyle';

export function BootstrapProvider(
  props: BootstrapProviderProps = defaultProps,
) {
  const [{ theme: colorScheme }] = useCookies<LocalStateKeys, LocalState>([
    `theme`,
  ]);
  const theme = colorScheme === `dark` ? DARK_THEME : LIGHT_THEME;

  return (
    <>
      <GlobalStyle
        theme={theme}
        reset={props.reset}
        injectGlobal={props.injectGlobal}
      />
      {props.children}
    </>
  );
}
