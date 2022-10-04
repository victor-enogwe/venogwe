import { useGlobalState, useGlobalStateDispatch } from '@/contexts/GlobalState';
import { Locales, VEProps } from '@/typings/typings';
import { ChangeEvent, useCallback } from 'react';

export function LanguageSwitcher({
  locales,
}: Pick<VEProps, 'locales'>): JSX.Element {
  const { colorScheme, altColorScheme, locale } = useGlobalState([
    `colorScheme`,
    `altColorScheme`,
    `locale`,
  ]);
  const setGlobalState = useGlobalStateDispatch();
  const onLocalChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) =>
      setGlobalState({
        type: `SwitchLocale`,
        payload: e.currentTarget.value as Locales,
      }),
    [setGlobalState],
  );

  return (
    <select
      className={`form-select form-select-sm bg-${colorScheme} color-${altColorScheme} position-absolute top-0 end-0 me-3 border-0 rounded-0`}
      onChange={onLocalChange}
      style={{ width: 100 }}
      defaultValue={locale}
    >
      {locales.map((lang) => (
        <option key={`lang-${lang}`}>{lang}</option>
      ))}
    </select>
  );
}
