/* eslint-disable react/no-array-index-key */
import React from 'react';
import Offcanvas from 'react-bootstrap/OffCanvas';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import CloseButton from 'react-bootstrap/CloseButton';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { NavItem, NavMenuProps } from '@/typings';
import { Head } from './Header';

export function NavItems({
  items,
  parent = true,
}: {
  items: NavItem[];
  parent: boolean;
}) {
  const Wrapper = parent ? Nav.Item : NavDropdown.Item;
  return (
    <>
      {items.map(
        ({ children = [], title, description = ``, url = `` }, index) => (
          <>
            <Wrapper as="li" key={`${title}-${index}`}>
              <Nav.Link
                className="d-flex flex-column"
                title={title}
                href={url ?? `#`}
              >
                {title}
                {description.length > 0 ? <small>{description}</small> : <></>}
                {children.length > 0 ? (
                  <NavDropdown title={title}>
                    <NavItems items={children} parent={false} />
                  </NavDropdown>
                ) : (
                  <></>
                )}
              </Nav.Link>
            </Wrapper>
            {!parent && children.length !== index - 1 && (
              <NavDropdown.Divider />
            )}
          </>
        ),
      )}
    </>
  );
}

export function NavMenu({
  title,
  theme,
  items,
  toggleNav = false,
  setToggleNav,
}: NavMenuProps): JSX.Element {
  return (
    <Offcanvas
      show={toggleNav}
      backdrop={false}
      aria-labelledby="navigation"
      placement="top"
      className={`bg-${theme}`}
    >
      <Offcanvas.Header>
        <Container>
          <Navbar bg={theme} variant={theme}>
            <Container fluid className="flex-column flex-sm-row">
              <Navbar.Brand>
                <Head title={title} theme={theme} />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={() => setToggleNav(!toggleNav)}
              />
              <Navbar.Collapse className="justify-content-sm-end me-sm-4">
                <Nav
                  fill
                  justify
                  navbarScroll
                  as="ul"
                  className="flex-column flex-sm-row"
                >
                  <NavItems items={items} parent />
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>close navigation</Tooltip>}
        >
          <CloseButton
            variant={theme === `dark` ? `white` : undefined}
            className="btn position-absolute"
            aria-label="close navigation"
            onClick={() => setToggleNav(!toggleNav)}
          />
        </OverlayTrigger>
      </Offcanvas.Header>
    </Offcanvas>
  );
}
