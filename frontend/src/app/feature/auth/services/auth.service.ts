import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { map, catchError, Observable, throwError } from 'rxjs';
import { userAdapter } from '../adapters';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ImageService } from '../../../shared/services';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:1337/';
  private http = inject(HttpClient);
  private router = inject(Router);
  private userService = inject(UserService);

  private imageService = inject(ImageService);

  login(identifier: string, password: string): Observable<User> {
    return this.http
      .post<User>(this.baseUrl + 'api/auth/local/', {
        identifier,
        password,
      })
      .pipe(
        map((response: any) => {
          const adaptedUser = userAdapter(response);
          this.userService.saveUser(adaptedUser);
          this.router.navigate(['/']);
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

  me(user : User): Observable<User> {
    const jwt = user.jwt;
    return this.http
      .get<User>(this.baseUrl + 'api/users/me?populate=avatar', {
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

  register(
    email: string,
    username: string,
    password: string
  ): Observable<User> {
    return this.http
      .post<User>(`${this.baseUrl}api/auth/local/register`, {
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

  edit(form: FormData): Observable<User> {
    const _user = this.userService.getUser();
    if (!_user) {
      return throwError(() => new Error('No user found'));
    }
    const jwt = _user?.jwt;
    if (!jwt) {
      return throwError(() => new Error('No JWT token available'));
    }
    console.log('Sending data to Strapi:', {
      userId: _user.id,
      formEntries: Array.from(form.entries())
    });
    return this.http
      .put<User>(`${this.baseUrl}api/users/${_user.id}`, form, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .pipe(
        map((user) => {
          const userUpdated = userAdapter({ user: user, jwt });
          this.userService.saveUser(userUpdated);
          if (!form.get('avatar')) {
            this.router.navigate(['/auth/me']);
            return userUpdated;
          }
          this.imageService.upload(form.get('avatar') as File).subscribe({
            next: (response) => {
              this.imageService.linkImagetoEntry(
                '/api/users/',
                response[0].id,
                JSON.stringify(userUpdated.id),
                'avatar'
              ).subscribe({
                next: (response) => {
                  this.router.navigate(['/auth/me']);
                },
                error: (error) => {
                  console.error(error);
                },
              });
            },
          });
          return userUpdated;
        }),
        catchError((error) => {
          console.error(error);
          return throwError(() => new Error(error.error.error.message || 'Me failed'));
        })
      );
  }
}
