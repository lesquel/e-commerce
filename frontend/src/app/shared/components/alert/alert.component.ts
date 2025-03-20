import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type Type = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
  text = input.required();
  type = input()
}
