import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerSummaryComponent } from './buyer-summary.component';

describe('BuyerSummaryComponent', () => {
  let component: BuyerSummaryComponent;
  let fixture: ComponentFixture<BuyerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
