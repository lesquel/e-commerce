import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductCart } from '@app/features/shopping-cart/models';

@Component({
  selector: 'app-slide-item-product',
  imports: [],
  templateUrl: './slide-item-product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideItemProductComponent {
  productItem = input.required<ProductCart>();
}
  