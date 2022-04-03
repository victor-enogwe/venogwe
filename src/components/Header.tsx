import styles from '@/styles/header.module.scss';
import {
  LocalState,
  LocalStateKeys,
  VEProps,
  WithCookiesProps,
} from '@/typings/typings';
import { BsFillBrightnessHighFill } from '@react-icons/all-files/bs/BsFillBrightnessHighFill';
import { BsMoon } from '@react-icons/all-files/bs/BsMoon';
import classNames from 'classnames';
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { Head } from './Head';

export function Header({
  siteName,
}: WithCookiesProps<Pick<VEProps, 'siteName'>>): JSX.Element {
  const [{ theme }, setCookie] = useCookies<LocalStateKeys, LocalState>([
    `theme`,
    `navState`,
  ]);
  const altTheme = theme === `dark` ? `light` : `dark`;

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
      <Head siteName={siteName} />
      <ButtonGroup aria-label="Menu Actions">
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id={`${altTheme}-mode`}>switch to {altTheme} mode</Tooltip>
          }
        >
          <Button
            variant=""
            className={`text-${altTheme}`}
            aria-label="Switch Theme"
            onClick={() => setCookie(`theme`, altTheme)}
          >
            {theme === `light` ? (
              <BsFillBrightnessHighFill
                color={altTheme}
                title="light theme switch icon"
              />
            ) : (
              <BsMoon color={altTheme} title="dark theme switch icon" />
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
              onClick={() => setCookie(`navState`, `opened`)}
            >
              <div
                className={classNames({
                  [styles.line]: true,
                  [styles.start]: true,
                  [`bg-${altTheme}`]: true,
                  'w-50': true,
                })}
              />
              <div
                className={classNames({
                  [styles.line]: true,
                  [`bg-${altTheme}`]: true,
                  'w-100': true,
                })}
              />
              <div
                className={classNames({
                  [styles.line]: true,
                  [styles.end]: true,
                  [`bg-${altTheme}`]: true,
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
