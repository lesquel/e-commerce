import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { environment } from '@environments/environment.development';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ShoppingCart, ShoppingCarts } from '../models';
import {
  createFilterAttributes,
  createFilterId,
  createPopulate,
} from '@app/shared/utils';
import { UserService } from '@app/features/auth/services';
import { shoppingCartAdapter, shoppingCartsAdapter } from '../adapters';
import { ManageStorageCartService } from './manage-storage-cart.service';
import { User } from '@app/features/auth/models';
import { userAdapter } from '@app/features/auth/adapters';
import { createShoppingCartData } from '../data';

// getShoppingCarts ?populate[product_carts][populate]=product&populate=user
// || http://localhost:1337/api/shopping-carts/inrfdgkz5uf6jf378nir2hkv?populate[product_carts][populate]=product&populate=user

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartClientManagerService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseApiUrl;
  private userService = inject(UserService);
  private user = this.userService.getUser();
  private readonly urlShoppingCart = `${this.baseUrl}api/shopping-carts`;
  private manageStorageCartService = inject(ManageStorageCartService);

  private readonly poputateShoppingCart = `populate[product_carts][populate]=product&${createPopulate(
    'user'
  )}`;

  getShoppingCarts(): Observable<ShoppingCarts> {
    const url = `${this.urlShoppingCart}?${createFilterId({
      id: this.user?.id as number,
      name: 'user',
    })}`;
    return this.http
      .get<ShoppingCarts>(url, {
        headers: {
          Authorization: this.userService.useTokenClient(),
        },
      })
      .pipe(
        map((shoppingCarts: any) => shoppingCartsAdapter(shoppingCarts)),
        catchError((error) => {
          console.error(error);
          return throwError(() => {
            new Error(error.error.error.message || 'Shopping Carts failed');
          });
        })
      );
  }

  getShoppingCartById(documentId: string): Observable<ShoppingCart> {
    const url = `${this.urlShoppingCart}/${documentId}?${this.poputateShoppingCart}`;
    return this.http
      .get<ShoppingCart>(url, {
        headers: {
          Authorization: this.userService.useTokenClient(),
        },
      })
      .pipe(
        map((shoppingCart: any) => shoppingCartAdapter(shoppingCart)),
        catchError((error) => {
          console.error(error);
          return throwError(() => {
            new Error(error.error.error.message || 'Shopping Cart failed');
          });
        })
      );
  }

  saveShoppingCartLocal(): void {
    this.getShoppingCartActive().subscribe((product) => {
      if (product?.data?.length) {
        this.manageStorageCartService.saveShoppingCartLocal(product.data[0]);
      } else {
        console.warn('No active shopping cart found.');
      }
    });
  }

  getShoppingCartActive(): Observable<ShoppingCarts> {
    const url = `${this.urlShoppingCart}?${createFilterAttributes([
      {
        key: 'isActive',
        value: 'true',
      },
    ])}&${this.poputateShoppingCart}`;
    return this.http
      .get<ShoppingCarts>(url, {
        headers: {
          Authorization: this.userService.useTokenClient(),
        },
      })
      .pipe(
        map((shoppingCart: any) => shoppingCartsAdapter(shoppingCart)),
        catchError((error) => {
          console.error(error);
          return throwError(() => {
            new Error(error.error.error.message || 'Shopping Cart failed');
          });
        })
      );
  }

  createShoppingCart(): Observable<ShoppingCart> {
    const url = `${this.urlShoppingCart}`;
    console.log("se ejecuta la creacion");
    return this.http
      .post<ShoppingCart>(
        url,
        createShoppingCartData(this.user?.id as number),
        {
          headers: {
            Authorization: this.userService.useTokenClient(),
          },
        }
      )
      .pipe(
        map((shoppingCart: any) => {
          return shoppingCartAdapter(shoppingCart);
        }),
        catchError((error) => {
          console.error(error);
          return throwError(() => {
            new Error(error.error.error.message || 'Shopping Cart failed');
          });
        })
      );
  }

}
