import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitNoteTableComponent } from './debit-note-table.component';

describe('DebitNoteTableComponent', () => {
  let component: DebitNoteTableComponent;
  let fixture: ComponentFixture<DebitNoteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitNoteTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebitNoteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
