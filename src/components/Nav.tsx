/* eslint-disable react/no-array-index-key */
import { NavMenu, NavItem } from '@/typings';
import Link from 'next/link';
import { URL_REGEX } from '@/utils/constants';
import { Fragment } from 'react';

export function NavItems({ items }: { items: NavItem[] }) {
  return (
    <>
      <button type="button" className="display-desktop-none">
        X
      </button>
      {items.map(
        ({ children = [], title, description = ``, url = `` }, index) => {
          const validURL = URL_REGEX.test(url);
          const LinkWrapper = validURL
            ? Link.bind(null, { href: url })
            : Fragment;
          const LinkWrap = validURL ? `a` : Fragment;

          return (
            <li key={`${title}-${index}`}>
              <LinkWrapper>
                <LinkWrap>
                  {title}
                  {description.length > 0 ? (
                    <small>{description}</small>
                  ) : (
                    <></>
                  )}
                  {children.length > 0 ? <NavItems items={children} /> : <></>}
                </LinkWrap>
              </LinkWrapper>
            </li>
          );
        },
      )}
    </>
  );
}

export function Nav({ items, ListStyle = `ul` }: NavMenu): JSX.Element {
  return (
    <nav>
      <ListStyle>
        <NavItems items={items} />
      </ListStyle>
    </nav>
  );
}
