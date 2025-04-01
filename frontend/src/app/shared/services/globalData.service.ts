import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Global } from '../../features/site/models/global.model';
import { map, Observable } from 'rxjs';
import { GlobalAdapter } from '../../features/site/adapters';
import { environment } from '@environments/environment.development';


interface ManyData<T> {
  url: string;
  adapter: (data: any) => T;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  private baseUrl = environment.baseApiUrl;
  private http = inject(HttpClient);

  getGlobalData(): Observable<Global> {
    return this.http
      .get<Global>(`${this.baseUrl}api/global?populate=favicon`)
      .pipe(map((data) => GlobalAdapter(data)));
  }



  getManyData<T>(data: ManyData<T>): Observable<T> {
    return this.http
      .get<T>(`${this.baseUrl}${data.url}`)
      .pipe(map((respoinse) => data.adapter(respoinse)));
  }
}
