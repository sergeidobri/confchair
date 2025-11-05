import { useEffect } from "react";
import { useNavigate } from "react-router";
import { isAuthenticated } from "../../lib/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/auth/login", { replace: true });
    }
  }, [navigate]);

  return isAuthenticated() ? <>{children}</> : null;
};
