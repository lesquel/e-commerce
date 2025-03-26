import { inject, Injectable } from '@angular/core';


import { environment } from '@environments/environment.dev';
import { Observable } from 'rxjs';
import { Product } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseApiUrl = environment.baseApiUrl
  private http = inject(HttpClient);


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl + "api/products")
  }

  constructor() { }
}
