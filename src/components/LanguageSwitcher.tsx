import { Locales, VEProps } from '@/typings/typings';
import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 100px;
`;

export function LanguageSwitcher({
  locale,
  locales,
  theme,
  setLocale,
}: Omit<VEProps, 'siteName'> & {
  setLocale: Dispatch<SetStateAction<Locales>>;
}): JSX.Element {
  return (
    <Select
      className={`form-select form-select-sm bg-${theme} position-absolute top-0 end-0 me-3 border-0 rounded-0`}
      onChange={({ currentTarget, target }: BaseSyntheticEvent) =>
        setLocale(currentTarget.value ?? target.value)
      }
      defaultValue={locale}
    >
      {locales.map((lang) => (
        <option key={`lang-${lang}`}>{lang}</option>
      ))}
    </Select>
  );
}
