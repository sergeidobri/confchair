import styles from './AuthWindow.module.css';
import type { AuthWindowProps } from './auth-window.props';

export const AuthWindow = ({ heading, description, children, additionalInfo }: AuthWindowProps) => {
  return (
    <div className={styles.windowContainer}>
      <div className={styles.window}>
        <h1 className={styles.heading}>{heading}</h1>
        <h2 className={styles.description}>{description}</h2>
        {children}
        {additionalInfo && <div className={styles.additionalInfo}>{additionalInfo}</div>}
      </div>
    </div>
  );
};
