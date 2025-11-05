import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/Button";
import { AuthWindow } from "../AuthWindow/AuthWindow";

const ConfirmEmailPage = () => {
  const navigate = useNavigate();

  return (
    <AuthWindow
      heading="Email sent!"
      description="A confirmation email has been sent to your address. Please check your inbox and follow the instructions to verify your account."
    >
      <Button type="submit" onClick={() => navigate("auth/login")}>
        Return
      </Button>
    </AuthWindow>
  );
};

export default ConfirmEmailPage;
