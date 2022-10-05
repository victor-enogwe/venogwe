import { useSSRProps } from '@/contexts/SSRProps';
import Link from 'next/link';
import { useMemo } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { PopupButton } from 'react-calendly';
import { FaLinkedinIn, FaRegCalendarCheck } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';

export default function Social({
  className,
}: {
  className?: string;
}): JSX.Element {
  const { siteName } = useSSRProps([`siteName`]);
  const calendlySettings: any = useMemo(
    () => ({
      url: process.env.NEXT_PUBLIC_CALENDLY_URL ?? ``,
      text: (
        <>
          <FaRegCalendarCheck title="calendly icon" /> Calendly
        </>
      ),
      pageSettings: {
        backgroundColor: `#030303`,
        primaryColor: `#999`,
        textColor: `#fff`,
      },
      prefill: {
        customAnswers: {},
        date: new Date(Date.now() + 86400000),
      },
    }),
    [],
  );

  return (
    <div className={className}>
      <h2 className="d-flex flex-column align-items-md-end text-success fs-3 fw-bold text-wrap">
        Let&apos;s Connect
      </h2>
      <p className="lead d-none flex-column d-md-flex align-items-md-end my-3">
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
                className="me-1"
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
                className="mx-1"
                aria-label="twitter"
              >
                <FiTwitter title="twitter icon" />
              </Button>
            </a>
          </Link>
          <Link
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=Hello ${siteName}`}
          >
            <a
              title={`send ${siteName} an email`}
              target="_blank"
              rel="noopener"
            >
              <Button
                type="button"
                variant="primary"
                className="mx-1"
                aria-label="email"
              >
                <SiGmail title="twitter icon" />
              </Button>
            </a>
          </Link>
          {/* add error boundary here - external code */}
          <PopupButton
            {...calendlySettings}
            aria-label="calendly meetings"
            // onClick={onCalendlyOpen}
            className="d-flex align-items-center btn btn-info ms-1"
          />
        </ButtonGroup>
      </div>
    </div>
  );
}
