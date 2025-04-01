import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  Input,
} from '@angular/core';
import { Product } from '../../models';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { productsRoutesConfig } from '../../config';
<<<<<<< HEAD
=======
import { ShoppingCartLocalManagerService } from '@app/features/shopping-cart';
import { NotificationsService } from '@app/shared/services/notifications.service';
import { NotificationType } from '@app/shared/types';
>>>>>>> 765d6f4207e9b5c7ca075f46a1e48ffb6176ee6b

@Component({
  selector: 'app-product-card',
  imports: [MatIconModule, RouterLink],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  product = input.required<Product>();

<<<<<<< HEAD
  readonly productsRoutesConfig = productsRoutesConfig;

  addToCart(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
=======
  notificationsService = inject(NotificationsService)

  addToCart(event: MouseEvent) {
    event.preventDefault()
    event.stopPropagation()
    this.shoppingCartLocalManager.addProductItem({
      product: this.product(),
      quantity: 1
    });
    this.notificationsService.showAlert(`Product ${this.product().name} was added successfully to shopping cart`, NotificationType.AlertSuccess)
>>>>>>> 765d6f4207e9b5c7ca075f46a1e48ffb6176ee6b
  }
}
