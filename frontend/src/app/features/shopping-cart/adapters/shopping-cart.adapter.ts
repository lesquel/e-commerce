import { ShoppingCart, ShoppingCarts } from '../models';

export const shoppingCartAdapter = (shoppingCartData: any): ShoppingCart => {
  const shoppingCart = shoppingCartData.data ?? shoppingCartData;
  return {
    id: shoppingCart.id,
    documentId: shoppingCart.documentId,
    user: shoppingCart.user,
    product_carts: shoppingCart.product_carts ?? [],
    isActive: shoppingCart.isActive,
    createdAt: shoppingCart.createdAt,
    updatedAt: shoppingCart.updatedAt,
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
