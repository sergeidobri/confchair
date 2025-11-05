import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { authApi } from "../../../api/auth/api";

const ConfirmEmailRoute = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmEmail = async () => {
      const token = searchParams.get("token");

      if (!token) {
        toast.error("Отсутствует токен подтверждения");
        navigate("/auth/login");
        return;
      }

      try {
        const response = await authApi.confirmEmail({ token });
        if (response.status === 200) {
          toast.success("Почта успешно подтверждена!");
        } else {
          toast.error("Неизвестная ошибка при подтверждении почты.");
        }
      } catch (error: any) {
        if (error.response?.status >= 400 && error.response?.status < 500) {
          toast.error(
            "Ошибка подтверждения почты. Ссылка недействительна или устарела."
          );
        } else {
          toast.error("Произошла ошибка при подтверждении почты.");
        }
      } finally {
        navigate("/auth/login");
      }
    };

    confirmEmail();
  }, [searchParams, navigate]);

  return <div>Подтверждение почты...</div>;
};

export default ConfirmEmailRoute;
