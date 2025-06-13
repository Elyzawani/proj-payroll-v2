import { TestBed } from '@angular/core/testing';

import { DebitnoteService } from './debitnote.service';

describe('DebitnoteService', () => {
  let service: DebitnoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebitnoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
