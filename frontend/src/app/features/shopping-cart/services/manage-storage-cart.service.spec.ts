import { TestBed } from '@angular/core/testing';

import { ManageStorageCartService } from './manage-storage-cart.service';

describe('ManageStorageCartService', () => {
  let service: ManageStorageCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageStorageCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
