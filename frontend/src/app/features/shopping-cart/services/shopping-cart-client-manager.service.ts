import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models';
import { createFilterId } from '@app/shared/utils';
import { UserService } from '@app/features/auth/services';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartClientManagerService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;
  private userService = inject(UserService);
  private user = this.userService.getUser();

  getShoppingCarts(): Observable<ShoppingCart[]> {
    return this.http.get<ShoppingCart[]>(
      `${this.baseUrl}/api/shopping-carts>${createFilterId({
        id: this.user?.id as number,
        name: "user"
      })}`
    );
  }

  getShoppingCart(documentId: string): Observable<ShoppingCart> {
    return this.http.get<ShoppingCart>(
      `${this.baseUrl}/api/shopping-carts/${documentId}`
    );
  }
}
