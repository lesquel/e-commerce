import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Product } from '../../models';
import { CommonModule } from '@angular/common';
import { ProductRatingComponent } from "../product-rating/product-rating.component";

@Component({
  selector: 'app-product-detail-information',
  imports: [CommonModule, ProductRatingComponent],
  templateUrl: './product-detail-information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailInformationComponent {
  product = input.required<Product>();

  
}
