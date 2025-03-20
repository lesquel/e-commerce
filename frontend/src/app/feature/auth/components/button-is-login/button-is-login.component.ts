import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {  UserService } from '../../services';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: 'app-button-is-login',
  imports: [RouterLink, AvatarComponent],
  templateUrl: './button-is-login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonIsLoginComponent {
  private userService = inject(UserService);
  protected isAuthenticated = this.userService.isAuthenticated();
}
