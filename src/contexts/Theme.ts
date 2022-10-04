import { DARK_THEME, LIGHT_THEME } from '@/utils/constants.client';
import { useMemo } from 'react';
import { useGlobalState } from './GlobalState';

export function useTheme() {
  const { colorScheme } = useGlobalState([`colorScheme`]);

  const theme = useMemo(
    () => (colorScheme === `dark` ? DARK_THEME : LIGHT_THEME),
    [colorScheme],
  );

  return theme;
}
