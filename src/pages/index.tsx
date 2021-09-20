import Link from 'next/link';
import { openPopupWidget } from 'react-calendly';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';
import { FaRegCalendarCheck } from '@react-icons/all-files/fa/FaRegCalendarCheck';
import { pageClasses } from '@/utils/constants';
import { getStaticProps } from '@/utils/functions';
import { HeaderProps, CalendlySettings } from '@/typings';
// import { useTranslations } from 'next-intl';

export { getStaticProps };

export default function Index({
  title,
  theme,
}: {
  theme: HeaderProps['theme'];
  title: string;
}): JSX.Element {
  // const translations = useTranslations(`Index`);
  const altTheme = theme === `dark` ? `light` : `dark`;
  const calendlySettings: CalendlySettings = {
    url: process.env.NEXT_PUBLIC_CALENDLY_URL ?? ``,
    pageSettings: {
      backgroundColor: `#030303`,
      primaryColor: `#999`,
      textColor: `#fff`,
    },
    prefill: {
      customAnswers: {},
      date: new Date(Date.now() + 86400000),
    },
  };

  return (
    <main className={`${pageClasses} align-items-center`}>
      <Row>
        <Col md={8} lg={6}>
          <h2
            className={`d-flex flex-column secondary_font text-${altTheme} text-wrap display-1`}
          >
            {title}
          </h2>
          <p className="lead lead-text secondary_font mb-3">
            is a <mark className={`text-${altTheme}`}>creative</mark> who loves
            to follow{` `}
            <mark className={`text-${altTheme}`}>best practices</mark>, has an
            eye for
            <mark className={`text-${altTheme}`}>quality</mark> and a knack for
            developing and maintaining&nbsp;
            <mark className={`text-${altTheme}`}>scalable</mark> web
            applications.
          </p>
          <Link href="/">
            <a>
              <Button className="btn btn-success btn-lg">View Resume</Button>
            </a>
          </Link>
        </Col>
        <Col className="align-items-md-end pt-3">
          <h2 className="d-flex flex-column align-items-md-end text-success fs-3 fw-bold text-wrap">
            Let&apos;s Connect
          </h2>
          <p className="d-flex flex-column align-items-md-end my-3">
            You can reach me via:
          </p>
          <div className="d-flex flex-column align-items-md-end mb-2">
            <ButtonGroup size="sm" aria-label="social links">
              <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ``}>
                <a title={`view LinkedIn profile of ${title}`} target="_blank">
                  <Button type="button" variant="info" className="me-2">
                    <FiLinkedin />
                  </Button>
                </a>
              </Link>
              <Link
                href={`https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_USERNAME}`}
              >
                <a title={`view Twitter profile of ${title}`} target="_blank">
                  <Button
                    type="button"
                    variant="primary"
                    className="mx-2"
                    aria-label="twitter"
                  >
                    <FiTwitter />
                  </Button>
                </a>
              </Link>
              <Button
                variant="info"
                onClick={() => openPopupWidget(calendlySettings)}
                className=" ms-2"
              >
                <FaRegCalendarCheck /> Calendly
              </Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
    </main>
  );
}
