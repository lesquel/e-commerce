import { TestBed } from '@angular/core/testing';

import { SessionShoppingCartService } from './session-shopping-cart.service';

describe('SessionShoppingCartService', () => {
  let service: SessionShoppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionShoppingCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
