import styles from '@/styles/header.module.scss';
import Link from 'next/link';
import Facebook from '@material-ui/icons/Facebook';

export function Social(): JSX.Element {
  return (
    <div id="social">
      <Link href="/">
        <a className={styles.logo}>
          <Facebook />
        </a>
      </Link>
    </div>
  );
}
