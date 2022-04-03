import { LocalState, LocalStateKeys, NavMenuProps } from '@/typings/typings';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import {
  CloseButton,
  Nav,
  Navbar,
  Offcanvas,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { Head } from './Head';
import { NavItems } from './NavItems';
import Social from './Social';

export function NavMenu({ siteName, items }: NavMenuProps): JSX.Element {
  const { events } = useRouter();
  const [{ theme, navState = `closed` }, setCookie] = useCookies<
    LocalStateKeys,
    LocalState
  >([`theme`, `navState`]);

  useEffect(
    () =>
      events.on(`routeChangeComplete`, () => setCookie(`navState`, `closed`)),
    [navState, events, setCookie],
  );

  return (
    <Offcanvas
      show={navState === `opened`}
      backdrop={false}
      id="navigation"
      aria-labelledby="navigation"
      placement="top"
      className={`bg-${theme} px-3`}
    >
      <Offcanvas.Header className="d-flex container h-100 justify-content-start justify-content-md-between">
        <Navbar
          bg={theme}
          variant={theme}
          className="flex-column flex-sm-row flex-fill h-100 justify-content-end align-items-start align-items-sm-center col-11"
        >
          <Navbar.Brand className="flex-start">
            <Head siteName={siteName} />
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
              onClick={() => setCookie(`navState`, `closed`)}
            />
          </OverlayTrigger>
        </div>
      </Offcanvas.Header>
    </Offcanvas>
  );
}
