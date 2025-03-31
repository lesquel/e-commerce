import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSliderCartComponent } from './container-slider-cart.component';

describe('ContainerSliderCartComponent', () => {
  let component: ContainerSliderCartComponent;
  let fixture: ComponentFixture<ContainerSliderCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerSliderCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerSliderCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
