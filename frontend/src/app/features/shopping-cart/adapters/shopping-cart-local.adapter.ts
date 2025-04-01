import { ShoppingCartLocal } from "../models/shopping-cart-local.model";

export const shoppingCartLocalAdapter = (shoppingCartLocal: any): ShoppingCartLocal => {
  return {
    id: shoppingCartLocal.data.id,
    documentId: shoppingCartLocal.data.documentId,
    user: shoppingCartLocal.data.user,
    createdAt: shoppingCartLocal.data.createdAt,
    updatedAt: shoppingCartLocal.data.updatedAt,
  };
};