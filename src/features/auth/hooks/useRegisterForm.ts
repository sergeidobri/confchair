import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';
import { registerSchema, type RegisterFormData } from '../schemas/registerSchema';
import { authApi } from '../../../api/auth/api';

export const useRegisterForm = () => {
  const navigate = useNavigate();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await authApi.register({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      });

      navigate('/auth/confirm-email-sent');
    } catch (error: any) {
      const message =
        error.response?.data?.message || 'Registration failed. Please try again.';
      form.setError('root', { message });
    }
  };

  return {
    ...form,
    onSubmit,
  };
};