import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment.development';
import { catchError, map, Observable, throwError } from 'rxjs';
import { InfoUser } from '../models';
import { infoUserAdapter } from '../adapters';

@Injectable({
  providedIn: 'root',
})
export class InfoUserService {
  private readonly baseUrl = environment.baseApiUrl;
  private readonly infoUserUrl = `${this.baseUrl}api/info-users`;
  private readonly http = inject(HttpClient);

  getInfoUser(): Observable<InfoUser> {
    return this.http.get<InfoUser>(this.infoUserUrl).pipe(
      map((infoUser: InfoUser) => infoUserAdapter(infoUser)),
      catchError((error) => {
        console.error(error);
        return throwError(
          () => new Error(error.error.error.message || 'Get info user failed')
        );
      })
    );
  }

  createInfoUser(infoUser: InfoUser): Observable<InfoUser> {
    return this.http.post<InfoUser>(this.infoUserUrl, infoUser).pipe(
      map((infoUser: InfoUser) => infoUserAdapter(infoUser)),
      catchError((error) => {
        console.error(error);
        return throwError(
          () =>
            new Error(error.error.error.message || 'Create info user failed')
        );
      })
    );
  }
}
