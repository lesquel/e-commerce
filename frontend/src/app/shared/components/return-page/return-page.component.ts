import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-return-page',
  imports: [RouterLink],
  templateUrl: './return-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReturnPageComponent {
  before = input.required<string>();
  
}
