import { inject, Injectable } from '@angular/core';


import { environment } from '@environments/environment.development';
import { Observable } from 'rxjs';
import { Product } from '../models';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '@app/shared/types/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseApiUrl = environment.baseApiUrl
  private http = inject(HttpClient);


  productsUrl = `${this.baseApiUrl}api/products/`

  getProducts(): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(this.productsUrl)
  }
  getProductByDocumentId(documentId:string): Observable<ApiResponse<Product>> {
    return this.http.get<ApiResponse<Product>>(this.productsUrl + documentId)
  }

}
