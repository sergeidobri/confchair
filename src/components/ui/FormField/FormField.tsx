import type { ReactNode } from 'react';
import styles from './FormField.module.css';
import cn from '@utils/classname-func';

interface Props {
  label: string;
  required?: boolean;
  width?: 'original' | 'half';
  children: ReactNode;
}

const FormField = ({ label, required = false, width = 'original', children }: Props) => {
  return (
    <div
      className={cn(styles['formField'], {
        [styles['halfFormField']]: width === 'half',
      })}
    >
      <label htmlFor={label} className={styles['formFieldLabel']}>
        {label}
        {required && <span className={styles['requiredStar']}>*</span>}
      </label>
      {children}
    </div>
  );
};

export default FormField;
