import type { Submission, SubmissionDetail } from '@/types/submissions';

const submissions: Submission[] = [
  {
    number: 125,
    hasPdf: true,
    author: {
      email: 'hatefulserq@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Sergey',
    },
    presentationFormat: 'on-sight',
    status: ['withdrawn', 'under-review'],
    submittedAt: new Date(2025, 9, 11, 21, 36, 41),
    title: 'sadas',
    topic: 'Earth Observations',
    forum: '6th SciTech Forum on Space Engineering and Operations Support',
  },
  {
    number: 126,
    hasPdf: false,
    author: {
      email: 'hatefulserq@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Sergey',
    },
    presentationFormat: 'other',
    status: ['accepted'],
    submittedAt: new Date(),
    title: 'Some title',
    topic:
      'Earth Observations something that is really big and cannot be displayed properly in one single line in table',
    forum: '6th SciTech Forum on Space Engineering and Operations Support',
  },
  {
    number: 2323,
    hasPdf: true,
    author: {
      email: 'hatefulserq@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Sergey',
    },
    presentationFormat: 'other',
    status: ['accepted', 'under-review'],
    submittedAt: new Date(2026, 1, 1, 10, 53, 41),
    title: 'Very big title that cannot be displayed properly in one line',
    topic: 'Earth Observations',
    forum: '6th SciTech Forum on Space Engineering and Operations Support',
  },
  {
    number: 228,
    hasPdf: true,
    author: {
      email: 'hatefulserq@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Sergey',
    },
    presentationFormat: 'other',
    status: ['accepted', 'under-review'],
    submittedAt: new Date(2026, 1, 1, 10, 53, 41),
    title:
      'Title with bug ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    topic: 'Earth Observations',
    forum: '6th SciTech Forum on Space Engineering and Operations Support',
  },
  {
    number: 12,
    hasPdf: true,
    author: {
      email: 'hatefulserq@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Sergey',
    },
    presentationFormat: 'on-sight',
    status: ['accepted', 'under-review'],
    submittedAt: new Date(2026, 1, 1, 10, 53, 41),
    title: 'Some title',
    topic: 'Earth Observations',
    forum: '7th SciTech Forum on Space Engineering and Operations Support',
  },
  {
    number: 543,
    hasPdf: false,
    author: {
      email: 'hatefulserq@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Sergey',
    },
    presentationFormat: 'other',
    status: ['accepted'],
    submittedAt: new Date(),
    title: 'Some title',
    topic: 'Earth Observations',
    forum: '7th SciTech Forum on Space Engineering and Operations Support',
  },
  {
    number: 221,
    hasPdf: false,
    author: {
      email: 'hatefulserq@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Sergey',
    },
    presentationFormat: 'on-sight',
    status: ['accepted'],
    submittedAt: new Date(),
    title: 'Some title',
    topic: 'Earth Observations',
    forum: '8th SciTech Forum on Space Engineering and Operations Support',
  },
];

const submissionsDetailed: SubmissionDetail[] = [
  {
    number: 125,
    hasPdf: true,
    author: {
      email: 'hatefulserq@yandex.ru',
      firstName: 'Sergey',
      lastName: 'Sergey',
    },
    presentationFormat: 'on-sight',
    status: ['withdrawn', 'under-review'],
    submittedAt: new Date(2025, 9, 11, 21, 36, 41),
    title: 'sadas',
    topic: 'Earth Observations',
    forum: '6th SciTech Forum on Space Engineering and Operations Support',
    keywords: ['space', 'satellite', 'something'],
    abstract:
      'Abstract info about something Abstract info about something Abstract info about something Abstract info about somethingv vAbstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about somethingAbstract info about something Abstract info about something Abstract info about something Abstract info about somethingv vAbstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about somethingAbstract info about something Abstract info about something Abstract info about something Abstract info about somethingv vAbstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about somethingAbstract info about something Abstract info about something Abstract info about something Abstract info about somethingv vAbstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about somethingAbstract info about something Abstract info about something Abstract info about something Abstract info about somethingv vAbstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about somethingAbstract info about something Abstract info about something Abstract info about something Abstract info about somethingv vAbstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about somethingAbstract info about something Abstract info about something Abstract info about something Abstract info about somethingv vAbstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about somethingAbstract info about something Abstract info about something Abstract info about something Abstract info about somethingv vAbstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about somethingAbstract info about something Abstract info about something Abstract info about something Abstract info about somethingv vAbstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about somethingAbstract info about something Abstract info about something Abstract info about something Abstract info about somethingv vAbstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about something Abstract info about something',
    fundingInformation: null,
    updatedAt: new Date(),
    importantNotice: 'I confirm that my manuscript can be published',
  },
];

export const submissionsApi = {
  getSubmissions: () => {
    return Promise.resolve(submissions);
  },
  getSubmissionDetail: (number: number) => {
    return Promise.resolve(submissionsDetailed.find(sub => sub.number == number));
  },
};
