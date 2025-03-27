import { Routes } from '@angular/router';
import { siteRoutes } from '@features/site';
import { authRoutes } from '@features/auth';
import { productsRoutes } from '@features/products';
import { NotFoundPage } from './shared/pages/not-found.page';

export const routes: Routes = [
    ...siteRoutes,
    ...authRoutes,
    ...productsRoutes,
    { path: '**', component: NotFoundPage }
];
