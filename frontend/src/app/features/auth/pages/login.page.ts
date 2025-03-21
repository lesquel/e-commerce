import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AlertComponent } from '@shared/components/alert/alert.component';
import { AuthService } from '../services';
import { RouterLink } from '@angular/router';
import { routesConfig } from '../config';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [ReactiveFormsModule, AlertComponent, RouterLink],
  template: `
    <div class="h-screen flex justify-center items-center flex-col gap-4">
      @if (errorMessage) {
      <app-alert [text]="errorMessage" type="error" />
      }

      <form
        [formGroup]="loginForm"
        (ngSubmit)="login($event)"
        class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box"
      >
        <legend class="fieldset-legend">Login</legend>

        <label class="fieldset-label">Email o Username</label>
        <input
          formControlName="identifier"
          type="text"
          class="input"
          placeholder="Email o Username"
        />

        <label class="fieldset-label">Password</label>
        <input
          formControlName="password"
          type="password"
          class="input"
          placeholder="Password"
        />

        <button
          class="btn btn-neutral mt-4"
          type="submit"
          [disabled]="loginForm.invalid"
        >
          Login
        </button>
      </form>
      <a [routerLink]="[routesConfig.register.url]" class="link">Don't have an account? Sign up</a>
    </div>
  `,
})
export class LoginPage {
  authSevice = inject(AuthService);
  errorMessage = '';
  routesConfig = routesConfig;
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
