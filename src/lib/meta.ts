import type { TRoutes } from '@/types/routes';

const keywords = {
  name: 'keywords',
  content: 'space, flights, scitech, forum, engineering, mechanics',
};

export const Routes: TRoutes = {
  author: {
    name: 'author-profile',
    path: '/author',
    meta: [
      {
        title: 'Author Profile',
      },
      {
        name: 'description',
        content: '',
      },
      keywords,
    ],
    showInNav: true,
  },
  signIn: {
    name: 'sign-in',
    path: '/sign-in',
    meta: [
      {
        title: 'Sign In',
      },
      {
        name: 'description',
        content: '',
      },
      keywords,
    ],
    showInNav: true,
  },
  signUp: {
    name: 'sign-up',
    path: '/sign-up',
    showInNav: true,
    meta: [{ title: 'Sign Up' }, { name: 'description', content: '' }, keywords],
  },

  callForPapers: {
    name: 'call-for-papers',
    path: '/call-for-papers',
    meta: [
      {
        title: 'Call For Papers',
      },
      {
        name: 'description',
        content: '',
      },
      keywords,
    ],
    showInNav: true,
  },
};
