import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailImageGalleryComponent } from './product-detail-image-gallery.component';

describe('ProductDetailImageGalleryComponent', () => {
  let component: ProductDetailImageGalleryComponent;
  let fixture: ComponentFixture<ProductDetailImageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailImageGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
