import styles from '@/styles/index.module.scss';

export function Footer(props: FooterProps): JSX.Element {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      &copy; {date.getFullYear().toString()}
    </footer>
  );
}
