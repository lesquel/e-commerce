import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppInformationService } from '@app/shared/services/appInformation.service';

@Component({
  selector: 'site-layout',
  imports: [RouterOutlet],
  template: `
      <router-outlet />
  `,
})
export class SiteLayout implements OnInit {
  private appInformationService = inject(AppInformationService)

  ngOnInit(): void {
    this.appInformationService.setTitle()
  };


  // private updateFavicon(faviconUrl: string): void {
  //   let link: HTMLLinkElement | null =
  //     document.querySelector("link[rel~='icon']");
  //   if (!link) {
  //     link = document.createElement('link');
  //     link.rel = 'icon';
  //     document.head.appendChild(link);
  //   }
  //   link.href = faviconUrl || 'assets/favicon.ico'; // Fallback a un favicon por defecto
  // }
}
