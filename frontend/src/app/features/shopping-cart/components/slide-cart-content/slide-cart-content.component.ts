import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '@app/features/auth/services';
import { ButtonIsLoginComponent } from "../../../auth/components/button-is-login/button-is-login.component";

@Component({
  selector: 'app-slide-cart-content',
  imports: [ButtonIsLoginComponent],
  templateUrl: './slide-cart-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideCartContentComponent {
  private userService = inject(UserService);
  protected user = this.userService.isAuthenticated();
}
