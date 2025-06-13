import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerSummaryTableComponent } from './buyer-summary-table.component';

describe('BuyerSummaryTableComponent', () => {
  let component: BuyerSummaryTableComponent;
  let fixture: ComponentFixture<BuyerSummaryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerSummaryTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyerSummaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
