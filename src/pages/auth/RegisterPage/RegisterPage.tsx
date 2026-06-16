import { AuthWindow } from '@pages/auth/AuthWindow/AuthWindow';
import { RegisterForm } from '@features/auth/components/Forms/RegisterForm';
import { Route as loginRoute } from '@routes/auth/login';
import Link from '@/components/ui/Link/Link';

export const RegisterPage = () => {
  const additionalInfo = (
    <>
      <p>
        Already have an account?{' '}
        <Link to={loginRoute.to} underline>
          Sign in now
        </Link>
        .
      </p>
    </>
  );

  return (
    <AuthWindow
      heading="Create account"
      description="Please fill in your credentials to create new account"
      additionalInfo={additionalInfo}
    >
      <RegisterForm />
    </AuthWindow>
  );
};
