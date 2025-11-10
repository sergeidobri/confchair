import { getAccessToken } from '@/store/authStore';
import { usersApi } from '@api/users/api';

const Main = () => {
  usersApi
    .getUser()
    .then(console.log)
    .then(() => {
      console.log(getAccessToken());
    });
  return <div>Заглушка</div>;
};

export default Main;
