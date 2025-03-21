import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {  UserService } from '../../services';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from "../avatar/avatar.component";
import { authRoutesConfig } from '../../config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-is-login',
  imports: [CommonModule,RouterLink, AvatarComponent],
  templateUrl: './button-is-login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonIsLoginComponent {
  private userService = inject(UserService);
  authRoutesConfig = authRoutesConfig;
  protected isAuthenticated = this.userService.isAuthenticated();
}
