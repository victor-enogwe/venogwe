/* eslint-disable react/no-array-index-key */
import { NavMenu, NavItem } from '@/typings';
import Link from 'next/link';
import { URL_REGEX } from '@/utils/constants';
import { Fragment } from 'react';
import classNames from 'classnames';
import styles from '@/styles/nav.module.scss';

export function NavItems({ items }: { items: NavItem[] }) {
  return (
    <>
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
    <nav
      className="flex flex-center row"
      aria-label="Navigation Dropdown Menu"
      role="navigation"
    >
      <ListStyle>
        <NavItems items={items} />
      </ListStyle>

      <button
        type="button"
        className={classNames({ 'nav-btn': true })}
        aria-label="Dropdown Navigation Button"
        aria-expanded="false"
      >
        <span className="display-none closed">Open</span>
        <div className={classNames({ [styles[`menu-btn`]]: true })}>
          <div
            className={classNames({
              [styles[`line-menu`]]: true,
              [styles.half]: true,
              [styles.start]: true,
            })}
          />
          <div className={styles[`line-menu`]} />
          <div
            className={classNames({
              [styles[`line-menu`]]: true,
              [styles.half]: true,
              [styles.end]: true,
            })}
          />
        </div>
      </button>
    </nav>
  );
}
