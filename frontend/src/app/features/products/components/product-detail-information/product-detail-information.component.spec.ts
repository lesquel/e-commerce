import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailInformationComponent } from './product-detail-information.component';

describe('ProductDetailInformationComponent', () => {
  let component: ProductDetailInformationComponent;
  let fixture: ComponentFixture<ProductDetailInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
