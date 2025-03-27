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
<<<<<<< HEAD
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
=======
  imports: [RouterLink,MatIconModule,ButtonIsLoginComponent, ThemeControllerComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  siteRoutesConfig = siteRoutesConfig
  productsRoutesConfig = productsRoutesConfig


}
>>>>>>> d606bd601c6aa41f41deb149e0144e97c34696ee
