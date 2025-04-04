import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Product } from '../../models';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { productsRoutesConfig } from '../../config';
import { Subscription } from 'rxjs';
import { siteRoutesConfig } from '@app/features/site';
import { AppInformationService } from '@app/shared/services/appInformation.service';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, CommonModule],
  templateUrl: './product-detail.page.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductDetailPage {
  product: Product = {} as Product;

  subscription!: Subscription
  private cd = inject(ChangeDetectorRef);



  private productsService = inject(ProductService)
  private appInformationService = inject(AppInformationService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  readonly productsRoutesConfig = productsRoutesConfig
  readonly siteRoutesConfig = siteRoutesConfig


  ngOnInit() {
    const productDocumentId = this.route.snapshot.paramMap.get('documentId') || ""

    this.subscription = this.productsService.getProductByDocumentId(productDocumentId).subscribe({
      next: (response) => {
        this.product = response.data
        console.log(this.product)
        this.appInformationService.setTitle(this.product.name)
        this.cd.detectChanges();

      },
      error: (error) => {
        this.router.navigate(['/not-found'])
      }
    }
    )
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

}
