import styles from './AuthorPage.module.css';
import { useState } from 'react';
import UserTable from '@features/user/components/UserTable/UserTable';
import { useQuery } from '@tanstack/react-query';
import { usersApi } from '@api/users/api';
import Heading from '@components/ui/Heading/Heading';

const AuthorPage = () => {
  const { data: user } = useQuery({ queryKey: ['getUser'], queryFn: usersApi.getUser });

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
        <Heading text="Author Profile" />
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
