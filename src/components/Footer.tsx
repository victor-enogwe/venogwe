export function Footer(): JSX.Element {
  const date = new Date();
  return (
    <footer className="d-flex flex-row align-items-center">
      &copy; {date.getFullYear().toString()} (dev in progress)
    </footer>
  );
}
