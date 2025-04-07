import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-rating',
  imports: [MatIconModule, CommonModule],
  templateUrl: './product-rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductRatingComponent {
  readonly maxRating: number = 5
  rating = input.required<number>();


  get fullStars(): number {
    const fraction = this.rating() % 1;
    if (fraction >= 0.75) {
      return Math.ceil(this.rating());
    }
    return Math.floor(this.rating());
  }

  get halfStarIndex(): number | null {
    const fraction = this.rating() % 1;
    if (fraction >= 0.25 && fraction < 0.75) {
      return Math.floor(this.rating());
    }
    return null;
  }
}
