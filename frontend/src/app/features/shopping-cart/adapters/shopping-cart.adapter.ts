import { ShoppingCart, ShoppingCarts } from '../models';

export const shoppingCartAdapter = (shoppingCart: any): ShoppingCart => {
  return {
    id: shoppingCart.data.id,
    documentId: shoppingCart.data.documentId,
    user: shoppingCart.data.user,
    product_carts: shoppingCart.data.product_carts,
    isActive: shoppingCart.data.isActive,
    createdAt: shoppingCart.data.createdAt,
    updatedAt: shoppingCart.data.updatedAt,
  };
};

export const shoppingCartsAdapter = (shoppingCarts: any): ShoppingCarts => {
  return {
    data: shoppingCarts.data.map((shoppingCart: any) =>
      shoppingCartAdapter(shoppingCart)
    ),
    meta: shoppingCarts.meta,
  };
};
