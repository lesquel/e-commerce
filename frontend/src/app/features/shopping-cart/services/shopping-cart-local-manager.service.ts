import { Injectable, signal, Signal } from '@angular/core';
import { ProductCart, ShoppingCartLocal } from '../models';
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartLocalManagerService {
  dataCartSignal = signal<ShoppingCartLocal | null>(null);

  // Verificación si estamos en el navegador
  private isBrowser: boolean = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

  getShoppingCart(): Signal<ShoppingCartLocal | null> {
    return this.dataCartSignal;
  }

  private getProductItems(): Map<string, ProductCart> | null {
    return this.dataCartSignal()?.product_carts ?? null;
  }

  private getProductCart(productId: string): ProductCart | null {
    return this.getProductItems()?.get(productId) ?? null;
  }

  changeProductQuantity(productId: string, quantity: number): void {
    this.dataCartSignal.update((oldValue: ShoppingCartLocal | null) => {
      if (!oldValue) return null;
      const updatedProductCarts = this.getProductItems();
      if (!updatedProductCarts) return oldValue;
      const productCart = updatedProductCarts.get(productId);
      if (!productCart) return oldValue;
      updatedProductCarts.set(productId, { ...productCart, quantity });
      return {
        ...oldValue,
        product_carts: updatedProductCarts,
      };
    });
  }

  addProductItem(productCart: ProductCart): void {

    console.log(this.getProductItems());
    if (this.getProductCart(productCart.product.id)) {
      const productCartLocal = this.getProductCart(productCart.product.id) as ProductCart;
      this.changeProductQuantity(
        productCart.product.id,
        productCartLocal.quantity + 1
      );
      console.log('product added');
      this.saveShoppingCartStore();
      return;
    }

    this.dataCartSignal.update((oldValue) => {
      if (!oldValue) {
        const newProducts = new Map<string, ProductCart>();
        newProducts.set(productCart.product.id, productCart);
        return {
          createdAt: new Date(),
          user: {
            id: 1,
            createdAt: '2025-03-09T21:42:51.458Z',
            documentId: 'nrojnfjn',
            email: 'lesqu@gmail.com',
            username: 'lesqu',
            jwt: 'jj3d3i',
            avatar: 'https://i.pravatar.cc/150?img=1',
          },
          product_carts: newProducts,
          id: 1,
          updatedAt: new Date(),
          documentId: 'nrojnfjn',
        };
      }

      const updatedProducts = new Map(oldValue.product_carts);
      updatedProducts.set(productCart.product.id, productCart);

      return {
        ...oldValue,
        product_carts: updatedProducts,
        updatedAt: new Date(),
      };
    });

    // Solo guarda en localStorage si estamos en el navegador
    if (this.isBrowser) {
      const cartData = this.dataCartSignal();
      const serializableCart = {
        ...cartData,
        product_carts: Array.from(cartData?.product_carts?.entries() ?? []),
      };

      this.saveShoppingCartStore();
      console.log(localStorage.getItem('shoppingCart'));
    }
  }

  deleteProductItem(productId: string): void {
    this.dataCartSignal.update((oldValue: ShoppingCartLocal | null) => {
      if (!oldValue) return null;
      const updatedProductCarts = this.getProductItems();
      if (!updatedProductCarts) return oldValue;
      updatedProductCarts.delete(productId);
      return {
        ...oldValue,
        product_carts: updatedProductCarts,
      };
    });

    if (this.isBrowser) {
      localStorage.setItem('shoppingCart', JSON.stringify(this.dataCartSignal()));
    }
  }

  saveShoppingCartStore(): void {
    if (this.isBrowser) {
      localStorage.setItem('shoppingCart', JSON.stringify(this.dataCartSignal()));
    }
  }

  deleteShoppingCartStore(): void {
    this.dataCartSignal.set(null);
    if (this.isBrowser) {
      localStorage.removeItem('shoppingCart');
    }
  }
}
