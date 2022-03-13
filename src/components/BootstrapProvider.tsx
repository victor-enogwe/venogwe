import {
  BootstrapProviderProps,
  defaultProps,
} from '@bootstrap-styled/provider';
import { UserTheme, makeTheme } from 'bootstrap-styled';
import { useState, useEffect } from 'react';
import omitBy from 'lodash.omitby';
import { GlobalStyle } from './GlobalStyle';

export function BootstrapProvider(
  props: BootstrapProviderProps = defaultProps,
) {
  const [theme, setTheme] = useState<UserTheme>(props.theme);

  useEffect(
    () => setTheme(makeTheme(omitBy(props.theme, (key) => key[0] === `_`))),
    [props.theme],
  );

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
