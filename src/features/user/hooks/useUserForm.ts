import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema, type User, type UserFormData } from '@features/user/schemas/user';

interface UseUserFormProps {
  user: User;
  onSubmit: (data: UserFormData) => void;
}

export const useUserForm = ({ user, onSubmit }: UseUserFormProps) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      title: user.title || null,
      firstName: user.firstName,
      lastName: user.lastName,
      country: 'Russian Federation',
      orcid: user.orcid || null,
      webPage: user.webPage || null,
    },
  });

  const handleSubmit = form.handleSubmit(data => {
    onSubmit(data);
  });

  return {
    form,
    handleSubmit,
  };
};
