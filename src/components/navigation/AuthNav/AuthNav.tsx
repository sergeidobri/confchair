import { Link } from '@tanstack/react-router';
import styles from './AuthNav.module.css';
import { Route as loginRoute } from '../../../routes/auth/login';
import { Route as registerRoute } from '../../../routes/auth/register';

const AuthNav = () => {
  return (
    <nav role="navigation">
      <ul className={styles.container}>
        <Link to={loginRoute.to} className={`${styles.link} ${styles.mobileLink}`}>
          Call for papers
        </Link>
        <Link to={loginRoute.to} className={styles.link}>
          Sign in
        </Link>
        <Link to={registerRoute.to} className={styles.link}>
          Create account
        </Link>
      </ul>
    </nav>
  );
};

export default AuthNav;
