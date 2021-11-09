import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionPermanenteOrganizacionComponent } from './comision-permanente-organizacion.component';

describe('ComisionPermanenteOrganizacionComponent', () => {
  let component: ComisionPermanenteOrganizacionComponent;
  let fixture: ComponentFixture<ComisionPermanenteOrganizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComisionPermanenteOrganizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionPermanenteOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
