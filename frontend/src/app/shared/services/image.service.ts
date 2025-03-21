import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Image } from '../models';
import { UserService } from '@features/auth/services';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private baseUrl = 'http://localhost:1337';
  private http = inject(HttpClient);
  private userService = inject(UserService);

  private jwt = this.userService.getUser()?.jwt;

  upload(file: File): Observable<Image[]> {
    const formData = new FormData();
    formData.append('files', file);
    return this.http
      .post<Image[]>(`${this.baseUrl}/api/upload`, formData, {
        headers: {
          Authorization: `Bearer ${this.jwt}`,
        },
      })
      .pipe(
        map((response) => {
          console.log('response', response);
          return response;
        })
      );
  }

  linkImagetoEntry(
    urlApi: string,
    imageId: number,
    documentIdEntity: string,
    fieldName: string
  ): Observable<any> {
    const formData = new FormData();
    formData.append(`${fieldName}`, JSON.stringify(imageId));

    return this.http.put<any>(
      `${this.baseUrl}${urlApi}${documentIdEntity}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${this.jwt}`,
        },
      }
    );
  }
}
