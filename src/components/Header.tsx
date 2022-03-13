import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';
import { ButtonGroup, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsFillBrightnessHighFill } from '@react-icons/all-files/bs/BsFillBrightnessHighFill';
import { BsFillBrightnessLowFill } from '@react-icons/all-files/bs/BsFillBrightnessLowFill';
import styles from '@/styles/header.module.scss';
import { HeaderProps } from '@/typings';
import profilePic from '../../public/icon.png';

export function Head({
  theme,
  siteName,
}: {
  theme: HeaderProps['theme'];
  siteName: string;
}) {
  const altTheme = theme === `dark` ? `light` : `dark`;

  return (
    <div
      className={classNames({
        'd-flex': true,
        'flex-row': true,
        'flex-nowrap': true,
        'justify-content-between': true,
        'align-items-center': true,
      })}
    >
      <div className="d-flex justify-content-center align-items-center rounded-img pe-2">
        <Image
          className="img-fluid img-thumbnail rounded"
          src={profilePic}
          alt={`profile picture of ${siteName}`}
          width={48}
          height={48}
        />
      </div>
      <Link href="/">
        <a className="d-flex text-decoration-none">
          <div className={`d-flex flex-column text-${altTheme} fs-5`}>
            <span>{siteName}</span>
            <span className="fs-6 fw-lighter fst-italic">
              <small className="smaller text-success">
                Senior Software Engineer
              </small>
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
}

export function Header({
  siteName,
  theme,
  toggleTheme,
  toggleNav,
  setToggleNav,
}: HeaderProps): JSX.Element {
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
      <Head siteName={siteName} theme={theme} />
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
            onClick={() => toggleTheme(altTheme)}
          >
            {theme === `light` ? (
              <BsFillBrightnessHighFill
                color={altTheme}
                title="light theme switch icon"
              />
            ) : (
              <BsFillBrightnessLowFill
                color={altTheme}
                title="dark theme switch icon"
              />
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
              onClick={() => setToggleNav(!toggleNav)}
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
