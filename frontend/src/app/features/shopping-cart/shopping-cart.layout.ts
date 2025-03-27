import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent, NavbarComponent } from "@shared/components"
@Component({
  selector: 'app-shopping-cart-layout',
  imports: [NavbarComponent, FooterComponent,RouterOutlet],
  template: `
    <app-navbar></app-navbar>
    <main class="min-h-screen">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
})
export class ShoppingCartLayout {}
