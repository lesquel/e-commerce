import { User } from '@app/features/auth/models';
import { InfoBasicEntity } from '@app/shared/models';
import { ProductCart } from './product-cart.model';
import { Meta } from '@angular/platform-browser';

export interface ShoppingCart extends InfoBasicEntity {
  user: User;
  product_carts: ProductCart[];
  isActive: boolean;
}

export interface ShoppingCarts {
  data: ShoppingCart[];
  meta: Meta;
}