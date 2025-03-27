import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonIsLoginComponent } from '@features/auth/components';
import { ShoppingCartButtonComponent } from '@features/shopping-cart/components';
import { ThemeControllerComponent } from '@app/shared/components/navbar/theme-controller/theme-controller.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    ButtonIsLoginComponent,
    ThemeControllerComponent,
    ShoppingCartButtonComponent,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
