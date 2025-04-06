import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Product } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail-information',
  imports: [CommonModule],
  templateUrl: './product-detail-information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailInformationComponent {
  product = input.required<Product>();

  
}
