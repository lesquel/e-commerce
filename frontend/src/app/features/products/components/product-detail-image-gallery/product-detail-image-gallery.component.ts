import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageModalComponent } from "./image-modal/image-modal.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-detail-image-gallery',
  imports: [CommonModule, MatIconModule,ImageModalComponent],
  templateUrl: './product-detail-image-gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailImageGalleryComponent {
  readonly maxAllowedImages = 5;

  imageLinks = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
  ];

  selectedImageIndex = 0;

  selectImage(e:Event,index: number) {
    e.preventDefault()
    e.stopPropagation()
    if (index >= this.maxAllowedImages) {
      this.selectedImageIndex = 0;
      return
    }
    this.selectedImageIndex = index

  }



}
