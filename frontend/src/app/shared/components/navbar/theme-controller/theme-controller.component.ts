import {
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
  OnInit,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-theme-controller',
  imports: [MatIconModule, CommonModule],
  templateUrl: './theme-controller.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeControllerComponent implements OnInit {
  private $body = inject(DOCUMENT).body;
  private platformId = inject(PLATFORM_ID);

  constructor() {}

  ngOnInit() {
    this.setAtribute(this.getTheme());
  }

  getAtribute(): Theme {
    return (this.$body.getAttribute('data-theme') as Theme) || 'light';
  }

  setAtribute(value: Theme): void {
    this.$body.setAttribute('data-theme', value);
    this.setTheme(value);
  }

  getTheme(): Theme {
    if (isPlatformBrowser(this.platformId)) {
      return (localStorage.getItem('theme') as Theme) || 'light';
    }
    return 'light';
  }

  setTheme(value: Theme): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', value);
    }
  }

  toggleTheme(): void {
    const currentTheme = this.getAtribute();
    const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
    this.setAtribute(newTheme);
  }
}
