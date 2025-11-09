import styles from './Nav.module.css';
import { Route as callForPapersRoute } from '@routes/call-for-papers';
import { Route as loginRoute } from '@routes/auth/login';
import { Route as registerRoute } from '@routes/auth/register';
import Nav from './Nav';

const AuthNav = () => {
  const items = [
    { to: callForPapersRoute.to, label: 'Call for papers' },
    { to: loginRoute.to, label: 'Sign in' },
    { to: registerRoute.to, label: 'Create account' },
  ];
  return <Nav items={items} containerClass={styles.alignRight} />;
};

export default AuthNav;
