import Link from 'next/link';
import { openPopupWidget } from 'react-calendly';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaRegCalendarCheck } from '@react-icons/all-files/fa/FaRegCalendarCheck';
import { CalendlySettings } from '@/typings';

export default function Social({
  siteName,
  className,
}: {
  siteName: string;
  className?: string;
}): JSX.Element {
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
    <div className={className}>
      <h2 className="d-flex flex-column align-items-md-end text-success fs-3 fw-bold text-wrap">
        Let&apos;s Connect
      </h2>
      <p className="d-flex flex-column align-items-md-end my-3">
        You can reach me via:
      </p>
      <div className="d-flex flex-column align-items-md-end mb-2">
        <ButtonGroup size="sm" aria-label="social links">
          <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ``}>
            <a
              title={`view LinkedIn profile of ${siteName}`}
              target="_blank"
              rel="noopener"
            >
              <Button
                type="button"
                variant="info"
                className="me-2"
                aria-label="linkedin"
              >
                <FaLinkedinIn title="linkedIn icon" />
              </Button>
            </a>
          </Link>
          <Link
            href={`https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_USERNAME}`}
          >
            <a
              title={`view Twitter profile of ${siteName}`}
              target="_blank"
              rel="noopener"
            >
              <Button
                type="button"
                variant="primary"
                className="mx-2"
                aria-label="twitter"
              >
                <FiTwitter title="twitter icon" />
              </Button>
            </a>
          </Link>
          <Button
            variant="info"
            aria-label="calendly meetings"
            onClick={() => openPopupWidget(calendlySettings)}
            className=" ms-2"
          >
            <FaRegCalendarCheck title="calendly icon" /> Calendly
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
