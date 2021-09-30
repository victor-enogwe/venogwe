import { Button } from 'react-bootstrap';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

export function Footer(): JSX.Element {
  const date = new Date();
  return (
    <footer className="d-flex container-fluid flex-row align-items-center">
      &copy; {date.getFullYear().toString()}
      <Button
        variant=""
        className="text-decoration-none"
        href="https://github.com/victor-enogwe/venogwe"
        target="_blank"
        rel="noopener"
      >
        <FaGithub title="github icon" /> (dev in progress)
      </Button>
    </footer>
  );
}
