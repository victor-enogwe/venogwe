import Button from 'react-bootstrap/Button';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

export function Footer(): JSX.Element {
  const date = new Date();
  return (
    <footer className="d-flex flex-row align-items-center">
      &copy; {date.getFullYear().toString()}
      <Button
        variant=""
        className="text-decoration-none"
        href="https://github.com/victor-enogwe/venogwe"
        target="_blank"
      >
        <FaGithub /> (dev in progress)
      </Button>
    </footer>
  );
}
