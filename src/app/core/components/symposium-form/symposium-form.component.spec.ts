import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymposiumFormComponent } from './symposium-form.component';

describe('SymposiumFormComponent', () => {
  let component: SymposiumFormComponent;
  let fixture: ComponentFixture<SymposiumFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymposiumFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymposiumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
