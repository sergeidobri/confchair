import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { toast } from 'react-toastify';
import { authApi } from '../../../api/auth/api';

const ConfirmEmailRoute = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmEmail = async () => {
      const token = searchParams.get('token');

      if (!token) {
        toast.error('The token is absent');
        navigate('/auth/login');
        return;
      }

      try {
        const response = await authApi.confirmEmail({ token });
        if (response.status === 200) {
          toast.success('The email was successfully confirmed!');
        } else {
          toast.error('Unknown error while confirming email.');
        }
      } catch (error: any) {
        if (error.response?.status >= 400 && error.response?.status < 500) {
          toast.error('Error while confirming. The link is expired or invalid');
        } else {
          toast.error('An error occured while confirming an email.');
        }
      } finally {
        navigate('/auth/login');
      }
    };

    confirmEmail();
  }, [searchParams, navigate]);

  return <div>Confirming...</div>;
};

export default ConfirmEmailRoute;
