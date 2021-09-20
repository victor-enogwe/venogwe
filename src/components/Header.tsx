import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { BsFillBrightnessHighFill } from '@react-icons/all-files/bs/BsFillBrightnessHighFill';
import { BsFillBrightnessLowFill } from '@react-icons/all-files/bs/BsFillBrightnessLowFill';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import styles from '@/styles/header.module.scss';
import { HeaderProps } from '@/typings';
import profilePic from '../../public/icon.png';

export function Head({
  theme,
  title,
}: {
  theme: HeaderProps['theme'];
  title: string;
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
          priority
          src={profilePic}
          alt={`profile picture of ${title}`}
          width={48}
          height={48}
        />
      </div>
      <Link href="/">
        <a className="d-flex text-decoration-none">
          <h1 className={`d-flex flex-column text-${altTheme} fs-5`}>
            <span>{title}</span>
            <span className="fs-6 fw-lighter fst-italic">
              <small className="smaller text-success">
                Senior Software Engineer
              </small>
            </span>
          </h1>
        </a>
      </Link>
    </div>
  );
}

export function Header({
  title,
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
        'py-4': true,
      })}
    >
      <Head title={title} theme={theme} />
      <ButtonGroup aria-label="Menu Actions">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>switch to {altTheme} mode</Tooltip>}
        >
          <Button
            variant=""
            className={`text-${altTheme}`}
            aria-label="Switch Theme"
            onClick={() => toggleTheme(altTheme)}
          >
            {theme === `light` ? (
              <BsFillBrightnessHighFill color={altTheme} />
            ) : (
              <BsFillBrightnessLowFill color={altTheme} />
            )}
          </Button>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>open navigation</Tooltip>}
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
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
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
