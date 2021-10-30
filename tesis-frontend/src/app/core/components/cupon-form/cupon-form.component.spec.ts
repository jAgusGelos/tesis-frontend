import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponFormComponent } from './cupon-form.component';

describe('CuponFormComponent', () => {
  let component: CuponFormComponent;
  let fixture: ComponentFixture<CuponFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuponFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuponFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
