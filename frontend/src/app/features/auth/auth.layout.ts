import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/components';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  template: `
        <router-outlet></router-outlet>
  `,
})
export class AuthLayout { }
