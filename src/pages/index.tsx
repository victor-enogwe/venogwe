import Social from '@/components/Social';
import { HeaderProps, VEProps } from '@/typings/typings';
import { pageClasses } from '@/utils/constants';
import { getStaticProps } from '@/utils/functions';
import Link from 'next/link';
import { Button, Col, Row } from 'react-bootstrap';
// import { useTranslations } from 'next-intl';

export { getStaticProps };

export default function Index({
  siteName,
  theme,
}: VEProps<{ theme: HeaderProps['theme'] }>): JSX.Element {
  // const translations = useTranslations(`Index`);
  const altTheme = theme === `dark` ? `light` : `dark`;

  return (
    <main className={`${pageClasses} align-items-center`}>
      <Row className="flex-grow-1">
        <Col md={8} lg={6}>
          <h1
            className={`d-flex flex-column secondary_font text-${altTheme} text-wrap display-1`}
          >
            {siteName}
          </h1>
          <p className="lead lead-text secondary_font mb-3">
            is a <mark className={`text-${altTheme}`}>creative</mark> who loves
            to follow{` `}
            <mark className={`text-${altTheme}`}>best practices</mark>, has an
            eye for <mark className={`text-${altTheme}`}>quality</mark> and a
            knack for developing and maintaining&nbsp;
            <mark className={`text-${altTheme}`}>scalable</mark> web
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
