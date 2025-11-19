import { z } from 'zod';

export type User = {
  email: string;
  title?: 'Mr.' | 'Mrs.' | 'Ms.' | 'Dr.' | 'Prof.' | null;
  firstName: string;
  lastName: string;
  affiliation?: string | null;
  country?: string | null;
  orcid?: string | null;
  webPage?: string | null;
};

export const userSchema = z.object({
  title: z.enum(['', 'Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.']).nullable().optional(),
  firstName: z
    .string()
    .min(1, 'First name is required')
    .trim()
    .regex(/^[a-zA-Z ]*$/, { error: 'No special symbols allowed' }),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .trim()
    .regex(/^[a-zA-Z ]*$/, { error: 'No special symbols allowed' }),
  affiliation: z.string().min(1, 'Affiliation is required').nullable(),
  country: z.string().min(1, 'Country is required'),
  orcid: z.string().optional().nullable(),
  webPage: z.string().optional().nullable(),
});

export type UserFormData = z.infer<typeof userSchema>;
