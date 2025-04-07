import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NotificationComponent } from './shared/components/notification/notification.component';
import { AppInformationService } from './shared/services/appInformation.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    NotificationComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'E-commerce';
  private appInformationService = inject(AppInformationService)

  ngOnInit() {
    this.appInformationService.setTitle()
  }
}
