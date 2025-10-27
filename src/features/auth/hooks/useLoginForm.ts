import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from '../schemas/loginSchema';
import { authApi } from '../../../api/auth/api';
import { navigateTo } from '../../../utils/navigate';
import { setAccessToken } from '../../../lib/auth';

export const useLoginForm = () => {

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),  // validate
    defaultValues: {  // иначе будут undefined
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await authApi.login({
        email: data.email,
        password: data.password,
      });

      setAccessToken(response.data.accessToken);

      navigateTo('/');
    } catch (error: any) {
      const message = error.response?.data?.message || 'Incorrect email or password';
      form.setError('root', { message });
    }
  };

  return {
    ...form,
    onSubmit,
  };
};