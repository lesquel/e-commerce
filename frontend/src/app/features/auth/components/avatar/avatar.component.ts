import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../../services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-avatar',
  imports: [RouterLink],
  templateUrl: './avatar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  private userService = inject(UserService);
  logout() {
    this.userService.logout();
  }
}
