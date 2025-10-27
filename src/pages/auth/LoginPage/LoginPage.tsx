import styles from "./LoginPage.module.css";
import { LoginForm } from "../../../features/auth/components/LoginForm/LoginForm";
import { NavLink } from "react-router-dom";
import { AuthWindow } from "../AuthWindow/AuthWindow";

export const LoginPage = () => {
  const additionalInfo = (
    <>
      <p>
        Don't have an account?{" "}
        <NavLink to="/auth/register" className={styles.link}>
          Sign up now
        </NavLink>
        .
      </p>
      <p>
        Forgot password?{" "}
        <NavLink to="/auth/recover" className={styles.link}>
          Recover
        </NavLink>
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
