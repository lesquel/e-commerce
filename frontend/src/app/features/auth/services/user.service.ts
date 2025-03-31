import { inject, Injectable } from '@angular/core';
import { User } from '../models';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

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
    this.isAuthenticatedSubject.next(true)
  }

  getUser(): User | null {
    const user = this.cookieService.get('user');
    return user ? JSON.parse(user) : null;
  }

  // isAuthenticated(): boolean {
  //   return !!this.getUser();
  // }
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value
  }



  logout(): void {
    this.cookieService.delete('user', '/');
    if (this.router.url === '/') {
      location.reload();
      this.isAuthenticatedSubject.next(false); 

      return;
    }
    this.router.navigate(['/']);
  }
}
