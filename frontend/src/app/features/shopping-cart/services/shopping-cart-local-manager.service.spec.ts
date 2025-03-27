import { TestBed } from '@angular/core/testing';

import { ShoppingCartLocalManagerService } from './shopping-cart-local-manager.service';

describe('ShoppingCartLocalManagerService', () => {
  let service: ShoppingCartLocalManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartLocalManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
