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

@Component({
  selector: 'app-product-card',
  imports: [MatIconModule, RouterLink],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  product = input.required<Product>();

  readonly productsRoutesConfig = productsRoutesConfig;

  addToCart(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }
}
