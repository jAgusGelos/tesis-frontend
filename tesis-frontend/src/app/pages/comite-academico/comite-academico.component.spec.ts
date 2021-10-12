import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteAcademicoComponent } from './comite-academico.component';

describe('ComiteAcademicoComponent', () => {
  let component: ComiteAcademicoComponent;
  let fixture: ComponentFixture<ComiteAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
