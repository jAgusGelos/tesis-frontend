import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPaperEvaluadorListComponent } from './asignar-paper-evaluador-list.component';

describe('AsignarPaperEvaluadorListComponent', () => {
  let component: AsignarPaperEvaluadorListComponent;
  let fixture: ComponentFixture<AsignarPaperEvaluadorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarPaperEvaluadorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarPaperEvaluadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
