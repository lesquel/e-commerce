import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, OnInit } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class AppThemeService implements OnInit {
  private readonly THEME_KEY = 'theme';
  private $html = inject(DOCUMENT).documentElement;
  private platformId = inject(PLATFORM_ID);

  constructor() { }

  ngOnInit() {
    this.setAtribute(this.getTheme());
  }

  getAtribute(): Theme {
    return (this.$html.getAttribute('data-theme') as Theme) || 'light';
  }

  setAtribute(value: Theme): void {
    this.$html.setAttribute('data-theme', value);
    this.setTheme(value);
  }

  getTheme(): Theme {
    if (isPlatformBrowser(this.platformId)) {
      return (localStorage.getItem(this.THEME_KEY) as Theme) || 'light';
    }
    return 'light';
  }

  setTheme(value: Theme): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_KEY, value);
    }
  }

  toggleTheme(): Theme {
    const newTheme = this.getAtribute() === 'light' ? 'dark' : 'light';
    this.setAtribute(newTheme);
    return newTheme
  }
}
