import { pageClasses } from '@/utils/constants';
import { getStaticProps } from '@/utils/functions';
import { Row } from 'react-bootstrap';
// import { useTranslations } from 'next-intl';

export { getStaticProps };

export default function Blog(): JSX.Element {
  // const translations = useTranslations(`Index`);

  return (
    <main className={`${pageClasses} align-items-center`}>
      <Row className="flex-grow-1" />
    </main>
  );
}
