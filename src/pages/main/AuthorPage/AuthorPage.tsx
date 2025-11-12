import styles from './AuthorPage.module.css';
import { useState } from 'react';
import { useLoadUser } from '@/hooks/useLoadUser';
import { useAuthStore } from '@/store/authStore';
import UserTable from '@features/user/components/UserTable/UserTable';
import type { UserFormData } from '@/features/user/schemas/user';
import { usersApi } from '@/api/users/api';

type RemoveNullable<T> = {
  [K in keyof T as T[K] extends null | undefined ? never : K]: T[K];
};

const AuthorPage = () => {
  useLoadUser();

  const user = useAuthStore.getState().user;
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (data: UserFormData) => {
    const cleanData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value != null),
    ) as RemoveNullable<UserFormData>;
    try {
      const updatedUser = await usersApi.updateUser(cleanData);

      // useAuthStore.getState().setUser(updatedUser);
    } catch (error: any) {
      console.error(error.response?.data?.message || 'Incorrect data');
    }
  };

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
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default AuthorPage;
