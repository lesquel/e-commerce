import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AlertComponent } from '@shared/components/alert/alert.component';
import { AuthService } from '../../services';
import { RouterLink } from '@angular/router';
import { authRoutesConfig } from '../../config';
import { IInputField } from '@app/shared/types';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { Router } from 'express';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [AlertComponent, RouterLink, AuthFormComponent],
  templateUrl: "./login.page.html",

})
export class LoginPage {
  loginForm!: FormGroup;
  loginFormInputFields!: IInputField[];
  authRoutesConfig = authRoutesConfig;
  errorMessage = '';


  authSevice = inject(AuthService);


  ngOnInit() {
    this.initLoginForm()
  }

  initLoginForm() {
    this.loginForm = new FormGroup({
      identifier: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    this.loginFormInputFields = [
      { name: 'identifier', label: 'Email or username', type: 'text', placeholder: 'Enter your email or username',autocomplete:'email' },
      { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password', autocomplete:'current-password' },
    ]

  }

  login() {
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
