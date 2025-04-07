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
    

    <a [routerLink]="['/teams']"  class="bg-blue-200 dark:bg-amber-900" routerLinkActive="router-link-active">hola</a>
  `,
})
export class HomePage {

  ngOnInit() {

  }
}
