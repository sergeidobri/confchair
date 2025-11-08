import { AuthWindow } from '../AuthWindow/AuthWindow';
import { Button } from '../../../components/ui/Button/Button';
import { navigate } from './../../../utils/navigate';

const ConfirmEmailSentPage = () => {
  return (
    <AuthWindow
      heading="Email sent!"
      description="A confirmation email has been sent to your address. Please check your inbox and follow the instructions to verify your account."
    >
      <Button type="submit" onClick={() => navigate('/auth/login')}>
        Return
      </Button>
    </AuthWindow>
  );
};

export default ConfirmEmailSentPage;
