import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerSummaryViewComponent } from './buyer-summary-view.component';

describe('BuyerSummaryViewComponent', () => {
  let component: BuyerSummaryViewComponent;
  let fixture: ComponentFixture<BuyerSummaryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerSummaryViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyerSummaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
