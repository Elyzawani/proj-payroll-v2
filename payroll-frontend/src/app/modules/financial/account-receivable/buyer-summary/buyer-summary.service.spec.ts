import { TestBed } from '@angular/core/testing';

import { BuyerSummaryService } from './buyer-summary.service';

describe('BuyerSummaryService', () => {
  let service: BuyerSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyerSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
