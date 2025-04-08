import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { productsRoutesConfig } from '@app/features/products';

@Component({
  selector: 'app-no-items-in-shopping-cart',
  imports: [RouterLink],
  templateUrl: './no-items-in-shopping-cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoItemsInShoppingCartComponent {
  protected productsRoutesConfig = productsRoutesConfig;

}
