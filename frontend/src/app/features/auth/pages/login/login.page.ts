import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AlertComponent } from '@shared/components/alert/alert.component';
import { AuthService } from '../../services';
import { RouterLink } from '@angular/router';
import { authRoutesConfig } from '../../config';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [ReactiveFormsModule, AlertComponent, RouterLink],
  templateUrl: "./login.page.html",

})
export class LoginPage {
  authSevice = inject(AuthService);
  errorMessage = '';
  authRoutesConfig = authRoutesConfig;
  loginForm = new FormGroup({
    identifier: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  login(event: Event): void {
    event.preventDefault();
    if (!this.loginForm.valid) {
      this.errorMessage = 'Please fill in the form';
      return;
    }
    const form = this.loginForm.value;
    this.authSevice
      .login(form.identifier || '', form.password || '')
      .subscribe({
        next: () => {
          this.errorMessage = '';
        },
        error: (error) => {
          this.errorMessage = error.message || 'Login failed';
        }
      });
  }
}
