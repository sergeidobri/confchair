import styles from './Nav.module.css';
import { Link } from '@tanstack/react-router';

interface NavItemMeta {
  primary?: string;
  secondary?: string;
}

export interface NavItem {
  to: string;
  label: string;
  itemClass?: string;
  meta?: NavItemMeta | null;
}

interface NavProps {
  leftItems: NavItem[];
  rightItems: NavItem[];
  containerClass?: string;
}

export const Nav = ({ leftItems, rightItems, containerClass }: NavProps) => {
  return (
    <nav className={styles.navContainer} role="navigation">
      {[leftItems, rightItems].map((items, itemsIndex) => (
        <ul
          key={itemsIndex}
          className={`${styles.container} ${containerClass ? containerClass : ''}`}
        >
          {items.map((item, index) => (
            <li
              key={itemsIndex * items.length + index}
              className={`${styles.link} ${item.itemClass ? item.itemClass : ''}`}
            >
              <Link to={item.to}>{item.label}</Link>
              {item.meta && (
                <div className={styles.navItemMeta}>
                  {item.meta.primary && (
                    <div className={styles.metaPrimary}>{item.meta.primary}</div>
                  )}
                  {item.meta.secondary && (
                    <div className={styles.metaSecondary}>{item.meta.secondary}</div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
};
