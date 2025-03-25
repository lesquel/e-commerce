import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IInputField } from '@app/shared/types';
import { ErrorHandler } from '@app/shared/utils/getErrorMessage';
import { LucideAngularModule, EyeIcon, EyeOff } from 'lucide-angular';


@Component({
  selector: 'app-auth-form',
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './auth-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent {
  @Input() formGroup!: FormGroup;
  @Input() inputFields!: IInputField[];
  @Input() title!: string;
  @Input() btnSubmitLabel: string = 'Send';

  @Output() formSubmit = new EventEmitter<void>();

  showPassword = false;

  readonly eyeIcon = EyeIcon
  readonly eyeOff = EyeOff


  get passwordVisibilityIcon() {
    return this.showPassword ? this.eyeIcon : this.eyeOff
  }



  OnSubmit() {
    if (this.formGroup.valid) {
      this.formSubmit.emit()
    }
  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  getErrorMessage(field: IInputField) {
    return ErrorHandler.getErrorMessage(this.formGroup, field.name)

  }
}
