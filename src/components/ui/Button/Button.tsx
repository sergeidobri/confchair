import type { ButtonHTMLAttributes } from 'react';
import cn from '@utils/classname-func';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = ({
  children,
  isLoading = false,
  disabled = false,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    disabled={disabled || isLoading}
    className={cn(styles['btn'], {
      [styles['btn-disabled']]: isLoading || disabled,
    })}
  >
    {isLoading ? 'Loading...' : children}
  </button>
);
