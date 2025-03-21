import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonIsLoginComponent } from '@features/auth/components';
import { ThemeControllerComponent } from "@shared/components/theme-controller/theme-controller.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ButtonIsLoginComponent, ThemeControllerComponent, RouterLink], 
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  
}
