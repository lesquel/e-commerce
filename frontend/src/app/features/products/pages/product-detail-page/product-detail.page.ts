import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, Subscription, of } from 'rxjs';

import { Product } from '../../models';
import { ProductService } from '../../services/product.service';
import { productsRoutesConfig } from '../../config';

import { AppInformationService } from '@app/shared/services/appInformation.service';

import { CommonModule } from '@angular/common';
import { ProductDetailBreadcrumsComponent } from '../../components/product-detail-breadcrums/product-detail-breadcrums.component';
import { ProductDetailImageGalleryComponent } from '../../components/product-detail-image-gallery/product-detail-image-gallery.component';
import { ProductDetailInformationComponent } from '../../components/product-detail-information/product-detail-information.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    ProductDetailBreadcrumsComponent,
    ProductDetailImageGalleryComponent,
    ProductDetailInformationComponent,
    ProductCardComponent,
  ],
  templateUrl: './product-detail.page.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProductDetailPage implements OnInit, OnDestroy {
  product: Product = {} as Product;
  similarProducts: Product[] = [];

  private readonly cd = inject(ChangeDetectorRef);
  private readonly productService = inject(ProductService);
  private readonly appInformationService = inject(AppInformationService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly productsRoutesConfig = productsRoutesConfig;

  private subscription = new Subscription();

  ngOnInit(): void {

    const routeSub = this.route.paramMap
      .pipe(
        switchMap((params) => {
          const documentId = params.get('documentId');
          if (!documentId) {
            this.router.navigate(['/not-found']);
            return of(null);
          }

          return this.productService.getProductByDocumentId(documentId);
        },)
      )
      .subscribe({
        next: (response) => {
          if (!response) return;

          this.product = response.data;
          this.appInformationService.setTitle(this.product.name);
          this.product = response.data;
          window.scrollTo({ top: 0, behavior: 'smooth' });

          this.loadSimilarProducts();
        },
        error: () => {
          this.router.navigate(['/not-found']);
        },
      });

    this.subscription.add(routeSub);
  }

  private loadSimilarProducts(): void {
    const sub = this.productService.getProducts().subscribe((res) => {
      this.similarProducts = res.data.slice(0, 4);
      this.cd.markForCheck();
    });

    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
