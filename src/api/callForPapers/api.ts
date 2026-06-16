// import apiClient from '@api/apiClient';
// import { CALL_FOR_PAPERS_ENDPOINTS } from './endpoint';
import type { Conference } from '@/types/conference';
import type { getCallForPapersByAcronymRequest } from './types';

const conferences: Conference[] = [
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    name: 'International Conference on Advanced Computing',
    siteUrl: 'https://icac2025.org',
    description:
      'A premier conference focusing on cutting-edge research in computer science, artificial intelligence, and distributed systems. The event brings together leading researchers, practitioners, and industry experts to share their latest findings and innovations.',
    startDate: '2025-06-15',
    startTime: '09:00:00',
    submissionDeadline: '2027-02-15T23:59:59',
    acronym: 'icac2025',
    shortName: null,
    email: 'info@icac2025.org',
    manuscriptDeadline: '2025-03-20T23:59:59',
    presentationDeadline: '2025-05-10T23:59:59',
    confirmationDeadline: '2025-04-05T23:59:59',
  },
  {
    id: 'f0e9d8c7-b6a5-4321-fedc-ba9876543210',
    name: 'Global Summit on Sustainable Technologies',
    siteUrl: 'https://gsum2025.com',
    description:
      'An <b>international</b> forum dedicated to exploring sustainable technological solutions for global challenges. The <b>international</b> summit covers renewable energy, green computing, environmental informatics, and circular economy technologies.',
    startDate: '2025-09-22',
    startTime: '08:30:00',
    submissionDeadline: '2027-04-30T23:59:59',
    acronym: 'gsum2025',
    shortName: 'Global Summit',
    email: 'contact@gsum2025.com',
    manuscriptDeadline: '2025-06-15T23:59:59',
    presentationDeadline: '2025-08-20T23:59:59',
    confirmationDeadline: '2025-07-10T23:59:59',
  },
  {
    id: 'z9y8x7w6-v5u4-3210-pqrs-tuvwxyz12345',
    name: 'Annual Workshop on Machine Learning Frontiers Dedicated to Someone Who Was Very Honored Man',
    siteUrl: null,
    description:
      'A specialized workshop <b>international</b> focusing on the latest <b>international</b> advancements in machine <b>international</b> learning algorithms, neural architectures, and their applications in real-world scenarios. Features keynotes from top researchers and interactive sessions.',
    startDate: '2025-03-10',
    startTime: '10:00:00',
    submissionDeadline: '2025-01-15T23:59:59',
    acronym: 'mlf2025',
    shortName: 'Annual Workshop on Machine Learning Frontiers',
    email: 'workshop@mlf2025.net',
    manuscriptDeadline: '2025-02-01T23:59:59',
    presentationDeadline: '2025-02-25T23:59:59',
    confirmationDeadline: '2025-02-10T23:59:59',
  },
  {
    id: 'h3j4k5l6-m7n8-9012-abcd-efgh5678ijkl',
    name: 'European Conference on Web Technologies',
    siteUrl: 'https://ecwt-eu2025.eu',
    description:
      'The leading <i>European</i> conference on <b>international</b> web technologies, covering frontend <b>international</b> frameworks, backend architectures, web security, and emerging standards. Includes workshops on React, Node.js, and cloud deployment strategies.',
    startDate: '2025-07-05',
    startTime: '09:30:00',
    submissionDeadline: '2025-03-01T23:59:59',
    acronym: 'ecwt2025',
    shortName: null,
    email: 'submissions@ecwt-eu2025.eu',
    manuscriptDeadline: '2025-04-15T23:59:59',
    presentationDeadline: '2025-06-01T23:59:59',
    confirmationDeadline: '2025-05-01T23:59:59',
  },
  {
    id: 'p1q2r3s4-t5u6-7890-wxyz-abcdefgh1234',
    name: 'International Symposium on Data Science',
    siteUrl: 'https://isds2025.info',
    description:
      'A comprehensive symposium covering big data analytics, data visualization, statistical modeling, and database management. Focuses on interdisciplinary approaches to data science in business, healthcare, and social sciences.',
    startDate: '2025-11-18',
    startTime: '10:15:00',
    submissionDeadline: '2025-07-30T23:59:59',
    acronym: 'isds2025',
    shortName: null,
    email: 'symposium@isds2025.info',
    manuscriptDeadline: '2025-09-15T23:59:59',
    presentationDeadline: '2025-10-25T23:59:59',
    confirmationDeadline: '2025-08-30T23:59:59',
  },
];

export const callForPapersApi = {
  getCallForPapers: () => {
    return Promise.resolve(conferences);
  },
  getCallForPapersByAcronym: ({ acronym }: getCallForPapersByAcronymRequest) => {
    // apiClient.post(CALL_FOR_PAPERS_ENDPOINTS.GET_CALL_FOR_PAPERS_BY_ACRONYM, data),
    return Promise.resolve(conferences.find(conf => conf.acronym == acronym));
  },
};
