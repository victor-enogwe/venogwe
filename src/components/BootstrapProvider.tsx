import { LocalState, LocalStateKeys } from '@/typings/typings';
import { DARK_THEME, LIGHT_THEME } from '@/utils/constants.client';
import {
  BootstrapProvider as Provider,
  BootstrapProviderProps,
} from '@bootstrap-styled/provider';
import get from 'lodash.get';
import { useCookies } from 'react-cookie';
import { GlobalStyle } from './GlobalStyle';

export function BootstrapProvider(
  props: BootstrapProviderProps = get(Provider, `defaultProps`),
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
