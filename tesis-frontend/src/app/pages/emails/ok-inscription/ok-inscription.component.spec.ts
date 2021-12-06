import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkInscriptionComponent } from './ok-inscription.component';

describe('OkInscriptionComponent', () => {
  let component: OkInscriptionComponent;
  let fixture: ComponentFixture<OkInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OkInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
