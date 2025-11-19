import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema, type User, type UserFormData } from '@features/user/schemas/user';
import { usersApi } from '@api/users/api';
import { useAuthStore } from '@/store/authStore';

type RemoveNullable<T> = {
  [K in keyof T as T[K] extends null | undefined ? never : K]: T[K];
};

interface UseUserFormProps {
  user: User;
  onSubmit: (data: UserFormData) => void;
  onCancel: () => void;
}

export const useUserForm = ({ user, onSubmit, onCancel }: UseUserFormProps) => {
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
      const updatedUser = await usersApi.updateUser(cleanData);

      useAuthStore.getState().setUser(updatedUser);
      onSubmit(data);
      form.reset({ ...updatedUser });
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
