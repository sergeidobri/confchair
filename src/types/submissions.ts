import type { SubmissionStatuses } from '@/lib/submissions';
import type { User } from './user';

export interface Submission {
  number: number; // ?
  hasPdf: boolean;
  author: User; // ?
  title: string;
  topic: string;
  presentationFormat: PresentationFormatType;
  submittedAt: Date; // ?
  status: SubmissionStatusType[];
  forum: string; // ?
}

export interface SubmissionDetail extends Submission {
  keywords: string[];
  abstract: string;
  fundingInformation: string | null;
  updatedAt: Date;
  importantNotice: string | null;
}

export type PresentationFormatType = 'on-sight' | 'other';

export type SubmissionStatusType = keyof typeof SubmissionStatuses;
