import { usersApi } from '@api/users/api';
import { getAccessToken } from '@lib/auth';

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
