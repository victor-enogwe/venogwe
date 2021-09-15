import { HeaderProps } from '@/typings';
import Image from 'next/image';
import styles from '@/styles/header.module.scss';
import Link from 'next/link';
import profilePic from '../../public/icon.png';

export function Header({ title }: HeaderProps): JSX.Element {
  return (
    <header id={styles.header_main}>
      <Image
        className={styles.logo_img}
        priority
        src={profilePic}
        alt={`profile picture of ${title}`}
        width={45}
        height={45}
      />
      <Link href="/">
        <a>
          <h1 className="logo_text">
            <span>{title}</span>
            <span>
              <small>Senior Software Engineer</small>
            </span>
          </h1>
        </a>
      </Link>
    </header>
  );
}
