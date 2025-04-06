import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteRoutesConfig } from '@app/features/site';

@Component({
  selector: 'app-product-detail-breadcrums',
  imports: [RouterLink],
  templateUrl: './product-detail-breadcrums.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailBreadcrumsComponent {
  readonly siteRoutesConfig = siteRoutesConfig

  productName = input.required<string>();




}
