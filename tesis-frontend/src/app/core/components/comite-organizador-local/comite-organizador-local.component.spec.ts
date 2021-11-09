import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteOrganizadorLocalComponent } from './comite-organizador-local.component';

describe('ComiteOrganizadorLocalComponent', () => {
  let component: ComiteOrganizadorLocalComponent;
  let fixture: ComponentFixture<ComiteOrganizadorLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteOrganizadorLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteOrganizadorLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
