import { Product } from '@app/features/products/models';

export interface ProductCart {
  quantity: number;
  product: Product;
}
