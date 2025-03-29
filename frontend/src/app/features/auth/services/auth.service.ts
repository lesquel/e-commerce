import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { map, catchError, Observable, throwError } from 'rxjs';
import { userAdapter } from '../adapters';
import { Router } from '@angular/router';
import { ImageService } from '../../../shared/services';
import { UserService } from './user.service';
import { authRoutesConfig } from '../config';

import { environment } from '@environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseApiUrl = environment.baseApiUrl;
  private http = inject(HttpClient);
  private router = inject(Router);
  private userService = inject(UserService);

  private imageService = inject(ImageService);

  login(identifier: string, password: string): Observable<User> {
    return this.http
      .post<User>(this.baseApiUrl + 'api/auth/local/', {
        identifier,
        password,
      })
      .pipe(
        map((response: any) => {
          const adaptedUser = userAdapter(response);
          this.userService.saveUser(adaptedUser);
          this.router.navigate(['/']);
          localStorage.setItem('user', JSON.stringify(adaptedUser.jwt));
          return adaptedUser;
        }),
        catchError((error) => {
          console.error(error);
          return throwError(
            () => new Error(error.error.error.message || 'Login failed')
          );
        })
      );
  }

  me(user: User): Observable<User> {
    const jwt = user.jwt;
    return this.http
      .get<User>(this.baseApiUrl + 'api/users/me', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .pipe(
        map((user) => {
          return userAdapter({ user: user, jwt });
        }),
        catchError((error) => {
          return throwError(() => new Error(error.message || 'Me failed'));
        })
      );
  }

  register({
    email,
    username,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }): Observable<User> {
    return this.http
      .post<User>(`${this.baseApiUrl}api/auth/local/register`, {
        email,
        username,
        password,
      })
      .pipe(
        map((user) => {
          const adaptedUser = userAdapter(user);
          this.userService.saveUser(adaptedUser);
          this.router.navigate(['/']);
          return adaptedUser;
        }),
        catchError((error) => {
          console.error(error);
          return throwError(
            () => new Error(error.error.error.message || 'Register failed')
          );
        })
      );
  }

  edit({
    username,
    email,
  }: {
    username: string;
    email: string;
  }): Observable<User> {
    const _user = this.userService.getUser();
    if (!_user) {
      return throwError(() => new Error('No user found'));
    }
    const jwt = _user?.jwt;
    if (!jwt) {
      return throwError(() => new Error('No JWT token available'));
    }
    return this.http
      .put<User>(
        `${this.baseApiUrl}api/users/${_user.id}`,
        { username, email },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .pipe(
        map((user) => {
          const userUpdated = userAdapter({ user: user, jwt });
          this.userService.saveUser(userUpdated);
          this.router.navigate([authRoutesConfig.children.me.url]);
          return userUpdated;
        }),
        catchError((error) => {
          console.error(error);
          return throwError(
            () => new Error(error.error.error.message || 'Me failed')
          );
        })
      );
  }
}
