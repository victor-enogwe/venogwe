import {
  ColorScheme,
  CombinedActions,
  PageProps,
  SwitchLocaleAction,
  ToggleColorSchemeAction,
  ToggleNavStateAction,
} from '@/typings/typings';
import { SSR } from '@/utils/constants';
import { setCookie } from '@/utils/functions';

function localeReducer(
  state: PageProps,
  action: SwitchLocaleAction,
): PageProps {
  setCookie(`locale`, action.payload);

  if (!SSR) window.location.reload();

  return { ...state, locale: action.payload };
}

function toggleColorSchemeReducer(
  state: PageProps,
  action: ToggleColorSchemeAction,
): PageProps {
  const colorScheme: ColorScheme = action.payload;
  const altColorScheme: ColorScheme = colorScheme === `dark` ? `light` : `dark`;

  setCookie(`colorScheme`, colorScheme);
  setCookie(`altColorScheme`, altColorScheme);

  return { ...state, colorScheme, altColorScheme };
}

function toggleNavStateReducer(
  state: PageProps,
  action: ToggleNavStateAction,
): PageProps {
  setCookie(`navState`, action.payload);

  return { ...state, navState: action.payload };
}

export function globalStateReducer(
  state: PageProps,
  action: CombinedActions,
): PageProps {
  switch (action.type) {
    case `SwitchLocale`:
      return localeReducer(state, action);
    case `ToggleColorScheme`:
      return toggleColorSchemeReducer(state, action);
    case `ToggleNavState`:
      return toggleNavStateReducer(state, action);
    default:
      return state;
  }
}
