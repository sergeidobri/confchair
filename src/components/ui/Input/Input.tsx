import React, { type InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ error, className = '', ...props }, ref) => (
    <div className={styles.inputWrapper}>
      <input
        ref={ref}
        className={`${styles.input} ${error && styles['inputError']} ${className}`}
        {...props}
      />
      {error && <span className={styles.inputError}>{error}</span>}
    </div>
  ),
);
