import styles from '@/styles/index.module.scss';
import classNames from 'classnames';
import { getStaticProps } from '@/utils/functions';
// import { useTranslations } from 'next-intl';

export { getStaticProps };

export default function Index(): JSX.Element {
  // const translations = useTranslations(`Index`);
  const mainClasses = classNames({ [styles.container]: true });

  return (
    <>
      <main className={mainClasses}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Enogwe Victor!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{` `}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <p className={styles.description}>This is not an official starter!</p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=typescript-nextjs-starter"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
