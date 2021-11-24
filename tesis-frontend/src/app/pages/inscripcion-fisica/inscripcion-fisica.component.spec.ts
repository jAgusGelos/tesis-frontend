import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionFisicaComponent } from './inscripcion-fisica.component';

describe('InscripcionFisicaComponent', () => {
  let component: InscripcionFisicaComponent;
  let fixture: ComponentFixture<InscripcionFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionFisicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
