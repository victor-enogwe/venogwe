/* eslint-disable react/no-array-index-key */
import { NavItem } from '@/typings/typings';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

export function NavItems({
  items,
  isParent = true,
}: {
  items: NavItem[];
  isParent: boolean;
}) {
  const { route } = useRouter();
  const Wrapper = isParent ? Nav.Item : NavDropdown.Item;

  return (
    <>
      {items.map(
        ({ children = [], title, description = ``, url = `` }, index) => (
          <Fragment key={`${title}-${index}`}>
            <Wrapper as="li" className="text-start">
              <Link href={url ?? `#`} passHref>
                <Nav.Link
                  className="d-flex flex-column"
                  active={route === url}
                  title={description ?? title}
                  href={url ?? `#`}
                >
                  {title}
                  {description.length > 0 ? (
                    <small>{description}</small>
                  ) : (
                    <></>
                  )}
                  {children.length > 0 ? (
                    <NavDropdown title={title}>
                      <NavItems items={children} isParent={false} />
                    </NavDropdown>
                  ) : (
                    <></>
                  )}
                </Nav.Link>
              </Link>
            </Wrapper>
            {!isParent && children.length !== index - 1 && (
              <NavDropdown.Divider />
            )}
          </Fragment>
        ),
      )}
    </>
  );
}
