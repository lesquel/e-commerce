import { Component, inject, OnInit } from '@angular/core';
import { AuthService, UserService } from '../services';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '@shared/components';
import { onFileSelected } from '@shared/utils';

@Component({
  selector: 'edit-page',
  imports: [ReactiveFormsModule, AlertComponent],
  template: `
    <div
      class="min-h-screen flex justify-center items-center flex-col gap-4 w-full"
    >
      @if (errorMessage) {
      <app-alert [text]="errorMessage" type="error" />
      }
      <form
        (submit)="edit($event)"
        [formGroup]="editForm"
        class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box"
      >
        <legend class="fieldset-legend">Edit</legend>

        <label class="fieldset-label">Email</label>
        <input formControlName="email" type="email" class="input" />

        <label class="fieldset-label">Username</label>
        <input formControlName="username" type="text" class="input" />

        <button class="btn btn-neutral mt-4" type="submit">Edit</button>
      </form>
    </div>
  `,
})
export class EditPage implements OnInit {
  private authService = inject(AuthService);
  private userService = inject(UserService);
  errorMessage = '';

  // Eliminamos el FormControl de 'avatar', porque Angular Forms no maneja archivos directamente
  editForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
  });

  selectedFile: File | undefined = undefined; // Aquí guardamos el archivo seleccionado

  onFileSelected(event: Event) {
    this.selectedFile = onFileSelected(event, false) as File;
  }

  edit(event: Event) {
    event.preventDefault();
    if (!this.editForm.valid) {
      this.errorMessage = 'Please fill in all fields correctly';
      return;
    }
    const formValue = this.editForm.value;

    this.authService.edit({
      username: formValue.username as string,
      email: formValue.email as string,
    }).subscribe({
      next: () => {
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = error.message || 'Edit failed';
      },
    });
  }

  ngOnInit(): void {
    const user = this.userService.getUser();
    if (user) {
      this.editForm.patchValue({
        username: user.username,
        email: user.email,
      });
    }
  }
}
