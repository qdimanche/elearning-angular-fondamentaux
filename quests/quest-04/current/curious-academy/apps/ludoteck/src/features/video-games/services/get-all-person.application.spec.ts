import { TestBed } from '@angular/core/testing';

import { GetAllPersonApplication } from './get-all-person.application';

describe('GetAllPersonApplication', () => {
  let service: GetAllPersonApplication;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPersonApplication);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
