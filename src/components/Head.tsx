import { LocalState, LocalStateKeys } from '@/typings/typings';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import profilePic from '../../public/icon.png';

export function Head({ siteName }: { siteName: string }) {
  const [{ theme }] = useCookies<LocalStateKeys, LocalState>([`theme`]);
  const altTheme = theme === `dark` ? `light` : `dark`;

  return (
    <div
      role="button"
      className={classNames({
        'd-flex': true,
        'flex-row': true,
        'flex-nowrap': true,
        'justify-content-between': true,
        'align-items-center': true,
      })}
    >
      <div className="d-flex justify-content-center align-items-center pe-2 overflow-hidden">
        <Image
          className="img-fluid img-thumbnail rounded-circle"
          src={profilePic}
          alt={`profile picture of ${siteName}`}
          width={48}
          height={48}
        />
      </div>
      <Link href="/" passHref>
        <span className="d-flex text-decoration-none">
          <div className={`d-flex flex-column text-${altTheme} fs-5`}>
            <span>{siteName}</span>
            <span className="smaller fw-lighter fst-italic">
              <small className="small text-success">
                Software Engineer (Web)
              </small>
            </span>
          </div>
        </span>
      </Link>
    </div>
  );
}
