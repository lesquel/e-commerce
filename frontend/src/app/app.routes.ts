import { Routes } from '@angular/router';
import { siteRoutes } from '@features/site';
import { authRoutes } from '@features/auth';

export const routes: Routes = [...siteRoutes, ...authRoutes];
