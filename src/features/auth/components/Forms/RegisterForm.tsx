import styles from "./Form.module.css";
import { Input } from "../../../../components/ui/Input/Input";
import FormField from "../../../../components/ui/FormField/FormField";
import { Button } from "../../../../components/ui/Button/Button";
import { useRegisterForm } from "../../hooks/useRegisterForm";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useRegisterForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['form']} noValidate>
      <FormField label="Email" required>
        <Input
          id="email"
          type="email"
          {...register("email")}
          error={errors.email?.message}
          disabled={isSubmitting}
        />
      </FormField>

      <FormField label="First name" width="half" required>
        <Input
          id="firstName"
          {...register("firstName")}
          error={errors.firstName?.message}
          disabled={isSubmitting}
        />
      </FormField>

      <FormField label="Last name" width="half" required>
        <Input
          id="lastName"
          {...register("lastName")}
          error={errors.lastName?.message}
          disabled={isSubmitting}
        />
      </FormField>

      <FormField label="Password" required>
        <Input
          id="password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
          disabled={isSubmitting}
        />
      </FormField>

      <FormField label="Confirm password" required>
        <Input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
          disabled={isSubmitting}
        />
      </FormField>

      {errors.root && (
        <div className={styles.formError}>{errors.root.message}</div>
      )}

      <Button type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
        Sign up
      </Button>
    </form>
  );
};
