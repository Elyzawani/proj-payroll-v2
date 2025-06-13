import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArInvoiceComponent } from './ar-invoice.component';

describe('ArInvoiceComponent', () => {
  let component: ArInvoiceComponent;
  let fixture: ComponentFixture<ArInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArInvoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
