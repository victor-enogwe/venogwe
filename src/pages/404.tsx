import { useGlobalState } from '@/contexts/GlobalState';
import styles from '@/styles/404.module.scss';
import { pageClasses } from '@/utils/constants.client';
import { getStaticProps } from '@/utils/functions';
import { FaGhost } from '@react-icons/all-files/fa/FaGhost';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Col, Row } from 'react-bootstrap';

export { getStaticProps };

export default function Error404(): JSX.Element {
  const { route } = useRouter();
  const { altColorScheme } = useGlobalState([`altColorScheme`]);

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
              className={`d-flex flex-column text-${altColorScheme} text-wrap display-1`}
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
