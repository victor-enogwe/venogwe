import { Button, Row, Col } from 'react-bootstrap';
import { pageClasses } from '@/utils/constants';
import { getStaticProps } from '@/utils/functions';
// import { useTranslations } from 'next-intl';

export { getStaticProps };

export default function Portfolio(): JSX.Element {
  // const translations = useTranslations(`Index`);

  return (
    <main className={`${pageClasses} align-items-center`}>
      <Row className="flex-grow-1" />
    </main>
  );
}
