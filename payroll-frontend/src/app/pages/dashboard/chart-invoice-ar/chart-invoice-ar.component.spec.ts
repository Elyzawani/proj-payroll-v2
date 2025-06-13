import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartInvoiceArComponent } from './chart-invoice-ar.component';

describe('ChartInvoiceArComponent', () => {
  let component: ChartInvoiceArComponent;
  let fixture: ComponentFixture<ChartInvoiceArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartInvoiceArComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartInvoiceArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
