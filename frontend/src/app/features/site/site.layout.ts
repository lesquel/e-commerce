import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { SiteService } from './services';

@Component({
  selector: 'site-layout',
  imports: [RouterOutlet],
  template: `
      <router-outlet />
  `,
})
export class SiteLayout implements OnInit {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private siteService = inject(SiteService);
  
  ngOnInit(): void {
    this.siteService.getGlobalData().subscribe({
      next: (data) => {
        this.titleService.setTitle(data.siteName);
        this.metaService.updateTag({
          name: 'description',
          content: data.siteDescription,
        });
        // this.updateFavicon(data.favicon);
      },
      error: (error) => {
        console.error('Error al obtener los datos del sitio:', error);
      },
    });
  }

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
