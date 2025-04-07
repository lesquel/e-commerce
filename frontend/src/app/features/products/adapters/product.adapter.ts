import { Product } from "../models";

export const productAdapter = (product: any): Product => {
    return {
        id: product.id,
        documentId: product.documentId,
        name: product.name,
        description: product.description,
        amount: product.amount,
        individualPrice: product.individualPrice || 0,
        createdAt: product.createdAt,
        updatedAt: product.updateDate,
    }
}