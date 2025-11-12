import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  btnClass?: string;
}

export const Button = ({
  children,
  isLoading = false,
  disabled = false,
  btnClass = '',
  ...props
}: ButtonProps) => (
  <button
    {...props}
    disabled={disabled || isLoading}
    className={`${styles.btn} ${disabled || isLoading ? styles.btnDisabled : ''} ${btnClass}`}
  >
    {isLoading ? 'Loading...' : children}
  </button>
);
