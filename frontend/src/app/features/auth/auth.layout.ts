import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/components';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  template: `
    <div class="container">
      <main class="min-h-screen">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class AuthLayout {}
