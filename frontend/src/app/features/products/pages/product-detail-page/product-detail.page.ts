import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Product } from '../../models';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { productsRoutesConfig } from '../../config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailPage {
  product: Product = {} as Product
  productsService = inject(ProductService)
  subscription!: Subscription
  route = inject(ActivatedRoute)
  router = inject(Router)

  readonly productsRoutesConfig = productsRoutesConfig


  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('documentId')
    if (!productId) {
      this.router.navigate([productsRoutesConfig.base.url])
      return
    }
    this.subscription = this.productsService.getProductByDocumentId(productId).subscribe(product => { this.product = product.data })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

}
