import { Product } from "../models";

export const productAdapter = (product: any): Product => {
    return {
        id: product.id,
        name: product.name,
        description: product.description,
        amount: product.amount,
        individualPrice: product.individualPrice,
        createdAt: product.createdAt,
        updatedAt: product.updateDate,
    }
}