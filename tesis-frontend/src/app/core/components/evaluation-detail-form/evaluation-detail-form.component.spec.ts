import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationDetailFormComponent } from './evaluation-detail-form.component';

describe('EvaluationDetailFormComponent', () => {
  let component: EvaluationDetailFormComponent;
  let fixture: ComponentFixture<EvaluationDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
