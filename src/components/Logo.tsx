import Image from 'next/image';
import styles from '@/styles/header.module.scss';
import Link from 'next/link';
import profilePic from '../../public/profilePic.png';

export function Logo({ title }: { title: string }): JSX.Element {
  return (
    <div id="logo">
      <Image
        className={styles[`profile-pic`]}
        src={profilePic}
        alt={`profile picture of ${title}`}
        width={45}
        height={45}
      />
      <Link href="/">
        <a className={styles.logo}>{title}</a>
      </Link>
    </div>
  );
}
