import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitNoteViewComponent } from './debit-note-view.component';

describe('DebitNoteViewComponent', () => {
  let component: DebitNoteViewComponent;
  let fixture: ComponentFixture<DebitNoteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitNoteViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebitNoteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
