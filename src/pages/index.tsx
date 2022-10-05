import Social from '@/components/Social';
import { useGlobalState } from '@/contexts/GlobalState';
import { useSSRProps } from '@/contexts/SSRProps';
import { pageClasses } from '@/utils/constants.client';
import { getStaticProps } from '@/utils/functions';
import Link from 'next/link';
import { useMemo } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MdOutlineWavingHand, MdWavingHand } from 'react-icons/md';

export { getStaticProps };

export default function Index(): JSX.Element {
  const { siteName } = useSSRProps([`siteName`]);
  const { altColorScheme } = useGlobalState([`altColorScheme`]);
  const Wave = useMemo(
    () => (altColorScheme === `dark` ? MdWavingHand : MdOutlineWavingHand),
    [altColorScheme],
  );

  return (
    <main className={`${pageClasses} align-items-center`}>
      <Row className="flex-grow-1 px-4">
        <Col md={8} lg={6}>
          <p>
            Greetings <Wave title="wave" size="2em" color="brown" />, I&apos;m
          </p>

          <h1
            className={`d-flex flex-column secondary_font text-${altColorScheme} text-wrap display-1`}
          >
            {siteName}
          </h1>
          <p className="lead lead-text secondary_font mb-3">
            I build
            {` `}
            <mark className={`text-${altColorScheme}`}>web applications</mark>
            {` `}
            as a hobby and for a living. I also write
            {` `}
            <Link href="/articles" passHref>
              <a>
                <mark className={`text-${altColorScheme}`}>
                  technical articles
                </mark>
              </a>
            </Link>
            {` `}
            about the <mark className={`text-${altColorScheme}`}>creative</mark>
            {` `}
            process of building them.
          </p>
          <Link href="/projects" passHref>
            <Button
              href="/projects"
              title={`projects ${siteName}`}
              className="btn btn-success btn-lg"
            >
              View Projects
            </Button>
          </Link>
        </Col>
        <Col className="align-items-md-end pt-md-5 mt-3">
          <Social />
        </Col>
      </Row>
    </main>
  );
}
