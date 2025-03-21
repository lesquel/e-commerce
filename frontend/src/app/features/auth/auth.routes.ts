import { Routes } from '@angular/router';
import { AuthLayout } from './auth.layout';
import { EditPage, LoginPage, RegisterPage } from './pages';
import { MePage } from './pages';
import { routesConfig } from './config';

export const authRoutes: Routes = [
  {
    path: routesConfig.auth.path,
    component: AuthLayout,
    children: [
      {
        path: routesConfig.login.path,
        component: LoginPage,
      },
      {
        path: routesConfig.register.path,
        component: RegisterPage,
      },
      {
        path: routesConfig.me.path,
        component: MePage,
        children: [
          {
            path: routesConfig.edit.path,
            component: EditPage,
          },
        ],
      },
    ],
  },
];
