import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-image-modal',
  imports: [MatIconModule],
  templateUrl: './image-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageModalComponent {
  image = input.required<string>();

}
