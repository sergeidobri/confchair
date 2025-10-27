import styles from "./RegisterPage.module.css";
import { NavLink } from "react-router-dom";
import { AuthWindow } from "../AuthWindow/AuthWindow";
import { RegisterForm } from "../../../features/auth/components/RegisterForm/RegisterForm";

export const RegisterPage = () => {
  const additionalInfo = (
    <>
      <p>
        Already have an account?{" "}
        <NavLink to="/auth/login" className={styles.link}>
          Sign in now
        </NavLink>
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
