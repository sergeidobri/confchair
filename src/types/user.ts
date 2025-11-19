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
