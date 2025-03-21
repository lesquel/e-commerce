import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../site/components';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <div class="container">
      <app-navbar></app-navbar>
      <main class="min-h-screen">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class AuthLayout {}
