import { User } from '@app/features/auth/models';
import { Product } from '@app/features/products/models';
import { InfoBasicEntity } from '@app/shared/models';
import { ProductCart } from './product-cart.model';

export interface ShoppingCart extends InfoBasicEntity {
  user: User;
  product_carts: ProductCart[];
}
