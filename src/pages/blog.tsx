import { pageClasses } from '@/utils/constants';
import { getServerSideProps } from '@/utils/functions';
import { Row } from 'react-bootstrap';

export { getServerSideProps };

export default function Blog(): JSX.Element {
  return (
    <main className={`${pageClasses} align-items-center`}>
      <Row className="flex-grow-1" />
    </main>
  );
}
