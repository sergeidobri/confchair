import styles from './Header.module.css';
import logo from '@assets/logo.png';
import AuthNav from '@/components/navigation/Nav/AuthNav';
import { UserNav } from '@/components/navigation/Nav/UserNav';
import { useAuthStore } from '@/store/authStore';

const Header = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated());

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src={logo} alt="Logo" className={styles.logo} />
        {!isAuthenticated ? <AuthNav /> : <UserNav />}
      </div>
    </header>
  );
};
export default Header;
