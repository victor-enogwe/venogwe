import { useGlobalState, useGlobalStateDispatch } from '@/contexts/GlobalState';
import styles from '@/styles/header.module.scss';
import { ColorScheme } from '@/typings/typings';
import classNames from 'classnames';
import { MouseEvent, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { BsFillBrightnessHighFill, BsMoon } from 'react-icons/bs';
import { Head } from './Head';

export function Header(): JSX.Element {
  const { colorScheme, altColorScheme } = useGlobalState([
    `colorScheme`,
    `altColorScheme`,
  ]);
  const setGlobalState = useGlobalStateDispatch();
  const onColorSchemeChange = useCallback(
    (e: MouseEvent<HTMLButtonElement>) =>
      setGlobalState({
        type: `ToggleColorScheme`,
        payload: e.currentTarget.dataset.altColorScheme as ColorScheme,
      }),
    [setGlobalState],
  );
  const onNavOpen = useCallback(
    () => setGlobalState({ type: `ToggleNavState`, payload: `opened` }),
    [setGlobalState],
  );

  return (
    <header
      className={classNames({
        'd-flex': true,
        'flex-row': true,
        'flex-nowrap': true,
        'justify-content-between': true,
        'align-items-center': true,
        'py-2': true,
        'px-2': true,
      })}
    >
      <Head />
      <ButtonGroup aria-label="Menu Actions">
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id={`${altColorScheme}-mode`}>
              switch to {altColorScheme} mode
            </Tooltip>
          }
        >
          <Button
            variant=""
            data-alt-color-scheme={altColorScheme}
            className={`text-${altColorScheme}`}
            aria-label="Switch Theme"
            onClick={onColorSchemeChange}
          >
            {colorScheme === `light` ? (
              <BsFillBrightnessHighFill
                color={altColorScheme}
                title="light theme switch icon"
              />
            ) : (
              <BsMoon color={altColorScheme} title="dark theme switch icon" />
            )}
          </Button>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="nav-open">open navigation</Tooltip>}
        >
          <div
            className={classNames({
              [styles.head]: true,
              'd-flex': true,
              'flex-column': true,
              'justify-content-center': true,
              'align-items-center': true,
            })}
          >
            <Button
              variant=""
              className={classNames({
                'd-flex': true,
                'flex-column': true,
                [styles[`menu-btn`]]: true,
                'btn-link': true,
                'pe-0': true,
                'justify-content-end': true,
                'text-decoration-none': true,
              })}
              aria-label="Open Navigation"
              aria-expanded="false"
              data-bs-toggle="navigation"
              data-bs-target="#navigation"
              aria-controls="navigation"
              onClick={onNavOpen}
            >
              <div
                className={classNames({
                  [styles.line]: true,
                  [styles.start]: true,
                  [`bg-${altColorScheme}`]: true,
                  'w-50': true,
                })}
              />
              <div
                className={classNames({
                  [styles.line]: true,
                  [`bg-${altColorScheme}`]: true,
                  'w-100': true,
                })}
              />
              <div
                className={classNames({
                  [styles.line]: true,
                  [styles.end]: true,
                  [`bg-${altColorScheme}`]: true,
                  'w-50': true,
                })}
              />
            </Button>
          </div>
        </OverlayTrigger>
      </ButtonGroup>
    </header>
  );
}
