import { Component } from '@angular/core';
import { HeroHomeComponent } from '../components/home/hero-home/hero-home.component';
import { ContentChampionshipsComponent } from '../../championship/components/';
import { ContentTeamComponent } from '../../teams/components';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'home-page',
  imports: [
    HeroHomeComponent,
    ContentChampionshipsComponent,
    ContentTeamComponent,
    RouterLink,
  ],
  template: `
    <app-hero-home />
    <app-content-championships [pageSize]="10" />
    <app-content-team [pageSize]="10" />
    <a [routerLink]="['/teams']" routerLinkActive="router-link-active">
  `,
})
export class HomePage {}
