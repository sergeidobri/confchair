export interface Conference {
  id: string;  // uuid
  name: string;
  site_url: string | null;
  description: string;
  start_date: string;  // ISO 8601 date string: YYYY-MM-DD
  start_time: string | null; // HH:mm:ss
  submission_deadline: string; // ISO 8601 datetime string: YYYY-MM-DDTHH:mm:ss
  acronym: string; // URL slug
  short_name: string | null;
  email: string;
  manuscript_deadline: string; // ISO 8601 datetime
  presentation_deadline: string; // ISO 8601 datetime
  confirmation_deadline: string; // ISO 8601 datetime
}
