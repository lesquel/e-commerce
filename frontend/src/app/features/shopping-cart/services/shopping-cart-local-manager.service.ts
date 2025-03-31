import { computed, inject, Injectable, signal, Signal } from '@angular/core';
import { ProductCart, ShoppingCartLocal } from '../models';
import { UserService } from '@app/features/auth/services';
import { User } from '@app/features/auth/models';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartLocalManagerService {
  dataCartSignal = signal<ShoppingCartLocal | null>(null);
  private userService = inject(UserService);
  private user = this.userService.getUser();

  constructor() {
    this.loadShoppingCartStore();
  }

  // Asegurar que product_carts siempre sea un Map<string, ProductCart>
  private productItems = computed(() => {
    const productCarts = this.dataCartSignal()?.product_carts;
    return productCarts instanceof Map
      ? productCarts
      : new Map<string, ProductCart>(Object.entries(productCarts ?? {}));
  });

  productItemsAsArray = computed(() => {
    return Array.from(this.productItems().values()).map((p : any) => {
      const productCart = p[1] as ProductCart;
      return { quantity: productCart.quantity, product: productCart.product };
    });
  });

  // Verificación si estamos en el navegador
  private isBrowser: boolean =
    typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

  getShoppingCart(): Signal<ShoppingCartLocal | null> {
    return this.dataCartSignal;
  }

  private getProductCart(productId: string): ProductCart | null {
    return this.productItems().get(productId) ?? null;
  }

  changeProductQuantity(productId: string, quantity: number): void {
    this.dataCartSignal.update((oldValue: ShoppingCartLocal | null) => {
      if (!oldValue) return null;
      const updatedProductCarts = new Map<string, ProductCart>(
        this.productItems()
      );
      const productCart = updatedProductCarts.get(productId);
      if (!productCart) return oldValue;
      updatedProductCarts.set(productId, { ...productCart, quantity });

      return {
        ...oldValue,
        product_carts: updatedProductCarts,
      };
    });

    this.saveShoppingCartStore();
  }

  addProductItem(productCart: ProductCart): void {
    console.log('addProductItem', this.getProductCart(productCart.product.documentId));
    if (this.getProductCart(productCart.product.documentId)) {
      const productCartLocal = this.getProductCart(
        productCart.product.documentId
      ) as ProductCart;
      this.changeProductQuantity(
        productCart.product.documentId,
        productCartLocal.quantity + 1
      );
      this.saveShoppingCartStore();
      return;
    }

    this.dataCartSignal.update((oldValue) => {
      const updatedProducts = new Map<string, ProductCart>(
        oldValue?.product_carts instanceof Map ? oldValue.product_carts : []
      );
      updatedProducts.set(productCart.product.documentId, productCart);

      return {
        user: this.user as User,
        id: oldValue?.id ?? 1,
        createdAt: oldValue?.createdAt ?? new Date(),
        updatedAt: new Date(),
        documentId: oldValue?.documentId ?? 'nrojnfjn',
        product_carts: updatedProducts,
      };
    });

    this.saveShoppingCartStore();
  }

  deleteProductItem(productId: string): void {
    this.dataCartSignal.update((oldValue: ShoppingCartLocal | null) => {
      if (!oldValue) return null;
      const updatedProductCarts = new Map<string, ProductCart>(
        this.productItems()
      );
      updatedProductCarts.delete(productId);

      return {
        ...oldValue,
        product_carts: updatedProductCarts,
      };
    });

    this.saveShoppingCartStore();
  }

  saveShoppingCartStore(): void {
    if (this.isBrowser) {
      const cartData = this.dataCartSignal();
      const serializableCart = {
        ...cartData,
        product_carts: Array.from(cartData?.product_carts?.entries() ?? []),
      };

      localStorage.setItem('shoppingCart', JSON.stringify(serializableCart));
    }
  }

  loadShoppingCartStore(): void {
    if (!this.isBrowser) return;
    const shoppingCart = localStorage.getItem('shoppingCart');
    if (!shoppingCart) return;

    const parsedCart = JSON.parse(shoppingCart) as ShoppingCartLocal;
    console.log('parsedCart', parsedCart.product_carts);

    this.dataCartSignal.set(parsedCart);
  }

  deleteShoppingCartStore(): void {
    this.dataCartSignal.set(null);
    if (this.isBrowser) {
      localStorage.removeItem('shoppingCart');
    }
  }
}
