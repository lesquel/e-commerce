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
import { NotificationsService } from '@app/shared/services/notifications.service';
import { NotificationType } from '@app/shared/types';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-card',
  imports: [MatIconModule, RouterLink, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  product = input.required<Product>();

  readonly productsRoutesConfig = productsRoutesConfig;

  notificationsService = inject(NotificationsService)

  addToCart(event: MouseEvent) {
    event.preventDefault()
    event.stopPropagation()

    this.notificationsService.showAlert(`Product ${this.product().name} was added successfully to shopping cart`, NotificationType.AlertSuccess)
  }
}
