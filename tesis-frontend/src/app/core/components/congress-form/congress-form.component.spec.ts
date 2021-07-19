import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongressFormComponent } from './congress-form.component';

describe('CongressFormComponent', () => {
  let component: CongressFormComponent;
  let fixture: ComponentFixture<CongressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongressFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
