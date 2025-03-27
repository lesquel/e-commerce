import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-card',
  imports: [MatIconModule],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input() product!: Product;

  // readonly
  
} 
