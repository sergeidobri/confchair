import styles from "./Header.module.css";
import logo from "../../../assets/logo.png";
import AuthNav from "../../navigation/AuthNav/AuthNav";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <AuthNav />
      </div>
    </header>
  );
};

export default Header;
