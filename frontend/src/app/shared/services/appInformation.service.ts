import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Global } from '../../features/site/models/global.model';
import { GlobalDataService } from './globalData.service';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class AppInformationService {
  private globalDataService = inject(GlobalDataService);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  appInformation = signal<Global | null>(null);

  constructor() {
    this.loadGlobalData();
  }


  private loadGlobalData(): void {
    this.globalDataService.getGlobalData().subscribe({
      next: (globalData) => {
        this.appInformation.set(globalData);
        console.log(this.appInformation)
      },
      error: (error) => {
        console.error('Error loading global data', error);
      },
    });
  }

  setTitle(newTitle?: string): void {
    const currentTitle = this.appInformation()?.siteName || 'Default Site Title';
    const title = newTitle ? `${currentTitle} | ${newTitle}` : currentTitle;
    this.titleService.setTitle(title);
  }
  

  setMeta(name: string, content: string): void {
    this.metaService.updateTag({ name, content });
  }
}
