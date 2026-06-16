import React from 'react';
import Heading from '@components/ui/Heading/Heading';
import styles from './AuthWindow.module.css';

export interface Props {
  heading: string;
  description: string;
  children: React.ReactNode;
  additionalInfo?: React.ReactNode;
}

export const AuthWindow = ({ heading, description, children, additionalInfo }: Props) => {
  return (
    <div className={styles.windowContainer}>
      <div className={styles.window}>
        <Heading text={heading} headingClass={styles.heading} />
        <h2 className={styles.description}>{description}</h2>
        {children}
        {additionalInfo && <div className={styles.additionalInfo}>{additionalInfo}</div>}
      </div>
    </div>
  );
};
