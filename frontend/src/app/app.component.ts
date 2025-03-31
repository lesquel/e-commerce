import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NotificationComponent } from "./shared/components/notification/notification.component";
import { NotificationsService } from './shared/services/notifications.service';
import { NotificationType } from './shared/types';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  notificationsService = inject(NotificationsService)

  title = 'E-commerce';
  showAlert: Boolean = false;
  message: string = '';
  notificationType: NotificationType = NotificationType.AlertError;

  ngOnInit() {
    this.notificationsService.alert$.subscribe((res: any) => {
      this.showAlert = true;
      this.message = res.message;
      this.notificationType = res.notificationType;
      setTimeout(() => {
        this.showAlert = false
      }, res.time);
    })
  }

}
