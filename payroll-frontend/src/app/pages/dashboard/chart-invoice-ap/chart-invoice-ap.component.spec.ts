import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartInvoiceApComponent } from './chart-invoice-ap.component';

describe('ChartInvoiceApComponent', () => {
  let component: ChartInvoiceApComponent;
  let fixture: ComponentFixture<ChartInvoiceApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartInvoiceApComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartInvoiceApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
