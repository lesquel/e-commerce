import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { Product } from '../models';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
    selector: 'product-list-page',
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './product-list.page.html',
})
export class ProductListPage {
    private subscription!: Subscription;

    productService = inject(ProductService)
    productsList!: Product[]
    ngOnInit() {
        this.productService.getProducts().subscribe(products => { this.productsList = products.data; console.log(this.productsList) })
    }

    productById(index: number, product: Product) {
        return product.id

    }




    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
