import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionEjecutivaOrganizacionComponent } from './comision-ejecutiva-organizacion.component';

describe('ComisionEjecutivaOrganizacionComponent', () => {
  let component: ComisionEjecutivaOrganizacionComponent;
  let fixture: ComponentFixture<ComisionEjecutivaOrganizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComisionEjecutivaOrganizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionEjecutivaOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
