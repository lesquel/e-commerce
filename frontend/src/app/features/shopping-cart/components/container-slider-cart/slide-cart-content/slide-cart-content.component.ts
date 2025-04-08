import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { SlideItemProductComponent } from './slide-item-product/slide-item-product.component';
import { ManageClientShoppingCartService } from '@app/features/shopping-cart/services';
import { NoItemsInShoppingCartComponent } from "../../no-items-in-shopping-cart/no-items-in-shopping-cart.component";

@Component({
  selector: 'app-slide-cart-content',
  imports: [SlideItemProductComponent, NoItemsInShoppingCartComponent],
  templateUrl: './slide-cart-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideCartContentComponent implements OnInit {
  private manageClientShoppingCartService = inject(
    ManageClientShoppingCartService
  );
  protected items = this.manageClientShoppingCartService.shoppingCart;
  ngOnInit(): void {
    this.manageClientShoppingCartService.useShoppingCartClient();
  }
}
