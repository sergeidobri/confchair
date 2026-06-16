import Heading from '@/components/ui/Heading/Heading';
import styles from './AuthorProfile.module.css';
import { useState } from 'react';
import UserTable from '../UserTable/UserTable';
import type { User } from '@/types/user';
import Link from '@/components/ui/Link/Link';

interface Props {
  user: User | undefined;
}

const AuthorProfile = ({ user }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBtnClick = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <div className={styles.authorHeader}>
        <Heading text="Author Profile" />
        {!isEditing && <Link onClick={handleEditClick}>Edit</Link>}
      </div>
      {user && (
        <UserTable
          isEditable={isEditing}
          user={user}
          onSave={handleBtnClick}
          onCancel={handleBtnClick}
        />
      )}
    </div>
  );
};

export default AuthorProfile;
