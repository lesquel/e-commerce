import { ChangeDetectionStrategy, Component } from '@angular/core';
import  { LucideAngularModule, ShoppingCart } from 'lucide-angular'; 

@Component({
  selector: 'app-shopping-cart-button',
  imports: [LucideAngularModule],
  template: `
    <div class="indicator">
      
      <lucide-icon name="shopping-cart"></lucide-icon>
      <span class="badge badge-sm indicator-item">8</span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartButtonComponent {}
