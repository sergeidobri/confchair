import styles from './Nav.module.css';
import { Route as authorRoute } from '@routes/author';
import { Route as callForPapersRoute } from '@routes/call-for-papers';
import { Route as logoutRoute } from '@routes/auth/logout';
import { Nav } from './Nav';
import { useLoadUser } from '@/hooks/useLoadUser';
import { useAuthStore } from '@/store/authStore';
import { useLocation } from '@tanstack/react-router';

export function UserNav() {
  // usernav рендерится до beforeload в роуте logout, уходит запрос с токенами до их удаления = баг
  // избавляемся от этого компонента при выполнении логики логаута
  const location = useLocation();
  if (location.pathname == '/auth/logout') return;

  useLoadUser();

  const user = useAuthStore(state => state.user);

  const leftItems = [
    { to: authorRoute.to, label: 'Author' },
    { to: callForPapersRoute.to, label: 'Call for papers' },
  ];
  const rightItems = [
    {
      to: logoutRoute.to,
      label: 'Logout',
      itemClass: styles.hasMeta,
      meta: user && { primary: user.email, secondary: `${user.firstName} ${user.lastName}` },
    },
  ];
  return <Nav leftItems={leftItems} rightItems={rightItems} containerClass={styles.alignLeft} />;
}
