import { LocalState, LocalStateKeys, VEProps } from '@/typings/typings';
import { BaseSyntheticEvent } from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

const Select = styled.select`
  width: 100px;
`;

export function LanguageSwitcher({
  locales,
}: Pick<VEProps, 'locales'>): JSX.Element {
  const [{ locale, theme }, setCookie] = useCookies<LocalStateKeys, LocalState>(
    [`locale`, `theme`],
  );

  return (
    <Select
      className={`form-select form-select-sm bg-${theme} position-absolute top-0 end-0 me-3 border-0 rounded-0`}
      onChange={({ currentTarget, target }: BaseSyntheticEvent) =>
        setCookie(`locale`, currentTarget.value ?? target.value)
      }
      defaultValue={locale}
    >
      {locales.map((lang) => (
        <option key={`lang-${lang}`}>{lang}</option>
      ))}
    </Select>
  );
}
