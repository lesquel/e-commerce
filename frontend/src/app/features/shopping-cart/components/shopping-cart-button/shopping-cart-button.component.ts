import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SlideCartContentComponent } from '../slide-cart-content/slide-cart-content.component';
@Component({
  selector: 'app-shopping-cart-button',
  imports: [MatIconModule, SlideCartContentComponent],
  template: `
    <div tabindex="0" role="button" class="btn btn-ghost btn-circle mr-6" onclick="my_modal_2.showModal()">
      <div class="indicator">
        <mat-icon>shopping_cart</mat-icon>
        <span class="badge badge-sm indicator-item">10</span>
      </div>
    </div>

    <app-slide-cart-content></app-slide-cart-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartButtonComponent {}
