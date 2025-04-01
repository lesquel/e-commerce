import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { SlideItemProductComponent } from './slide-item-product/slide-item-product.component';

@Component({
  selector: 'app-slide-cart-content',
  imports: [SlideItemProductComponent],
  templateUrl: './slide-cart-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideCartContentComponent {
}
