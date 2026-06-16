import styles from './Nav.module.css';
import { Route as authorRoute } from '@routes/author';
import { Route as callForPapersRoute } from '@/routes/call-for-papers/index';
import { Route as logoutRoute } from '@routes/auth/logout';
import { Nav } from './Nav';
import { useQuery } from '@tanstack/react-query';
import { usersApi } from '@/api/users/api';

export function UserNav() {
  const { data: user } = useQuery({ queryKey: ['getUser'], queryFn: usersApi.getUser });

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
