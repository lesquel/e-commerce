import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailBreadcrumsComponent } from './product-detail-breadcrums.component';

describe('ProductDetailBreadcrumsComponent', () => {
  let component: ProductDetailBreadcrumsComponent;
  let fixture: ComponentFixture<ProductDetailBreadcrumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailBreadcrumsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailBreadcrumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
