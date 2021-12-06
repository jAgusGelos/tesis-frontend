import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCertificadosComponent } from './asignar-certificados.component';

describe('AsignarCertificadosComponent', () => {
  let component: AsignarCertificadosComponent;
  let fixture: ComponentFixture<AsignarCertificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarCertificadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
