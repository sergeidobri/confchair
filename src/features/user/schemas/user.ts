import { z } from 'zod';

export type User = {
  email: string;
  title?: 'Mr.' | 'Mrs.' | 'Ms.' | 'Dr.' | 'Prof.' | null;
  firstName: string;
  lastName: string;
  affiliation?: string | null;
  country?: string | null; // в будущем - что-то одно из выпадающего списка стран
  orcid?: string | null;
  webPage?: string | null;
};

export const userSchema = z.object({
  title: z.enum(['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.']).nullable().optional(),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  affiliation: z.string(),
  country: z.string(),
  orcid: z.string().optional().nullable(),
  webPage: z.string().optional().nullable(),
});

export type UserFormData = z.infer<typeof userSchema>;
