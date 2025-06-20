import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSummaryComponent } from './bank-summary.component';

describe('BankSummaryComponent', () => {
  let component: BankSummaryComponent;
  let fixture: ComponentFixture<BankSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
