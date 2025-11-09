import styles from './Nav.module.css';
import { Link } from '@tanstack/react-router';

interface NavItem {
  to: string;
  label: string;
  itemClass?: string;
}

interface NavProps {
  items: NavItem[];
  containerClass?: string;
}

const Nav = ({ items, containerClass }: NavProps) => {
  return (
    <nav role="navigation">
      <ul className={`${styles.container} ${containerClass ? containerClass : ''}`}>
        {items.map((item, index) => (
          <li key={index} className={`${styles.link} ${item.itemClass ? item.itemClass : ''}`}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
