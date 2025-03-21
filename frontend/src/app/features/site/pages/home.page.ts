import { Component } from '@angular/core';
import { HeroHomeComponent } from '../components/home';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-page',
  imports: [ RouterLink],
  template: `
    <!-- <app-hero-home /> -->
    <a [routerLink]="['/teams']" routerLinkActive="router-link-active"> </a>
  `,
})
export class HomePage {}
