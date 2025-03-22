import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AlertComponent } from '@shared/components';
import { AuthService } from '../../services';
import { authRoutesConfig } from '../../config';

@Component({
  selector: 'register-page',
  imports: [RouterLink, ReactiveFormsModule, AlertComponent],
  templateUrl: "./register.page.html",
})
export class RegisterPage {
  authSevice = inject(AuthService);
  authRoutesConfig = authRoutesConfig;
  errorMessage = '';
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  register(event: Event): void {
    if (!this.registerForm.valid) {
      this.errorMessage = 'Please fill in the form';
      return;
    }
    const form = this.registerForm.value;
    this.authSevice
      .register({
        email: form.email || '',
        username: form.username || '',
        password: form.password || '',
      })
      .subscribe({
        next: () => {
          this.errorMessage = '';
        },
        error: (error) => {
          this.errorMessage = error.message || 'Register failed';
        },
      });
  }
}
