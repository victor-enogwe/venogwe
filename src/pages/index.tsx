import { CalendlySettings } from '@/typings';
import { getStaticProps } from '@/utils/functions';
import Image from 'next/image';
import Link from 'next/link';
import { pageClasses } from '@/utils/constants';
import { PopupButton } from 'react-calendly';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import linkedIn from '../../public/linkedIn.svg';
import twitter from '../../public/twitter.svg';
// import { useTranslations } from 'next-intl';

export { getStaticProps };

export default function Index({ title }: { title: string }): JSX.Element {
  // const translations = useTranslations(`Index`);
  const calendlySettings: CalendlySettings = {
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
      <div className="d-flex flex-column col-md-7">
        <h2 className="d-flex flex-column secondary_font text-white text-wrap fs-1 fw-bold title">
          <span>{title}</span>
          <span className="fs-5 text-body">
            is a <mark>creative</mark> who loves to follow{` `}
            <mark>best practices</mark>, has an eye for <mark>quality</mark> and
            a knack for developing and maintaining&nbsp;
            <mark>scalable</mark> web applications.
          </span>
        </h2>
        <Link href="/">
          <a>
            <Button className="btn btn-success btn-lg">View Resume</Button>
          </a>
        </Link>
      </div>
      <div className="d-flex flex-column align-items-md-end col-md-5">
        <h2 className="d-flex flex-column align-items-md-end text-success primary_font fs-3 fw-bold text-wrap">
          <span>
            <strong>Let&apos;s Connect</strong>
          </span>
          <span className="fs-5 text-body">You can reach me via:</span>
        </h2>
        <ButtonGroup size="sm" aria-label="social links">
          <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ``}>
            <a>
              <Button type="button" variant="info" className=" mx-2">
                <Image
                  priority
                  src={linkedIn}
                  alt={`view LinkedIn profile of ${title}`}
                  width={20}
                  height={20}
                />
              </Button>
            </a>
          </Link>
          <Link
            href={`https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_USERNAME}`}
          >
            <a>
              <Button type="button" variant="primary" className="mx-2">
                <Image
                  className="social-btn"
                  priority
                  src={twitter}
                  alt={`view Twitter profile of ${title}`}
                  width={20}
                  height={20}
                />
              </Button>
            </a>
          </Link>
          <PopupButton
            {...calendlySettings}
            url={process.env.NEXT_PUBLIC_CALENDLY_URL ?? ``}
            text="Calendly Meeting"
            className="btn btn-sm btn-light ms-2"
          />
        </ButtonGroup>
      </div>
    </main>
  );
}
