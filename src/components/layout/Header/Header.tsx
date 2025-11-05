import styles from './Header.module.css';
import logo from '../../../assets/logo.png';
import AuthNav from '../../navigation/AuthNav/AuthNav';
import { isAuthenticated } from '../../../lib/auth';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src={logo} alt="Logo" className={styles.logo} />
        {!isAuthenticated() ? (
          <AuthNav />
        ) : (
          <nav className={styles.guestNav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <NavLink to="/author" className={styles.navLink}>
                  Author
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/conferences" className={styles.navLink}>
                  Conferences
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
export default Header;
