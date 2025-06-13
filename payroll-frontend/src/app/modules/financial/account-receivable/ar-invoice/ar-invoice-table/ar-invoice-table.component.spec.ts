import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArInvoiceTableComponent } from './ar-invoice-table.component';

describe('ArInvoiceTableComponent', () => {
  let component: ArInvoiceTableComponent;
  let fixture: ComponentFixture<ArInvoiceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArInvoiceTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArInvoiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
