import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema, type UserFormData } from '@features/user/schemas/user';
import { usersApi } from '@api/users/api';
// import { useAuthStore } from '@/store/authStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { User } from '@/types/user';

type RemoveNullable<T> = {
  [K in keyof T as T[K] extends null | undefined ? never : K]: T[K];
};

interface UseUserFormProps {
  user: User;
  onSubmit: (data: UserFormData) => void;
  onCancel: () => void;
}

export const useUserForm = ({ user, onSubmit, onCancel }: UseUserFormProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: usersApi.updateUser,
    onSuccess: (updatedUser: UserFormData) => {
      queryClient.setQueryData(['getUser'], updatedUser);
      form.reset({ ...updatedUser });
    },
    onError: error => {
      console.error('Ошибка при обновлении пользователя:', error);
    },
  });

  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      title: user.title || null,
      firstName: user.firstName,
      lastName: user.lastName,
      affiliation: user.affiliation ? user.affiliation : '',
      country: user.country ? user.country : 'Russian Federation',
      orcid: user.orcid || null,
      webPage: user.webPage || null,
    },
  });

  const handleSubmit = form.handleSubmit(async (data: UserFormData) => {
    const cleanData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value != null),
    ) as RemoveNullable<UserFormData>;
    try {
      console.log(data);
      mutation.mutate(cleanData);
      onSubmit(data);
    } catch (error: any) {
      const message = error?.message || 'Incorrect data';
      form.setError('root', { message });
    }
  });

  const handleCancel = () => {
    form.reset();
    onCancel();
  };

  return {
    form,
    handleSubmit,
    handleCancel,
  };
};
