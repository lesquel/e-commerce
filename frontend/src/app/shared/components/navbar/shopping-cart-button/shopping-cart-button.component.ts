import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-shopping-cart-button',
  imports: [MatIconModule],
  template: `
    <div class="indicator">
      <mat-icon>shopping-cart</mat-icon>
      <span class="badge badge-sm indicator-item">8</span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartButtonComponent {

}



