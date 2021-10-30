import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPublicaCongresoComponent } from './informacion-publica-congreso.component';

describe('InformacionPublicaCongresoComponent', () => {
  let component: InformacionPublicaCongresoComponent;
  let fixture: ComponentFixture<InformacionPublicaCongresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionPublicaCongresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPublicaCongresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
