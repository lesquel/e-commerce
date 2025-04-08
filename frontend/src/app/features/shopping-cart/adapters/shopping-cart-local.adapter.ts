import { ShoppingCartLocal } from '../models/shopping-cart-local.model';

export const shoppingCartLocalAdapter = (
  shoppingCartLocalData: any
): ShoppingCartLocal => {
  const shoppingCartLocal = shoppingCartLocalData.data ?? shoppingCartLocalData;
  return {
    id: shoppingCartLocal.id,
    documentId: shoppingCartLocal.documentId,
    user: shoppingCartLocal.user,
    createdAt: shoppingCartLocal.createdAt,
    updatedAt: shoppingCartLocal.updatedAt,
  };
};
