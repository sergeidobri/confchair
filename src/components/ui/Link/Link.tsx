import styles from './Link.module.css';
import cn from '@/utils/classname-func';
import { Link as LinkReact } from '@tanstack/react-router';

interface Props {
  children: React.ReactNode;
  to?: string;
  className?: string;
  underline?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top' | '_unfencedTop';
  onClick?: () => void;
}

const Link = ({ children, to, className, target, underline = false, onClick }: Props) => {
  if (!to) {
    return (
      <button
        onClick={onClick}
        className={cn(styles.link, className, { [styles.underline]: underline })}
      >
        {children}
      </button>
    );
  } else {
    return (
      <LinkReact
        to={to}
        onClick={onClick}
        className={cn(styles.link, className, { [styles.underline]: underline })}
        target={target}
      >
        {children}
      </LinkReact>
    );
  }
};

export default Link;
