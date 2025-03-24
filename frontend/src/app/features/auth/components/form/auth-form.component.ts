import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputField } from '@app/shared/types';
import { ErrorHandler } from '@app/shared/utils/getErrorMessage';

@Component({
  selector: 'app-auth-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent {
  @Input() formGroup!: FormGroup;
  @Input() inputFields!: InputField[];
  @Input() title!: string;
  @Input() btnSubmitLabel: string = 'Send';

  @Output() formSubmit = new EventEmitter<void>();


  OnSubmit(){
    if (this.formGroup.valid){
      this.formSubmit.emit()
    }
  }




  getErrorMessage(field: InputField) {
    return ErrorHandler.getErrorMessage(this.formGroup, field.name)

  }
}
