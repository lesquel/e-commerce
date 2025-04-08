import { inject, Injectable, signal, Signal } from '@angular/core';
import { ShoppingCartClientManagerService } from './shopping-cart-client-manager.service';
import { ShoppingCart } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ManageClientShoppingCartService {
  private readonly shoppingCartClientManagerService = inject(
    ShoppingCartClientManagerService
  );

  private isCreatingCart = false;
  shoppingCart = signal<ShoppingCart | null>(null);

  useShoppingCartClient() {
    this.shoppingCartClientManagerService.getShoppingCartActive().subscribe({
      next: (shoppingCarts) => {
        if (!shoppingCarts.data.length && !this.isCreatingCart) {
          this.isCreatingCart = true;
          this.createShoppingCart();
        } else if (shoppingCarts.data.length) {
          console.log('se ejecuta useShoppingCartClient', shoppingCarts.data[0]);
          this.shoppingCart.set(shoppingCarts.data[0]);
        }
      },
    });
  }

  private createShoppingCart() {
    this.shoppingCartClientManagerService.createShoppingCart().subscribe({
      next: (shoppingCartData) => {
        this.shoppingCart.set(shoppingCartData);
        console.log('se creo el shopping cart', shoppingCartData);
        this.isCreatingCart = false;
      },
      error: () => {
        this.isCreatingCart = false;
      },
    });
  }
}
