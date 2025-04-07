import { Routes } from '@angular/router';
import { ProfileLayout } from './profile.layout';
import { profileRoutesConfig } from './config';
import { MyProfilePage } from './pages';
import { isNotLoggedGuard } from '../auth/guards';
export const profileRoutes: Routes = [
  {
    path: profileRoutesConfig.base.path,
    component: ProfileLayout,
    children: [
      {
        // my profile
        path: profileRoutesConfig.children.myProfile.path,
        component: MyProfilePage,
        canActivate: [isNotLoggedGuard],
      },
    ],
  },
];
