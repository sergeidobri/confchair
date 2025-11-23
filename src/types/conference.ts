export interface Conference {
  id: string; // uuid
  name: string;
  siteUrl: string | null;
  description: string;
  startDate: string; // ISO 8601 date string: YYYY-MM-DD
  startTime: string | null; // HH:mm:ss
  submissionDeadline: string; // ISO 8601 datetime string: YYYY-MM-DDTHH:mm:ss
  acronym: string; // URL slug
  shortName: string | null;
  email: string;
  manuscriptDeadline: string; // ISO 8601 datetime
  presentationDeadline: string; // ISO 8601 datetime
  confirmationDeadline: string; // ISO 8601 datetime
}
