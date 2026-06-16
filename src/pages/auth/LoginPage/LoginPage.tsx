import { AuthWindow } from '../AuthWindow/AuthWindow';
import { LoginForm } from '@features/auth/components/Forms/LoginForm';
import { Route as loginRoute } from '@routes/auth/login';
import { Route as registerRoute } from '@routes/auth/register';
import Link from '@/components/ui/Link/Link';

export const LoginPage = () => {
  const additionalInfo = (
    <>
      <p>
        Don't have an account?{' '}
        <Link to={registerRoute.to} underline>
          Sign up now
        </Link>
        .
      </p>
      <p>
        Forgot password?{' '}
        <Link to={loginRoute.to} underline>
          Recover
        </Link>
        .
      </p>
    </>
  );

  return (
    <AuthWindow
      heading="Sign In"
      description="Please fill in your credentials to sign in"
      additionalInfo={additionalInfo}
    >
      <LoginForm />
    </AuthWindow>
  );
};
