import styles from './Form.module.css';
import { Input } from '@components/ui/Input/Input';
import { Button } from '@components/ui/Button/Button';
import { useLoginForm } from '@features/auth/hooks/useLoginForm';
import FormField from '@components/ui/FormField/FormField';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles['form']}>
      <FormField label="email" required={true}>
        <Input
          id="email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          disabled={isSubmitting}
        />
      </FormField>

      <FormField label="password" required={true}>
        <Input
          id="password"
          type="password"
          {...register('password')}
          error={errors.password?.message}
          disabled={isSubmitting}
        />
      </FormField>

      {errors.root && <div className={styles.formError}>{errors.root.message}</div>}

      <Button type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
        Sign In
      </Button>
    </form>
  );
};
