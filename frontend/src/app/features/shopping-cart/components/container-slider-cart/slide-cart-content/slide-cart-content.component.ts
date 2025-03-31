import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { ShoppingCartLocalManagerService } from '@app/features/shopping-cart/services';
import { SlideItemProductComponent } from "./slide-item-product/slide-item-product.component";

@Component({
  selector: 'app-slide-cart-content',
  imports: [SlideItemProductComponent],
  templateUrl: './slide-cart-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideCartContentComponent  implements  OnInit {
  private shoppingCartLocalManagerService = inject(ShoppingCartLocalManagerService);
  items = this.shoppingCartLocalManagerService.productItemsAsArray;

  ngOnInit(): void {
    console.log('SlideCartContentComponent initialized');
    console.log(this.items);
  }
}
