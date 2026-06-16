import Link from '@/components/ui/Link/Link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="mailto:support@confchair.org">support@confchair.org</Link>
    </footer>
  );
};

export default Footer;
