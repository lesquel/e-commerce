import { TestBed } from '@angular/core/testing';

import { ShoppingCartClientManagerService } from './shopping-cart-client-manager.service';

describe('ShoppingCartClientManagerService', () => {
  let service: ShoppingCartClientManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartClientManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
