import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteOrganizadorComponent } from './comite-organizador.component';

describe('ComiteOrganizadorComponent', () => {
  let component: ComiteOrganizadorComponent;
  let fixture: ComponentFixture<ComiteOrganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteOrganizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
