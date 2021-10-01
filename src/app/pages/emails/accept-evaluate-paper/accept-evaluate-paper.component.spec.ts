import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptEvaluatePaperComponent } from './accept-evaluate-paper.component';

describe('AcceptEvaluatePaperComponent', () => {
  let component: AcceptEvaluatePaperComponent;
  let fixture: ComponentFixture<AcceptEvaluatePaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptEvaluatePaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptEvaluatePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
