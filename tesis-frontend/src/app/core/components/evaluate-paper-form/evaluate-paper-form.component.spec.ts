import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatePaperFormComponent } from './evaluate-paper-form.component';

describe('EvaluatePaperFormComponent', () => {
  let component: EvaluatePaperFormComponent;
  let fixture: ComponentFixture<EvaluatePaperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluatePaperFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatePaperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
