import { pageClasses } from '@/utils/constants.client';
import { getServerSideProps } from '@/utils/functions';
import { Row } from 'react-bootstrap';

export { getServerSideProps };

export default function Resume(): JSX.Element {
  return (
    <main className={`${pageClasses}`}>
      <Row className="flex-grow-1 p-4">Resume</Row>
    </main>
  );
}
