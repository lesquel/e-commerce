import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { UserService } from '@app/features/auth/services';
import { ButtonIsLoggedComponent } from '@app/shared/components';
import { RoutesConfig } from '@app/shared/types';
import { SlideCartContentComponent } from './slide-cart-content/slide-cart-content.component';

@Component({
  selector: 'app-container-slider-cart',
  imports: [ButtonIsLoggedComponent, SlideCartContentComponent],
  templateUrl: './container-slider-cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ContainerSliderCartComponent {
  private userService = inject(UserService);

  authRoutesConfig = input.required<RoutesConfig>();
  isAuthenticated = input.required<Boolean>();
}
