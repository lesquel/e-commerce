import { Component, inject } from '@angular/core';
import { HeroHomeComponent } from '../components/home/hero-home/hero-home.component';
import { RouterLink } from '@angular/router';
import { ProductService } from '@app/features/products/services/product.service';

@Component({
  selector: 'home-page',
  imports: [
    // HeroHomeComponent,

    RouterLink,
  ],
  template: `
    <!-- <app-hero-home /> -->

    <!-- Open the modal using ID.showModal() method -->
    

    <a [routerLink]="['/teams']" routerLinkActive="router-link-active">hola</a>
  `,
})
export class HomePage {
  productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      console.log(products);
      console.log('SKSKSKSK');
    });
  }
}
