import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptEvaluatorComponent } from './accept-evaluator.component';

describe('AcceptEvaluatorComponent', () => {
  let component: AcceptEvaluatorComponent;
  let fixture: ComponentFixture<AcceptEvaluatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptEvaluatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptEvaluatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
