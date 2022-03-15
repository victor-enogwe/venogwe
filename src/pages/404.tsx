import styles from '@/styles/404.module.scss';
import { HeaderProps } from '@/typings/typings';
import { pageClasses } from '@/utils/constants';
import { getStaticProps } from '@/utils/functions';
import { FaGhost } from '@react-icons/all-files/fa/FaGhost';
import Link from 'next/link';
import { Button, Col, Row } from 'react-bootstrap';
// import { useTranslations } from 'next-intl';

export { getStaticProps };

export default function Error404({
  route,
  theme,
}: {
  theme: HeaderProps['theme'];
  route: string;
}): JSX.Element {
  // const translations = useTranslations(`Index`);
  const altTheme = theme === `dark` ? `light` : `dark`;

  return (
    <main
      className={`${pageClasses} align-items-center justify-content-center`}
    >
      <Row>
        <Col className="d-flex flex-column justify-content-center text-center">
          <div className="d-grid gap-4">
            <div>
              <FaGhost
                size="10em"
                title={`${route} icon`}
                className={styles.ghost}
              />
            </div>
            <h2
              className={`d-flex flex-column text-${altTheme} text-wrap display-1`}
            >
              404
            </h2>
            <p>The page you&apos;re looking for does not exist{` `}</p>
            <Link href="/" passHref>
              <Button className="btn btn-success btn-sm w-100">
                Return Home
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </main>
  );
}
