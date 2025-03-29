import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '@features/auth/services';
import { RoutesConfig } from '@shared/types';
import { AvatarComponent } from '../../../avatar/avatar.component';




@Component({
  selector: 'app-avatar-navbar',
  imports: [RouterLink, AvatarComponent],
  templateUrl: './avatar-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarNavbarComponent {
  private userService = inject(UserService);

  authRoutesConfig = input.required<RoutesConfig>()

  logout() {
    this.userService.logout();
  }
}
