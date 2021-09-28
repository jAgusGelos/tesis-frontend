import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelEvaluatePaperComponent } from './cancel-evaluate-paper.component';

describe('CancelEvaluatePaperComponent', () => {
  let component: CancelEvaluatePaperComponent;
  let fixture: ComponentFixture<CancelEvaluatePaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelEvaluatePaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelEvaluatePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
