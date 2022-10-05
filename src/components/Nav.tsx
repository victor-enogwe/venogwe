import { useGlobalState, useGlobalStateDispatch } from '@/contexts/GlobalState';
import { NavMenuProps } from '@/typings/typings';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Head } from './Head';
import { NavItems } from './NavItems';
import Social from './Social';

export function NavMenu({ items }: NavMenuProps): JSX.Element {
  const { events } = useRouter();
  const { colorScheme, navState } = useGlobalState([`colorScheme`, `navState`]);
  const closeButtonVariant = useMemo(
    () => (colorScheme === `dark` ? `white` : undefined),
    [colorScheme],
  );

  const setGlobalState = useGlobalStateDispatch();
  const onNavClose = useCallback(
    () => setGlobalState({ type: `ToggleNavState`, payload: `closed` }),
    [setGlobalState],
  );

  useEffect(
    () =>
      events.on(`routeChangeComplete`, () =>
        setGlobalState({ type: `ToggleNavState`, payload: `closed` }),
      ),
    [navState, events, setGlobalState],
  );

  return (
    <Offcanvas
      show={navState === `opened`}
      backdrop={false}
      id="navigation"
      aria-labelledby="navigation"
      placement="top"
      className={`bg-${colorScheme} px-4`}
      tabIndex="-1"
    >
      <Offcanvas.Header className="d-flex container px-md-4 justify-content-start justify-content-md-between">
        <Navbar
          bg={colorScheme}
          variant={colorScheme}
          className="flex-column flex-sm-row flex-fill h-100 justify-content-end align-items-start align-items-sm-center col-11"
        >
          <Navbar.Brand className="flex-start">
            <Head />
          </Navbar.Brand>
          <Navbar.Collapse className="flex-fill h-100 justify-content-sm-end">
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
          <Social className="d-sm-none" />
        </Navbar>
        <div className="d-flex flex-fill flex-grow-1 justify-content-end align-self-sm-start align-items-sm-center h-100">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="nav-close">close navigation</Tooltip>}
          >
            <CloseButton
              variant={closeButtonVariant}
              className="btn btn-lg justify-content-end"
              aria-label="close navigation"
              onClick={onNavClose}
            />
          </OverlayTrigger>
        </div>
      </Offcanvas.Header>
    </Offcanvas>
  );
}
