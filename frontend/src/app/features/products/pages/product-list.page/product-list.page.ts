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
import { AppInformationService } from '@app/shared/services/appInformation.service';

@Component({
    selector: 'product-list-page',
    imports: [CommonModule, ProductCardComponent, ProductCardSkeletonComponent],
    templateUrl: './product-list.page.html',
})
export class ProductListPage {
    private subscription!: Subscription;

    private productService = inject(ProductService)
    private notificationsService = inject(NotificationsService)
    private appInformationService = inject(AppInformationService)



    productsList!: Product[]
    loading = true

    ngOnInit() {
        this.productService.getProducts().subscribe({
            next: (products) => {
                this.productsList = products.data;
                this.loading = false
            },
            error: (error) => {
                this.notificationsService.showAlert('Error getting products', NotificationType.AlertError)
            }
        }
        )

        this.appInformationService.setTitle('Product list')

    }



    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
