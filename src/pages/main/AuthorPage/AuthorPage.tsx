import styles from './AuthorPage.module.css';
import { useState } from 'react';
import { useLoadUser } from '@/hooks/useLoadUser';
import { useAuthStore } from '@/store/authStore';
import UserTable from '@features/user/components/UserTable/UserTable';

const AuthorPage = () => {
  useLoadUser();

  const user = useAuthStore.getState().user;
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBtnClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className={styles.authorHeader}>
        <h1 className={styles.heading}>Author Profile</h1>
        {!isEditing && (
          <button onClick={handleEditClick} className={styles.editLink}>
            Edit
          </button>
        )}
      </div>
      {user && (
        <UserTable
          isEditable={isEditing}
          user={user}
          onSave={handleBtnClick}
          onCancel={handleBtnClick}
        />
      )}
    </>
  );
};

export default AuthorPage;
