import { Routes } from '@angular/router';
import { siteRoutes } from '@features/site';
import { authRoutes } from '@features/auth';
import { NotFoundPage } from './shared/pages/not-found.page';

export const routes: Routes = [
    ...siteRoutes,
    ...authRoutes,
    { path: '**', component: NotFoundPage }
];
