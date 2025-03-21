import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-theme-controller',
  imports: [],
  templateUrl: './theme-controller.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeControllerComponent {
  private $body = inject(DOCUMENT).body;
  private platformId = inject(PLATFORM_ID);
  getAtribute(): Theme {
    return (this.$body.getAttribute('data-theme') as Theme) || 'light';
  }

  setAtribute(value: Theme) {
    this.$body.setAttribute('data-theme', value);
  }

  getTheme() : Theme {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('theme') as Theme || 'light';
    }
    return 'light';
  }

  setTheme(value: Theme) {
    localStorage.setItem('theme', value);
  }

  toggleTheme() {
    const theme = this.getAtribute();
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    this.setAtribute(newTheme);
    this.setTheme(newTheme);
  }

  constructor() {
    this.setAtribute(this.getTheme());
  }
}
