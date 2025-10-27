import styles from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <nav role="navigation">
      <ul className={styles.container}>
        <NavLink to="#" className={`${styles.link} ${styles.mobileLink}`}>
          Call for papers
        </NavLink>
        <NavLink to="/auth/login" className={styles.link} end>
          Sign in
        </NavLink>
        <NavLink to="/auth/register" className={styles.link} end>
          Create account
        </NavLink>
      </ul>
    </nav>
  );
};

export default AuthNav;
