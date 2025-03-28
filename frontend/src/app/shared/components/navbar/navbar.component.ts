import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ShoppingCartButtonComponent } from '@features/shopping-cart/components';
import { ThemeControllerComponent } from '@app/shared/components/navbar/theme-controller/theme-controller.component';
import { RouterLink } from '@angular/router';

import { siteRoutesConfig } from '@app/features/site';
import { productsRoutesConfig } from '@app/features/products';
import { MatIconModule } from '@angular/material/icon';
import { ButtonIsLoggedComponent } from './button-is-logged/button-is-logged.component';
import { authRoutesConfig } from '@app/features/auth/config';
import { UserService } from '@app/features/auth/services';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatIconModule, ButtonIsLoggedComponent, ThemeControllerComponent, ShoppingCartButtonComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  siteRoutesConfig = siteRoutesConfig
  authRoutesConfig = authRoutesConfig
  productsRoutesConfig = productsRoutesConfig

  userService = inject(UserService)

  get isAuthenticated(): Boolean{
    return this.userService.isAuthenticated()
  }



}
