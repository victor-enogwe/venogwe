/* eslint-disable react/no-array-index-key */
import { NavItem, NavMenuProps } from '@/typings/typings';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import {
  CloseButton,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { Head } from './Header';
import Social from './Social';

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

export function NavMenu({
  siteName,
  theme,
  items,
  toggleNav = false,
  setToggleNav,
}: NavMenuProps): JSX.Element {
  return (
    <Offcanvas
      show={toggleNav}
      backdrop={false}
      id="navigation"
      aria-labelledby="navigation"
      placement="top"
      className={`bg-${theme} px-3`}
    >
      <Offcanvas.Header className="d-flex container h-100 justify-content-start justify-content-md-between">
        {/* <Container> */}
        <Navbar
          bg={theme}
          variant={theme}
          className="flex-column flex-sm-row flex-fill h-100 justify-content-end align-items-start align-items-sm-center col-11"
        >
          <Navbar.Brand className="flex-start">
            <Head siteName={siteName} theme={theme} />
          </Navbar.Brand>
          <Navbar.Collapse className="flex-fill h-100 justify-content-sm-end me-sm-4">
            <Nav
              fill
              justify
              navbarScroll
              as="ul"
              className="flex-column flex-sm-row"
            >
              <NavItems items={items} isParent />
            </Nav>
          </Navbar.Collapse>
          <Social className="d-sm-none" siteName={siteName} />
        </Navbar>
        <div className="d-flex flex-fill flex-grow-1 justify-content-end align-self-sm-start align-items-sm-center h-100">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="nav-close">close navigation</Tooltip>}
          >
            <CloseButton
              variant={theme === `dark` ? `white` : undefined}
              className="btn btn-lg justify-content-end"
              aria-label="close navigation"
              onClick={() => setToggleNav(!toggleNav)}
            />
          </OverlayTrigger>
        </div>
      </Offcanvas.Header>
    </Offcanvas>
  );
}
