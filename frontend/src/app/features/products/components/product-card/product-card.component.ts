import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input() product!: Product;
  
} 
