import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NotificationType } from '@app/shared/types';

@Component({
  selector: 'app-notification',
  imports: [CommonModule, MatIconModule],
  templateUrl: './notification.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent {
  showNotification = input.required<Boolean>()
  notificationMessage = input<String>()
  notificationType = input.required<NotificationType>()
}
