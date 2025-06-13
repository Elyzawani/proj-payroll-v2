import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCashinoutComponent } from './chart-cashinout.component';

describe('ChartCashinoutComponent', () => {
  let component: ChartCashinoutComponent;
  let fixture: ComponentFixture<ChartCashinoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartCashinoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartCashinoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
