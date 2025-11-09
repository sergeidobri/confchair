import styles from './Nav.module.css';
import { Route as authorRoute } from '@routes/author';
import { Route as callForPapersRoute } from '@routes/call-for-papers';
import Nav from './Nav';

export function UserNav() {
  const items = [
    { to: authorRoute.to, label: 'Author' },
    { to: callForPapersRoute.to, label: 'Call for papers' },
  ];
  return <Nav items={items} containerClass={styles.alignLeft} />;
}
