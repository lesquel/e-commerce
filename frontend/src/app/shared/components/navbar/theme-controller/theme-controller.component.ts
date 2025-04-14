import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule, } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AppThemeService } from '@app/shared/services';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-theme-controller',
  imports: [MatIconModule, CommonModule],
  templateUrl: './theme-controller.component.html',
})
export class ThemeControllerComponent implements OnInit {
  theme!: Theme;
  private themeService = inject(AppThemeService);


  constructor() {}

  ngOnInit() {
    this.theme = this.themeService.getTheme() as Theme;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme(); 
    
  }
  
}