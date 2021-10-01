import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatePaperListComponent } from './evaluate-paper-list.component';

describe('EvaluatePaperListComponent', () => {
  let component: EvaluatePaperListComponent;
  let fixture: ComponentFixture<EvaluatePaperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluatePaperListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatePaperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
