import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoutesConfig } from '@app/shared/types';
import { AvatarNavbarComponent } from './avatar-navbar/avatar-navbar.component';

@Component({
  selector: 'app-button-is-logged',
  imports: [CommonModule, RouterLink, AvatarNavbarComponent],
  templateUrl: './button-is-logged.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonIsLoggedComponent {
  authRoutesConfig = input.required<RoutesConfig>();
  isAuthenticated = input.required<Boolean>();
}
