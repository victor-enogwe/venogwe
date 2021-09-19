import { HeaderProps } from '@/typings';
import Image from 'next/image';
import styles from '@/styles/header.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import profilePic from '../../public/icon.png';

export function Head({ title }: { title: string }) {
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
      <Image
        className="img-fluid img-thumbnail rounded"
        priority
        src={profilePic}
        alt={`profile picture of ${title}`}
        width={48}
        height={48}
      />
      <Link href="/">
        <a className="d-flex text-decoration-none">
          <h1 className="d-flex flex-column text-white fs-5 mt-2">
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
  toggleNav,
  setToggleNav,
}: HeaderProps): JSX.Element {
  return (
    <header
      className={classNames({
        'd-flex': true,
        'flex-row': true,
        'flex-nowrap': true,
        'justify-content-between': true,
        'align-items-center': true,
        // 'py-2': true,
        'py-md-4': true,
      })}
    >
      <Head title={title} />

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
            'justify-content-end': true,
            'text-decoration-none': true,
          })}
          aria-label="Dropdown Navigation Toggle Button"
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
              'bg-white': true,
              'w-50': true,
            })}
          />
          <div
            className={classNames({
              [styles.line]: true,
              'bg-white': true,
              'w-100': true,
            })}
          />
          <div
            className={classNames({
              [styles.line]: true,
              [styles.end]: true,
              'bg-white': true,
              'w-50': true,
            })}
          />
        </Button>
      </div>
    </header>
  );
}
