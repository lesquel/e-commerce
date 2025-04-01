import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { User } from '../models';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { get } from 'http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private cookieService = inject(CookieService);
  private router = inject(Router);

<<<<<<< HEAD
  private isAuthenticatedSubject = signal<boolean>(this.checkUserAuth());
=======
  private isAuthenticatedSignal = signal<boolean>(this.checkUserAuth());

>>>>>>> 765d6f4207e9b5c7ca075f46a1e48ffb6176ee6b

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
    this.isAuthenticatedSignal.set(true);
  }

  getUser(): User | null {
    const user = this.cookieService.get('user');
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): Signal<boolean> {
    return this.isAuthenticatedSignal;
  }

  logout(): void {
    this.cookieService.delete('user', '/');
    this.isAuthenticatedSignal.set(false);
    this.router.navigate(['/']);
  }

  useTokenClient(): string {
    return 'Bearer ' + this.getUser()?.jwt;
  }
}
