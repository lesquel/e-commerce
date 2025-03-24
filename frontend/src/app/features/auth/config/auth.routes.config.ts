import { IRoute } from "@app/shared/types";

export const authRoutesConfig: Record<string, IRoute> = {
  auth: {
    path: 'auth',
    url: '/auth',
    label: 'Auth'
  },
  login: {
    path: 'login',
    url: '/auth/login',
    label: 'Login'

  },
  register: {
    path: 'register',
    url: '/auth/register',
    label: 'Register'
  },
  me: {
    path: 'me',
    url: '/auth/me',
    label: 'Me'
  },
  edit: {
    path: 'edit',
    url: '/auth/me/edit',
    label: 'Edit'
  },
};
