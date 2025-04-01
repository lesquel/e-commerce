import { User } from '@app/features/auth/models';
import { Product } from '@app/features/products/models';
import { InfoBasicEntity } from '@app/shared/models';
import { ProductCart } from './product-cart.model';

export interface ShoppingCartLocal extends InfoBasicEntity {
  user: User;
}
