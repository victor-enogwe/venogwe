import { pageClasses } from '@/utils/constants';
import { getServerSideProps } from '@/utils/functions';
import { FaFilePdf } from '@react-icons/all-files/fa/FaFilePdf';
import { Button, Row, Tab, Tabs } from 'react-bootstrap';

export { getServerSideProps };

export default function Resume(): JSX.Element {
  return (
    <main className={`${pageClasses} align-items-center`}>
      <Row className="w-100">
        <Tabs
          defaultActiveKey="experience"
          id="resume-tab"
          className="nav-justified flex-column flex-sm-row px-0 mb-3 position-relative"
          variant="pills"
          // className="mb-3"
        >
          <Tab
            eventKey="experience"
            title="Work Experience"
            tabClassName="btn btn-sm"
          >
            <Row className="flex-fill">
              <h2>Frontend Developer</h2>
            </Row>
            <Button
              title="download resume"
              className="btn btn-success btn-sm shadow-lg float-end rounded-circle position-absolute top-50 end-0 translate-middle-y"
            >
              <FaFilePdf />
            </Button>
          </Tab>
          <Tab eventKey="portfolio" title="Portfolio" tabClassName="btn btn-sm">
            lorem ipsum dolor sit amet
          </Tab>
        </Tabs>
      </Row>
    </main>
  );
}
