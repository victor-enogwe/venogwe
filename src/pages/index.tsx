import Social from '@/components/Social';
import { useGlobalState } from '@/contexts/GlobalState';
import { VEProps } from '@/typings/typings';
import { pageClasses } from '@/utils/constants.client';
import { getServerSideProps } from '@/utils/functions';
import Link from 'next/link';
import { Button, Col, Row } from 'react-bootstrap';

export { getServerSideProps };

export default function Index({ siteName }: VEProps): JSX.Element {
  const { altColorScheme } = useGlobalState([`altColorScheme`]);

  return (
    <main className={`${pageClasses} align-items-center`}>
      <Row className="flex-grow-1 px-4">
        <Col md={8} lg={6}>
          <h1
            className={`d-flex flex-column secondary_font text-${altColorScheme} text-wrap display-1`}
          >
            {siteName}
          </h1>
          <p className="lead lead-text secondary_font mb-3">
            is a <mark className={`text-${altColorScheme}`}>creative</mark> who
            loves to follow{` `}
            <mark className={`text-${altColorScheme}`}>best practices</mark>,
            has an eye for{` `}
            <mark className={`text-${altColorScheme}`}>quality</mark> and a
            knack for developing and maintaining&nbsp;
            <mark className={`text-${altColorScheme}`}>scalable</mark> web
            applications.
          </p>
          <Link href="/resume" passHref>
            <Button
              href="/resume"
              title={`resume ${siteName}`}
              className="btn btn-success btn-lg"
            >
              View Resume
            </Button>
          </Link>
        </Col>
        <Col className="align-items-md-end pt-3">
          <Social siteName={siteName} />
        </Col>
      </Row>
    </main>
  );
}
