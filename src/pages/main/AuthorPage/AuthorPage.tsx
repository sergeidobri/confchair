import styles from './AuthorPage.module.css';
import { useQuery } from '@tanstack/react-query';
import { usersApi } from '@api/users/api';
import AuthorProfile from '@/features/user/components/AuthorProfile/AuthorProfile';
import Submission from '@/features/user/components/Submission/Submission';

const AuthorPage = () => {
  const {
    data: user,
    isError,
    isPending,
  } = useQuery({ queryKey: ['getUser'], queryFn: usersApi.getUser });

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error occured</div>;
  }

  return (
    <div className={styles.container}>
      <AuthorProfile user={user} />
      <Submission />
    </div>
  );
};

export default AuthorPage;
