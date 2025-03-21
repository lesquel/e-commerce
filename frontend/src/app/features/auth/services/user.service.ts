import { inject, Injectable } from '@angular/core';
import { User } from '../models';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private cookieService = inject(CookieService);
  private router = inject(Router);
  saveUser(user: User): void {
    if (!user.jwt) {
      console.error('No JWT token found in user data');
      return;
    }
    this.cookieService.set('user', JSON.stringify(user), {
      expires: 99999999,
      path: '/',
    });
  }

  getUser(): User | null {
    const user = this.cookieService.get('user');
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getUser();
  }

  logout(): void {
    this.cookieService.delete('user', '/');
    if (this.router.url === '/') {
      location.reload();
      return;
    }
    this.router.navigate(['/']);
  }
}
