import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment.development';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Product } from '../models';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '@app/shared/types/apiResponse';
import { productAdapter } from '../adapters';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseApiUrl = environment.baseApiUrl
  private http = inject(HttpClient);


  productsUrl = `${this.baseApiUrl}api/products/`

  getProducts(): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(this.productsUrl).pipe(
      map((response: ApiResponse<Product[]>) => {
        const adaptedProducts = response.data.map(productAdapter);
        return { ...response, data: adaptedProducts };
      }),
      catchError((error) => {
        return throwError(
          () => new Error(error.error.error.message || 'Couldnt get products')
        );
      })
    )
  }
  getProductByDocumentId(documentId: string): Observable<ApiResponse<Product>> {
    return this.http.get<ApiResponse<Product>>(this.productsUrl + documentId).pipe(
      map((response: ApiResponse<Product>) => {
        const adaptedProduct = productAdapter(response.data)
        return { ...response, data: adaptedProduct }
      }),
      catchError((error) => {
        return throwError(
          () => new Error(error.error.error.message || 'Couldnt get the product')
        );
      }))
  }

}
