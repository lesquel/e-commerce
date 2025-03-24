import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AlertComponent } from '@shared/components';
import { AuthService } from '../../services';
import { authRoutesConfig } from '../../config';
import { IInputField } from '@app/shared/types';
import { AuthFormComponent } from '../../components/form/auth-form.component';

@Component({
  selector: 'register-page',
  imports: [RouterLink,AlertComponent, AuthFormComponent],
  templateUrl: "./register.page.html",
})
export class RegisterPage {
  registerForm!: FormGroup;
  registerInputFields!: IInputField[];
  authRoutesConfig = authRoutesConfig;
  errorMessage = '';

  authSevice = inject(AuthService);

  ngOnInit() {
    this.initRegisterForm()
  }

  initRegisterForm() {

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      password: new FormControl('', [Validators.required]),
    });

    this.registerInputFields = [
      { name: 'email', label: 'Email', type: 'text', placeholder: 'Enter your email', autocomplete:"email" },
      { name: 'username', label: 'Username', type: 'text', placeholder: 'Enter your username', autocomplete:"username" },
      { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password', autocomplete:"new-password" },
    ];

  }
  register() {
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
