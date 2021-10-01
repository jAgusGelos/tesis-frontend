import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPaperEvaluadorComponent } from './asignar-paper-evaluador.component';

describe('AsignarPaperEvaluadorComponent', () => {
  let component: AsignarPaperEvaluadorComponent;
  let fixture: ComponentFixture<AsignarPaperEvaluadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarPaperEvaluadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarPaperEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
