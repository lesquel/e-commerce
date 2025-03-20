import { ChangeDetectionStrategy, Component, input, Input, output } from '@angular/core';
import { Pagination } from '../../models';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  pagination = input<Pagination | undefined>();

  outputPage = output<number>();

  getPageNumbers(): number[] {
    return this.pagination()?.pageCount
      ? Array.from({ length: this.pagination()?.pageCount ?? 0 }, (_, i) => i + 1)
      : [];
  }

  emitPage(page: number): void {
    this.outputPage.emit(page);
  }

}
