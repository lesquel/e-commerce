import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Global } from '../models/global.model';
import { map, Observable } from 'rxjs';
import { GlobalAdapter } from '../adapters';
import { HeroHome } from '../models';
import { HeroHomeAdapter } from '../adapters/site.adapters';

interface ManyData<T> {
  url: string;
  adapter: (data: any) => T;
}

@Injectable({
  providedIn: 'root',
})
export class SiteService {
  private baseUrl = 'http://localhost:1337/api';
  private http = inject(HttpClient);

  getGlobalData(): Observable<Global> {
    return this.http
      .get<Global>(`${this.baseUrl}/global?populate=favicon`)
      .pipe(map((data) => GlobalAdapter(data)));
  }

  // getHeroHomeData(): Observable<HeroHome> {
  //   return this.http
  //     .get<HeroHome>(`${this.baseUrl}/hero?populate=cover`)
  //     .pipe(map((data) => HeroHomeAdapter(data)));
  // }

  getManyData<T>(data: ManyData<T>): Observable<T> {
    return this.http
      .get<T>(`${this.baseUrl}${data.url}`)
      .pipe(map((respoinse) => data.adapter(respoinse)));
  }
}
