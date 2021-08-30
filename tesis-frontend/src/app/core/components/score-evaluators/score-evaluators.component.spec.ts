import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreEvaluatorsComponent } from './score-evaluators.component';

describe('ScoreEvaluatorsComponent', () => {
  let component: ScoreEvaluatorsComponent;
  let fixture: ComponentFixture<ScoreEvaluatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreEvaluatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreEvaluatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
