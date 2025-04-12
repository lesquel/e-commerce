import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-image-modal',
  imports: [MatIconModule, CommonModule],
  templateUrl: './image-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageModalComponent {
  image = input.required<string>();
  selectedImageIndex = input.required<number>()
  imagesAmount = input.required<number>()
  selectedImageIndexOutput = output<number>()



  sendImageIndex(index: number) {
    this.selectedImageIndexOutput.emit(index)
  }


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft' && this.selectedImageIndex() > 0) {
      this.sendImageIndex(this.selectedImageIndex() - 1);
    } else if (event.key === 'ArrowRight' && this.selectedImageIndex() < this.imagesAmount() - 1) {
      this.sendImageIndex(this.selectedImageIndex() + 1);
    }
  }




}

