import { ChangeDetectionStrategy, Component, inject, input, Input } from '@angular/core';
import { Product } from '../../models';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { productsRoutesConfig } from '../../config';
import { ShoppingCartLocalManagerService } from '@app/features/shopping-cart';

@Component({
  selector: 'app-product-card',
  imports: [MatIconModule, RouterLink],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input() product!: Product;
  private shoppingCartLocalManager = inject(ShoppingCartLocalManagerService);
  readonly productsRoutesConfig = productsRoutesConfig


  addToCart(event: MouseEvent){
    event.preventDefault()
    event.stopPropagation()
    this.shoppingCartLocalManager.addProductItem({
      product: this.product,
      quantity: 1,
    });
  }

} 
