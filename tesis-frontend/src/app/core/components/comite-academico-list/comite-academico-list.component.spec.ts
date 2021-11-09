import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteAcademicoListComponent } from './comite-academico-list.component';

describe('ComiteAcademicoListComponent', () => {
  let component: ComiteAcademicoListComponent;
  let fixture: ComponentFixture<ComiteAcademicoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteAcademicoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteAcademicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
