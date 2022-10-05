import { useGlobalState } from '@/contexts/GlobalState';
import { useSSRProps } from '@/contexts/SSRProps';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/icon.png';

export function Head() {
  const { siteName, headline } = useSSRProps([`siteName`, `headline`]);
  const { altColorScheme } = useGlobalState([`colorScheme`]);

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
          priority
        />
      </div>
      <Link href="/" passHref>
        <span className="d-flex text-decoration-none">
          <div className={`d-flex flex-column text-${altColorScheme} fs-5`}>
            <span>{siteName}</span>
            <span className="smaller fw-lighter fst-italic">
              <small className="small text-success">{headline}</small>
            </span>
          </div>
        </span>
      </Link>
    </div>
  );
}
