import { z } from 'zod';

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
