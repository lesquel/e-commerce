import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCartContentComponent } from './slide-cart-content.component';

describe('SlideCartContentComponent', () => {
  let component: SlideCartContentComponent;
  let fixture: ComponentFixture<SlideCartContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideCartContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideCartContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
