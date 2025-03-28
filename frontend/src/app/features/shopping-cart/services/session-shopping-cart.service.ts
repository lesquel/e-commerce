import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionShoppingCartService {

  saveSessionShoppingCart(): void {
    sessionStorage.setItem('sessionShoppingCart', JSON.stringify(true));
  }

  getSessionShoppingCart(): string | null {
    return sessionStorage.getItem('sessionShoppingCart');
  }
}
