import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelEvaluatorComponent } from './cancel-evaluator.component';

describe('CancelEvaluatorComponent', () => {
  let component: CancelEvaluatorComponent;
  let fixture: ComponentFixture<CancelEvaluatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelEvaluatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelEvaluatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
