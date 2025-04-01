import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RoutesConfig } from '@app/shared/types';
import { ContainerSliderCartComponent } from '@features/shopping-cart/components/';
@Component({
  selector: 'app-shopping-cart-button',
  imports: [MatIconModule, ContainerSliderCartComponent],
  template: `
    <div
      tabindex="0"
      role="button"
      class="btn btn-ghost btn-circle mr-6"
      onclick="my_modal_2.showModal()"
    >
      <div class="indicator">
        <mat-icon>shopping_cart</mat-icon>
        <span class="badge badge-sm indicator-item">{{totalProducts()}}</span>
      </div>
    </div>

    <app-container-slider-cart
      [authRoutesConfig]="authRoutesConfig()"
      [isAuthenticated]="isAuthenticated()"
    ></app-container-slider-cart>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartButtonComponent {
  authRoutesConfig = input.required<RoutesConfig>();

  isAuthenticated = input.required<Boolean>();

  totalProducts = signal(0);
}
