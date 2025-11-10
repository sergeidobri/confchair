import styles from './AuthorPage.module.css';
import { useLoadUser } from '@/hooks/useLoadUser';
import { useAuthStore } from '@/store/authStore';
import { Link } from '@tanstack/react-router';
import { Route as authorRoute } from '@routes/author';
import UserTable from '@features/user/components/UserTable/UserTable';

const AuthorPage = () => {
  useLoadUser();

  const user = useAuthStore.getState().user;
  return (
    <>
      <div className={styles.authorHeader}>
        <h1 className={styles.heading}>Author Profile</h1>
        <Link to={authorRoute.to} className={styles.editLink}>
          Edit
        </Link>
      </div>
      {user ? <UserTable user={user} /> : null}
    </>
  );
};

export default AuthorPage;
