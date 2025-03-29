import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { UserService } from '@app/features/auth/services';
import { ButtonIsLoggedComponent } from '@app/shared/components/navbar/button-is-logged/button-is-logged.component';
import { RoutesConfig } from '@app/shared/types';

@Component({
  selector: 'app-slide-cart-content',
  imports: [ButtonIsLoggedComponent],
  templateUrl: './slide-cart-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideCartContentComponent {
  private userService = inject(UserService);

  authRoutesConfig = input.required<RoutesConfig>()

  isAuthenticated = input.required<Boolean>()
}
