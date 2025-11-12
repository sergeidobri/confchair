import styles from './Select.module.css';
import type { InputHTMLAttributes } from 'react';
import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, Props>(
  ({ options, error, className = '', ...props }, ref) => (
    <div className={styles.selectWrapper}>
      <select
        ref={ref}
        className={`${styles.select} ${error && styles.selectError} ${className ? className : ''}`}
        {...props}
      >
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.selectError}>{error}</span>}
    </div>
  ),
);
