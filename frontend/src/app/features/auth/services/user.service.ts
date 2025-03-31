import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { User } from '../models';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private cookieService = inject(CookieService);
  private router = inject(Router);

  private isAuthenticatedSubject = signal<boolean>(this.checkUserAuth());
  

  private checkUserAuth(): boolean {
    return !!this.cookieService.get('user');
  }

  saveUser(user: User): void {
    if (!user.jwt) {
      console.error('No JWT token found in user data');
      return;
    }
    this.cookieService.set('user', JSON.stringify(user), {
      expires: 99999999,
      path: '/',
    });
    this.isAuthenticatedSubject.set(true);
  }

  getUser(): User | null {
    const user = this.cookieService.get('user');
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): Signal<boolean> {
    return this.isAuthenticatedSubject;
  }

  logout(): void {
    this.cookieService.delete('user', '/');
    this.isAuthenticatedSubject.set(false);
    if (this.router.url === '/') {
      location.reload();
      return;
    }
    this.router.navigate(['/']);
  }
}
