import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideItemProductComponent } from './slide-item-product.component';

describe('SlideItemProductComponent', () => {
  let component: SlideItemProductComponent;
  let fixture: ComponentFixture<SlideItemProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideItemProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideItemProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
