import { CalendlySettings } from '@/typings';
import { getStaticProps } from '@/utils/functions';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { PopupButton } from 'react-calendly';
import linkedIn from '../../public/linkedIn.svg';
import twitter from '../../public/twitter.svg';
// import { useTranslations } from 'next-intl';

export { getStaticProps };

export default function Index({ title }: { title: string }): JSX.Element {
  // const translations = useTranslations(`Index`);
  const mainClasses = classNames({ block: true });
  const calendlySettings: CalendlySettings = {
    pageSettings: {
      backgroundColor: `#030303`,
      primaryColor: `#999`,
      textColor: `#fff`,
    },
    prefill: {
      customAnswers: {
        a1: `a1`,
        a2: `a2`,
        a3: `a3`,
        a4: `a4`,
        a5: `a5`,
        a6: `a6`,
        a7: `a7`,
        a8: `a8`,
        a9: `a9`,
        a10: `a10`,
      },
      date: new Date(Date.now() + 86400000),
    },
  };

  return (
    <main className={mainClasses}>
      {/* <div className="box column flex-start flex-basis-10 display-tablet-none display-none-mobile">
        <button type="button">X</button>
      </div> */}
      <div className="box column flex-start">
        <h2 className="flex column secondary_font">
          <span>Victor Enogwe</span>
          <span className="description">
            is a <mark>creative</mark> who loves to follow{` `}
            <mark>best practices</mark>, has an eye for <mark>quality</mark> and
            a knack for developing and maintaining&nbsp;
            <mark>scalable</mark> web applications.
          </span>
        </h2>
        <Link href="/">
          <a>
            <button type="button">View Resume</button>
          </a>
        </Link>
      </div>
      <div className="box column flex-basis-60 flex-end">
        <h2 className="flex column flex-end logo_text highlight_color primary_font connect">
          <span>
            <strong>Let&apos;s Connect</strong>
          </span>
          <span className="description">You can reach me via:</span>
        </h2>
        <div className="flex">
          <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ``}>
            <a>
              <button type="button" className="social-btn">
                <Image
                  className="social-btn"
                  priority
                  src={linkedIn}
                  alt={`view LinkedIn profile of ${title}`}
                  width={45}
                  height={45}
                />
              </button>
            </a>
          </Link>
          <Link
            href={`https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_USERNAME}`}
          >
            <a>
              <button type="button" className="social-btn">
                <Image
                  className="social-btn"
                  priority
                  src={twitter}
                  alt={`view Twitter profile of ${title}`}
                  width={45}
                  height={45}
                />
              </button>
            </a>
          </Link>
          <PopupButton
            {...calendlySettings}
            url={process.env.NEXT_PUBLIC_CALENDLY_URL ?? ``}
            text="Meeting"
            className="button"
          />
        </div>
      </div>
    </main>
  );
}
