import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../models';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ProductCardSkeletonComponent } from '../../components';
import { NotificationsService } from '@app/shared/services/notifications.service';
import { error } from 'console';
import { NotificationType } from '@app/shared/types';

@Component({
    selector: 'product-list-page',
    imports: [CommonModule, ProductCardComponent, ProductCardSkeletonComponent],
    templateUrl: './product-list.page.html',
})
export class ProductListPage {
    private subscription!: Subscription;

    productService = inject(ProductService)
    notificationsService = inject(NotificationsService)

    productsList!: Product[]
    loading = true

    ngOnInit() {
        this.productService.getProducts().subscribe(products => {
            this.productsList = products.data;
            this.loading = false;
        }
        )
    }

    productByDocumentId(index: number, product: Product) {
        return product.documentId

    }


    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
