import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services';
import { siteRoutesConfig } from '@app/features/site';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const router = inject(Router)

  if (userService.isAuthenticated()) {
    router.navigate([siteRoutesConfig.base.url])
    return false
  }

  return true;
};
