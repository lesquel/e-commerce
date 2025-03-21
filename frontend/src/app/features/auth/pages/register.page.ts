import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AlertComponent } from '@shared/components';
import { AuthService } from '../services';
import { routesConfig } from '../config';

@Component({
  selector: 'register-page',
  imports: [RouterLink, ReactiveFormsModule, AlertComponent],
  template: `
    <div class="h-screen flex justify-center items-center flex-col gap-4">
      @if (errorMessage) {
      <app-alert [text]="errorMessage" type="error" />
      }

      <form
        [formGroup]="registerForm"
        (ngSubmit)="register($event)"
        class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box"
      >
        <legend class="fieldset-legend">Register</legend>

        <label class="fieldset-label">Email</label>
        <input
          formControlName="email"
          type="email"
          class="input"
          placeholder="Email"
        />

        <label class="fieldset-label">Username</label>
        <input
          formControlName="username"
          type="text"
          class="input"
          placeholder="Username"
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
          [disabled]="registerForm.invalid"
        >
          Register
        </button>
      </form>
      <a [routerLink]="[routesConfig.login.url]" class="link"
        >Already have an account? Log in</a
      >
    </div>
  `,
})
export class RegisterPage {
  authSevice = inject(AuthService);
  routesConfig = routesConfig;
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
