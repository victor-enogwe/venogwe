import { HeaderProps, NavItem } from '@/typings';
import { Nav } from './Nav';
import { Logo } from './Logo';
import { Social } from './Social';

export function Header({ title }: HeaderProps): JSX.Element {
  const menuItems: NavItem[] = [{ title: `about`, description: `about me` }];

  return (
    <header>
      <Logo title={title} />
      <Nav ListStyle="ul" items={menuItems} />
      <Social />
    </header>
  );
}
