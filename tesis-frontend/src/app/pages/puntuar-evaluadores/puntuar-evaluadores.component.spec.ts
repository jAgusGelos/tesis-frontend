import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntuarEvaluadoresComponent } from './puntuar-evaluadores.component';

describe('PuntuarEvaluadoresComponent', () => {
  let component: PuntuarEvaluadoresComponent;
  let fixture: ComponentFixture<PuntuarEvaluadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntuarEvaluadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntuarEvaluadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
