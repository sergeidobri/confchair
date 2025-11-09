import { Link } from '@tanstack/react-router';
import styles from './Header.module.css';
import logo from '@assets/logo.png';
import { isAuthenticated } from '@lib/auth';
import { Route as loginRoute } from '@routes/auth/login';
import AuthNav from '@components/navigation/AuthNav/AuthNav';

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
                <Link to={loginRoute.to} className={styles.navLink}>
                  Author
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to={loginRoute.to} className={styles.navLink}>
                  Conferences
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
export default Header;
