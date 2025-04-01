import { Injectable } from '@angular/core';
import { ShoppingCartLocal } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ManageStorageCartService {
  saveShoppingCartLocal(shoppingCartLocal: ShoppingCartLocal): void {
    sessionStorage.setItem(
      'shoppingCartLocal',
      JSON.stringify(shoppingCartLocal)
    );
  }

  getShoppingCartLocal(): ShoppingCartLocal | null {
    return JSON.parse(sessionStorage.getItem('shoppingCartLocal') || 'null');
  }

  removeShoppingCartLocal(): void {
    sessionStorage.removeItem('shoppingCartLocal');
  }
  
}
