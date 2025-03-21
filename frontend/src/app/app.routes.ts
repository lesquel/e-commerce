import { Routes } from '@angular/router';
import { siteRoutes } from '@feature/site';
import { authRoutes } from '@feature/auth';

export const routes: Routes = [...siteRoutes, ...authRoutes];
