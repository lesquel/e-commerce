import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonIsLoginComponent } from '@features/auth/components';
import { ShoppingCartButtonComponent } from '@features/shopping-cart/components';
import { ThemeControllerComponent } from '@app/shared/components/navbar/theme-controller/theme-controller.component';
import { RouterLink } from '@angular/router';

import { siteRoutesConfig } from '@app/features/site';
import { productsRoutesConfig } from '@app/features/products';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [
    ButtonIsLoginComponent,
    ThemeControllerComponent,
    ShoppingCartButtonComponent,
    RouterLink,
    MatIconModule,
  ],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  siteRoutesConfig = siteRoutesConfig;
  productsRoutesConfig = productsRoutesConfig;
}
